"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"
import { useThemeContext } from "@/providers/ThemeProvider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AuthService } from "@/lib/auth-service"

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAuthSuccess: (authService: AuthService, isPublicMode: boolean, username?: string) => void
}

export function WSO2AuthModal({ open, onOpenChange, onAuthSuccess }: AuthModalProps) {
  const { theme } = useThemeContext()
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isPublicMode, setIsPublicMode] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("connect")

  // Always use localhost:9443 as the base URL
  const baseUrl = "https://localhost:9443"

  const handleConnect = async () => {
    // Validate inputs for credential mode
    if (!isPublicMode && (!username || !password)) {
      setError("Please enter both username and password")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Always store the fixed base URL
      localStorage.setItem("wso2_baseUrl", baseUrl)

      if (!isPublicMode) {
        // Store username
        localStorage.setItem("wso2_username", username)

        // Create auth service
        const auth = new AuthService(baseUrl)
      

        try {
          // Register client
          const { clientId, clientSecret } = await auth.registerClient(username, password)

          // Store client credentials
          localStorage.setItem("wso2_clientId", clientId)
          localStorage.setItem("wso2_clientSecret", clientSecret)

          // Get access token
          const accessToken = await auth.getAccessTokenWithPasswordGrant(username, password)

          // Store token details
          localStorage.setItem("wso2_accessToken", auth.accessToken || "")
          localStorage.setItem("wso2_refreshToken", auth.refreshToken || "")
          localStorage.setItem("wso2_tokenExpiry", auth.tokenExpiry.toString())

          // Notify parent component of successful authentication
          onAuthSuccess(auth, false, username)
          onOpenChange(false)
          
          // Refresh the page after successful authentication
          setTimeout(() => {
            window.location.reload()
          }, 300) // Small delay to ensure localStorage is updated before refresh
          
        } catch (authErr) {
          console.error("Authentication error:", authErr)
          if (authErr instanceof TypeError && authErr.message.includes("NetworkError")) {
            setError(
              "Network error: Unable to connect to the WSO2 API Manager. This may be due to CORS restrictions or the server being unavailable."
            )
          } else {
            setError(`Authentication failed: ${authErr.message}`)
          }
        }
      } else {
        // Public mode
        localStorage.setItem("wso2_publicMode", "true")

        // Create auth service without credentials for public mode
        const auth = new WSO2AuthService(baseUrl)

        // Notify parent component of successful public mode
        onAuthSuccess(auth, true)
        onOpenChange(false)
        
        // Refresh the page after switching to public mode
        setTimeout(() => {
          window.location.reload()
        }, 300) // Small delay to ensure localStorage is updated before refresh
      }
    } catch (err) {
      console.error("Connection error:", err)
      setError("Failed to connect to WSO2 API Manager. Please check your network connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBrowsePublic = () => {
    setIsPublicMode(true)
    localStorage.setItem("wso2_baseUrl", baseUrl)
    localStorage.setItem("wso2_publicMode", "true")

    // Create auth service without credentials for public mode
    const auth = new WSO2AuthService(baseUrl)

    // Notify parent component of successful public mode
    onAuthSuccess(auth, true)
    onOpenChange(false)
    
    // Refresh the page after switching to public mode
    setTimeout(() => {
      window.location.reload()
    }, 300) // Small delay to ensure localStorage is updated before refresh
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md"
        style={{
          backgroundColor: theme?.cardBackground || "white",
          borderColor: theme?.cardBorderColor || "#e5e7eb",
          borderRadius: theme?.cardBorderRadius || "0.5rem",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: theme?.textColor || "#111827" }}>Connect to WSO2 API Manager</DialogTitle>
          <DialogDescription>Sign in with your credentials for full access or browse public APIs</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="connect">With Credentials</TabsTrigger>
              <TabsTrigger value="public">Public Access</TabsTrigger>
            </TabsList>

            <TabsContent value="connect" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    backgroundColor: theme?.inputBackground || "white",
                    borderColor: theme?.inputBorderColor || "#d1d5db",
                    color: theme?.inputTextColor || "#111827",
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    backgroundColor: theme?.inputBackground || "white",
                    borderColor: theme?.inputBorderColor || "#d1d5db",
                    color: theme?.inputTextColor || "#111827",
                  }}
                />
              </div>
            </TabsContent>

            <TabsContent value="public">
              <div className="py-4">
                <p className="text-sm text-gray-500 mb-2">
                  Browse public APIs without authentication. Some features will be limited.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          {activeTab === "connect" ? (
            <Button
              onClick={handleConnect}
              disabled={isLoading}
              style={{
                backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                color: theme?.buttonTextColor || "white",
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          ) : (
            <Button
              onClick={handleBrowsePublic}
              style={{
                backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                color: theme?.buttonTextColor || "white",
              }}
            >
              Browse Public APIs
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
