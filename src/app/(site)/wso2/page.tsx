"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"
import { WSO2AuthService } from "@/lib/wso2/auth-service"

export default function WSO2Page() {
  const router = useRouter()
  const [baseUrl, setBaseUrl] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [isPublicMode, setIsPublicMode] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [authService, setAuthService] = useState<WSO2AuthService | null>(null)
  const [activeTab, setActiveTab] = useState<string>("connect")
  const [initialized, setInitialized] = useState<boolean>(false)

  useEffect(() => {
    // Check if we have stored connection details
    try {
      const storedBaseUrl = localStorage.getItem("wso2_baseUrl")
      const storedUsername = localStorage.getItem("wso2_username")
      const accessToken = localStorage.getItem("wso2_accessToken")

      if (storedBaseUrl) {
        setBaseUrl(storedBaseUrl)

        if (storedUsername && accessToken) {
          setUsername(storedUsername)
          setIsConnected(true)

          // Create auth service with stored credentials
          const auth = new WSO2AuthService(storedBaseUrl)

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
        } else if (localStorage.getItem("wso2_publicMode") === "true") {
          setIsPublicMode(true)
          setIsConnected(true)
        }
      }
    } catch (err) {
      console.error("Error accessing localStorage:", err)
    } finally {
      setInitialized(true)
    }
  }, [])

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate inputs
    if (!baseUrl) {
      setError("Please enter the API Manager URL")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Store base URL
      localStorage.setItem("wso2_baseUrl", baseUrl)

      if (!isPublicMode) {
        // If authenticating, require username and password
        if (!username || !password) {
          setError("Please fill in all fields")
          setIsLoading(false)
          return
        }

        // Store username
        localStorage.setItem("wso2_username", username)

        // Create auth service
        const auth = new WSO2AuthService(baseUrl)

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

          setAuthService(auth)
        } catch (authErr) {
          console.error("Authentication error:", authErr)
          if (authErr instanceof TypeError && authErr.message.includes("NetworkError")) {
            setError(
              "Network error: Unable to connect to the WSO2 API Manager. This may be due to CORS restrictions or the server being unavailable.",
            )
          } else {
            setError(`Authentication failed: ${authErr.message}`)
          }
          setIsLoading(false)
          return
        }
      } else {
        // Public mode
        localStorage.setItem("wso2_publicMode", "true")
      }

      // Connect to WSO2 API Manager
      setIsConnected(true)
    } catch (err) {
      console.error("Connection error:", err)
      setError("Failed to connect to WSO2 API Manager. Please check the URL and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBrowsePublic = () => {
    if (!baseUrl) {
      setError("Please enter the API Manager URL")
      return
    }

    setIsPublicMode(true)
    localStorage.setItem("wso2_baseUrl", baseUrl)
    localStorage.setItem("wso2_publicMode", "true")
    setIsConnected(true)
  }

  const handleLogout = () => {
    // Clear auth-related localStorage items
    localStorage.removeItem("wso2_username")
    localStorage.removeItem("wso2_clientId")
    localStorage.removeItem("wso2_clientSecret")
    localStorage.removeItem("wso2_accessToken")
    localStorage.removeItem("wso2_refreshToken")
    localStorage.removeItem("wso2_tokenExpiry")
    localStorage.removeItem("wso2_publicMode")

    // Reset state
    setIsConnected(false)
    setIsPublicMode(false)
    setAuthService(null)
    setPassword("")
  }

  // Show loading state until we've checked localStorage
  if (!initialized) {
    return (
      <div className="container mx-auto py-8 flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      {!isConnected ? (
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Connect to WSO2 API Manager</CardTitle>
              <CardDescription>
                Enter your WSO2 API Manager URL to browse APIs or login with your credentials for full access
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleConnect}>
              <CardContent className="space-y-4">
                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

                <div className="space-y-2">
                  <Label htmlFor="baseUrl">API Manager URL</Label>
                  <Input
                    id="baseUrl"
                    placeholder="https://localhost:9443"
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}
                    required
                  />
                </div>

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
                        required
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
                        required
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
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                {activeTab === "connect" ? (
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      "Connect with Credentials"
                    )}
                  </Button>
                ) : (
                  <Button type="button" className="w-full" onClick={handleBrowsePublic} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      "Browse Public APIs"
                    )}
                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">WSO2 API Manager</h1>
              <p className="text-gray-500">{isPublicMode ? "Browsing public APIs" : `Connected as ${username}`}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Disconnect
            </Button>
          </div>

          {/* Dynamically import the API list component to avoid server-side rendering issues */}
          {initialized && <WSO2ApiListWrapper baseUrl={baseUrl} authService={authService} />}
        </div>
      )}
    </div>
  )
}

// Separate component to handle the dynamic import of WSO2ApiList
function WSO2ApiListWrapper({ baseUrl, authService }: { baseUrl: string; authService: WSO2AuthService | null }) {
  const [ApiList, setApiList] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    // Dynamically import the component only on the client side
    import("@/components/wso2/api-list").then((module) => {
      setApiList(() => module.WSO2ApiList)
    })
  }, [])

  if (!ApiList) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return <ApiList baseUrl={baseUrl} authService={authService} />
}
