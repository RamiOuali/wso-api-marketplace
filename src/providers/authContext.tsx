"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react"
import { AuthService } from "@/lib/auth-service"
import { WSO2AuthService } from "@/lib/wso2/auth-service"
import type { User } from "oidc-client-ts"

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  username: string
  authService: AuthService
  wso2AuthService: WSO2AuthService | null
  login: (redirectPath?: string) => Promise<void>
  logout: () => Promise<void>
  getUser: () => Promise<User | null>
  getAccessToken: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a singleton instance of AuthService to ensure it's only created once
const authServiceInstance = new AuthService()

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [username, setUsername] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  // Use refs for services to ensure stable references
  const authService = useRef(authServiceInstance).current
  const wso2AuthServiceRef = useRef<WSO2AuthService | null>(null)
  const [wso2AuthService, setWso2AuthService] = useState<WSO2AuthService | null>(null)
  
  // Use ref for initialization tracking
  const initializationComplete = useRef(false)
  const initializationInProgress = useRef(false)

  // Initialize WSO2 auth service once
  useEffect(() => {
    if (!wso2AuthServiceRef.current) {
      const wso2BaseUrl = "https://localhost:9443" // Consider moving to config
      const wso2Auth = new WSO2AuthService(wso2BaseUrl)
      wso2AuthServiceRef.current = wso2Auth
      setWso2AuthService(wso2Auth)
    }
  }, [])

  // Initialize authentication state
  const initializeAuth = useCallback(async () => {
    // Prevent multiple initializations
    if (initializationComplete.current || initializationInProgress.current) {
      return
    }

    // Set flag to indicate initialization is in progress
    initializationInProgress.current = true
    
    setIsLoading(true)
    try {
      const isAuth = await authService.isAuthenticated()
      setIsAuthenticated(isAuth)

      if (isAuth) {
        const user = await authService.getUser()
        const userName = await authService.getUsername()
        setUsername(userName || user?.profile?.sub || "")

        // If authenticated with Identity Server, initialize API Manager connection
        if (wso2AuthServiceRef.current) {
          try {
            // Get API Manager service from auth service
            const apiManagerService = authService.getApiManagerService()
            if (apiManagerService) {
              // Get API Manager token - no need to log it
              const apiToken = await apiManagerService.getAccessToken()

              // Set credentials in WSO2AuthService
              wso2AuthServiceRef.current.setCredentialsFromIdentityAuth(
                apiManagerService.getClientId(),
                apiManagerService.getClientSecret(),
                apiToken,
                "", // No refresh token for client credentials
                Date.now() + 3600 * 1000, // 1 hour expiry
                userName || user?.profile?.sub || "",
              )
            }
          } catch (apiError) {
            console.error("Failed to initialize API Manager connection:", apiError)
          }
        }
      } else {
        setUsername("")
      }

      // Mark initialization as complete
      initializationComplete.current = true
    } catch (err) {
      console.error("Error initializing auth:", err)
      setIsAuthenticated(false)
      setUsername("")
    } finally {
      setIsLoading(false)
      // Reset in-progress flag
      initializationInProgress.current = false
    }
  }, [authService]) // Only depend on authService which is stable

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
    [authService],
  )

  // Handle logout
  const logout = useCallback(async () => {
    try {
      // Clear WSO2 auth service credentials
      if (wso2AuthServiceRef.current) {
        wso2AuthServiceRef.current.clearCredentials()
      }

      await authService.logout()

      // Reset initialization flags to allow re-initialization after logout
      initializationComplete.current = false
      initializationInProgress.current = false
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

  // Main initialization effect - runs once when component mounts
  useEffect(() => {
    // Only initialize if we have wso2AuthService ready and initialization hasn't started
    if (wso2AuthServiceRef.current && !initializationComplete.current && !initializationInProgress.current) {
      initializeAuth()
    }
  }, [initializeAuth])

  // Handle redirect callback
  useEffect(() => {
    // Handle redirect callback if code is present in URL
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("code")) {
      setIsLoading(true)
      authService
        .handleCallback()
        .then((user) => {
          if (user) {
            // Reset initialization flags to allow re-initialization after callback
            initializationComplete.current = false
            initializationInProgress.current = false
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
  }, [authService, initializeAuth])

  // Listen for auth status changes
  useEffect(() => {
    // Listen for auth status changes (e.g., from connectToApiManager)
    const handleAuthChange = () => {
      // Reset initialization flags to allow re-initialization after auth change
      if (initializationComplete.current && !initializationInProgress.current) {
        initializationComplete.current = false
        initializeAuth()
      }
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
    wso2AuthService,
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
