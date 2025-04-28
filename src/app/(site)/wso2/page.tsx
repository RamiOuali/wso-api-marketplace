"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, LogIn, RefreshCw } from "lucide-react"
import { useAuth } from "@/providers/authContext"
import { useThemeContext } from "@/providers/ThemeProvider"

export default function WSO2Page() {
  const { theme } = useThemeContext()
  const { isAuthenticated, isLoading: authLoading, login, wso2AuthService } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Always use localhost:9443 as the base URL
  const baseUrl = "https://localhost:9443"

  // Handle manual refresh
  const handleRefresh = () => {
    window.location.reload()
  }

  // Show loading state until auth is loaded
  if (authLoading) {
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

  // If not authenticated with Identity Server, show login prompt
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-8">
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
                Please use the Sign In button to authenticate with WSO2 Identity Server.
              </p>
              <Button onClick={() => login("/wso2")} style={buttonStyle}>
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // If authenticated but no WSO2 auth service, show error
  if (!wso2AuthService) {
    return (
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto">
          <Card style={cardStyle}>
            <CardHeader>
              <CardTitle style={{ color: theme?.headingColor || theme?.textColor || "#333333" }}>
                WSO2 API Console
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center" style={{ color: theme?.textColor || "#333333" }}>
              <p>There was an issue connecting to the WSO2 API Manager.</p>
              <p className="text-sm" style={{ color: theme?.textColor ? `${theme.textColor}88` : "#66666688" }}>
                Please try refreshing the page or signing in again.
              </p>
              <Button onClick={handleRefresh} style={buttonStyle}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Page
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // If we have a WSO2 auth service, show the API list
  return (
    <div className="container mx-auto py-8">
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1
              className="text-3xl font-bold"
              style={{
                color: theme?.headingColor || theme?.textColor || "#333333",
                fontFamily: theme?.headingFont || theme?.bodyFont || "Inter, sans-serif",
              }}
            >
              WSO2 API Manager
            </h1>
            <p style={{ color: theme?.textColor ? `${theme.textColor}88` : "#66666688" }}>
              Connected as {wso2AuthService.username || "User"}
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
        <WSO2ApiListWrapper baseUrl={baseUrl} authService={wso2AuthService} theme={theme} />
      </div>
    </div>
  )
}

// Separate component to handle the dynamic import of WSO2ApiList
function WSO2ApiListWrapper({
  baseUrl,
  authService,
  theme,
}: {
  baseUrl: string
  authService: any
  theme: any
}) {
  const [ApiList, setApiList] = useState<React.ComponentType<any> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Dynamically import the component only on the client side
    setIsLoading(true)
    import("@/components/wso2/api-list")
      .then((module) => {
        setApiList(() => module.WSO2ApiList)
        setIsLoading(false)
      })
      .catch((err) => {
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
