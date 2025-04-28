"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { AuthService } from "@/lib/auth-service"
import { User } from "oidc-client-ts"

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  username: string
  authService: AuthService
  login: (redirectPath?: string) => Promise<void>
  logout: () => Promise<void>
  getUser: () => Promise<User | null>
  getAccessToken: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [username, setUsername] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [initialized, setInitialized] = useState<boolean>(false)
  const authService = new AuthService() // Singleton instance

  // Initialize authentication state
  const initializeAuth = useCallback(async () => {
    setIsLoading(true)
    try {
      const isAuth = await authService.isAuthenticated()
      setIsAuthenticated(isAuth)
      if (isAuth) {
        const user = await authService.getUser()
        const userName = await authService.getUsername()
        setUsername(userName || user?.profile?.sub || "")
      } else {
        setUsername("")
      }
    } catch (err) {
      console.error("Error initializing auth:", err)
      setIsAuthenticated(false)
      setUsername("")
    } finally {
      setInitialized(true)
      setIsLoading(false)
    }
  }, [authService])

  // Handle login
  const login = useCallback(
    async (redirectPath?: string) => {
      try {
        await authService.login(redirectPath)
      } catch (err) {
        console.error("Login error:", err)
        throw err
      }
    },
    [authService]
  )

  // Handle logout
  const logout = useCallback(async () => {
    try {
      await authService.logout()
    } catch (err) {
      console.error("Logout error:", err)
    }
  }, [authService])

  // Get user
  const getUser = useCallback(async () => {
    try {
      return await authService.getUser()
    } catch (err) {
      console.error("Error fetching user:", err)
      return null
    }
  }, [authService])

  // Get access token
  const getAccessToken = useCallback(async () => {
    try {
      return await authService.getAccessToken()
    } catch (err) {
      console.error("Error fetching access token:", err)
      return null
    }
  }, [authService])

  useEffect(() => {
    // Initialize auth on mount
    initializeAuth()

    // Handle redirect callback if code is present in URL
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("code")) {
      setIsLoading(true)
      authService
        .handleCallback()
        .then((user) => {
          if (user) {
            initializeAuth()
            // Clear URL parameters
            window.history.replaceState({}, document.title, window.location.pathname)
          }
        })
        .catch((err) => {
          console.error("Callback error:", err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    // Listen for auth status changes (e.g., from connectToApiManager)
    const handleAuthChange = () => {
      initializeAuth()
    }
    document.addEventListener("wso2AuthStatusChanged", handleAuthChange)

    // Cleanup
    return () => {
      document.removeEventListener("wso2AuthStatusChanged", handleAuthChange)
    }
  }, [initializeAuth])

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    username,
    authService,
    login,
    logout,
    getUser,
    getAccessToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
