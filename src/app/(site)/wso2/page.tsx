"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, LogIn, RefreshCw } from "lucide-react"
import { WSO2AuthService } from "@/lib/wso2/auth-service"
import { useThemeContext } from "@/providers/ThemeProvider"

export default function WSO2Page() {
  const { theme } = useThemeContext()
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [isPublicMode, setIsPublicMode] = useState<boolean>(false)
  const [username, setUsername] = useState<string>("")
  const [authService, setAuthService] = useState<WSO2AuthService | null>(null)
  const [initialized, setInitialized] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Always use localhost:9443 as the base URL
  const baseUrl = "https://localhost:9443"

  // Function to initialize the auth service from localStorage
  const initializeAuthService = useCallback(() => {
    setIsLoading(true)
    try {
      const storedUsername = localStorage.getItem("wso2_username")
      const accessToken = localStorage.getItem("wso2_accessToken")
      const publicMode = localStorage.getItem("wso2_publicMode") === "true"

      if (storedUsername && accessToken) {
        setUsername(storedUsername)
        setIsConnected(true)

        // Create auth service with stored credentials
        const auth = new WSO2AuthService(baseUrl)

        // Set auth service properties
        const clientId = localStorage.getItem("wso2_clientId")
        const clientSecret = localStorage.getItem("wso2_clientSecret")
        const refreshToken = localStorage.getItem("wso2_refreshToken")
        const tokenExpiry = localStorage.getItem("wso2_tokenExpiry")

        if (clientId && clientSecret && accessToken && refreshToken && tokenExpiry) {
          Object.assign(auth, {
            clientId,
            clientSecret,
            accessToken,
            refreshToken,
            tokenExpiry: Number.parseInt(tokenExpiry, 10),
          })

          setAuthService(auth)
        }
      } else if (publicMode) {
        setIsPublicMode(true)
        setIsConnected(true)

        // Create auth service for public mode
        const auth = new WSO2AuthService(baseUrl)
        setAuthService(auth)
      } else {
        setIsConnected(false)
        setAuthService(null)
      }
    } catch (err) {
      console.error("Error accessing localStorage:", err)
      setIsConnected(false)
      setAuthService(null)
    } finally {
      setInitialized(true)
      setIsLoading(false)
    }
  }, [baseUrl])

  useEffect(() => {
    // Initial load
    initializeAuthService()

    // Set up event listener for auth changes
    const handleAuthChange = () => {
      initializeAuthService()
    }

    // Listen for authentication events
    document.addEventListener("wso2AuthStatusChanged", handleAuthChange)

    // Clean up
    return () => {
      document.removeEventListener("wso2AuthStatusChanged", handleAuthChange)
    }
  }, [initializeAuthService])

  // Handle manual refresh
  const handleRefresh = () => {
    initializeAuthService()
  }

  // Show loading state until we've checked localStorage
  if (isLoading && !initialized) {
    return (
      <div className="container mx-auto py-8 flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: theme?.primaryColor || "#0070f3" }} />
      </div>
    )
  }

  const buttonStyle = {
    backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
    color: theme?.buttonTextColor || "#ffffff",
    borderRadius: theme?.buttonBorderRadius || "0.375rem",
    padding: theme?.buttonPadding || "0.5rem 1rem",
  }

  const cardStyle = {
    backgroundColor: theme?.cardBackground || "#ffffff",
    borderColor: theme?.cardBorderColor || "#e5e7eb",
    borderRadius: theme?.cardBorderRadius || "0.5rem",
    boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
  }

  return (
    <div className="container mx-auto py-8">
      {!isConnected ? (
        <div className="max-w-md mx-auto">
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle style={{ color: theme?.headingColor || theme?.textColor || "#333333" }}>
                WSO2 API Console
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center" style={{ color: theme?.textColor || "#333333" }}>
              <p>You need to sign in to access the WSO2 API Console.</p>
              <p className="text-sm" style={{ color: theme?.textColor ? `${theme.textColor}88` : "#66666688" }}>
                Please use the Sign In button to authenticate with WSO2 API Manager.
              </p>
              <Button
                onClick={() => {
                  // This will trigger the auth modal from navbar
                  const event = new CustomEvent("openWso2AuthModal")
                  document.dispatchEvent(event)
                }}
                style={buttonStyle}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1
                className="text-3xl font-bold"
                style={{
                  color: theme?.headingColor || theme?.textColor || "#333333",
                  fontFamily: theme?.headingFont || theme?.bodyFont || "Inter, sans-serif"
                }}
              >
                WSO2 API Manager
              </h1>
              <p style={{ color: theme?.textColor ? `${theme.textColor}88` : "#66666688" }}>
                {isPublicMode ? "Browsing public APIs" : `Connected as ${username}`}
              </p>
            </div>
            <Button
              onClick={handleRefresh}
              variant="outline"
              style={{
                borderColor: theme?.buttonSecondaryColor || "#6c757d",
                color: theme?.buttonSecondaryColor || "#6c757d",
                borderRadius: theme?.buttonBorderRadius || "0.375rem",
              }}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>

          {/* API List Component */}
          {initialized && <WSO2ApiListWrapper baseUrl={baseUrl} authService={authService} theme={theme} />}
        </div>
      )}
    </div>
  )
}

// Separate component to handle the dynamic import of WSO2ApiList
function WSO2ApiListWrapper({ baseUrl, authService, theme }: {
  baseUrl: string;
  authService: WSO2AuthService | null;
  theme: any;
}) {
  const [ApiList, setApiList] = useState<React.ComponentType<any> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Dynamically import the component only on the client side
    setIsLoading(true)
    import("@/components/wso2/api-list").then((module) => {
      setApiList(() => module.WSO2ApiList)
      setIsLoading(false)
    }).catch(err => {
      console.error("Failed to load API list component:", err)
      setIsLoading(false)
    })
  }, [])

  if (isLoading || !ApiList) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: theme?.primaryColor || "#0070f3" }} />
      </div>
    )
  }

  return <ApiList baseUrl={baseUrl} authService={authService} theme={theme} />
}
