"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/skeleton"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Info, FileText, Code, Tag, Star } from "lucide-react"
import { WSO2DevPortalService } from "@/lib/wso2/api-service"
import type { WSO2AuthService } from "@/lib/wso2/auth-service"
import { ApiDocumentation } from "@/components/wso2/api-documentation"
import { SubscribeDialog } from "@/components/wso2/subscribe-dialog"
import { ApiConsole } from "@/components/wso2/api-console"
import { useThemeContext } from "@/providers/ThemeProvider"
import type { API } from "@/lib/wso2/types"
import { WSO2SubscriptionService } from "@/lib/wso2/subscription-service"
import Image from "next/image"

interface ApiDetailProps {
  baseUrl: string
  apiId: string
  authService?: WSO2AuthService
}

export function ApiDetail({ baseUrl, apiId, authService }: ApiDetailProps) {
  const router = useRouter()
  const { theme } = useThemeContext()
  const [api, setApi] = useState<API | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [swagger, setSwagger] = useState<any>(null)
  const [subscribeDialogOpen, setSubscribeDialogOpen] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [subscriptionInfo, setSubscriptionInfo] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<string>("overview")

  useEffect(() => {
    setIsAuthenticated(authService?.isAuthenticated() || false)
  }, [authService])

  useEffect(() => {
    const fetchApiDetails = async () => {
      try {
        setLoading(true)
        setError(null)

        const apiService = new WSO2DevPortalService(baseUrl, authService)

        try {
          const apiData = await apiService.getApiById(apiId)
          setApi(apiData)

          // Fetch swagger definition
          try {
            const swaggerData = await apiService.getApiSwagger(apiId)
            setSwagger(swaggerData)
          } catch (swaggerError) {
            console.error("Error fetching swagger:", swaggerError)
          }

          // Fetch thumbnail if available
          if (apiData.hasThumbnail) {
            try {
              const thumbnailBlob = await apiService.getApiThumbnail(apiId)
              setThumbnailUrl(URL.createObjectURL(thumbnailBlob))
            } catch (thumbnailError) {
              console.error("Error fetching thumbnail:", thumbnailError)
            }
          }

          // Check if user is already subscribed
          if (authService?.isAuthenticated()) {
            try {
              const subscriptionService = new WSO2SubscriptionService(baseUrl, authService)
              const subscriptions = await subscriptionService.getSubscriptions(undefined, apiId)
              setIsSubscribed(subscriptions.count > 0)
              if (subscriptions.count > 0) {
                setSubscriptionInfo(subscriptions.list[0])
              }
            } catch (subscriptionError) {
              console.error("Error fetching subscriptions:", subscriptionError)
            }
          }
        } catch (apiError) {
          console.error("Error fetching API details:", apiError)
          if (apiError instanceof TypeError && apiError.message.includes("NetworkError")) {
            setError(
              "Network error: Unable to connect to the WSO2 API Manager. This may be due to CORS restrictions or the server being unavailable.",
            )
          } else {
            setError(`Failed to fetch API details: ${apiError.message}`)
          }
        }
      } catch (err) {
        console.error("Error in API details component:", err)
        setError("An unexpected error occurred. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchApiDetails()

    // Cleanup function for thumbnail URL
    return () => {
      if (thumbnailUrl) {
        URL.revokeObjectURL(thumbnailUrl)
      }
    }
  }, [baseUrl, apiId, authService])

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <Skeleton className="h-10 w-1/3 mb-2" />
          <Skeleton className="h-5 w-1/2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-1/4 mb-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-64 w-full" />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-1/2 mb-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    )
  }

  if (!api) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center py-12 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">API Not Found</h3>
          <p className="text-gray-500 mb-4">The requested API could not be found.</p>
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <h1 className="text-3xl font-bold">{api.name}</h1>
            <Badge
              variant={api.lifeCycleStatus === "PUBLISHED" ? "default" : "secondary"}
              style={{
                backgroundColor:
                  api.lifeCycleStatus === "PUBLISHED"
                    ? theme?.successColor || "#10b981"
                    : theme?.warningColor || "#f59e0b",
                color: "#ffffff",
              }}
            >
              {api.lifeCycleStatus}
            </Badge>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
            <span>v{api.version}</span>
            <span>•</span>
            <span>By {api.provider}</span>
            {api.avgRating && (
              <>
                <span>•</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                  <span>{api.avgRating}</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {isAuthenticated && !isSubscribed && (
            <Button
              onClick={() => setSubscribeDialogOpen(true)}
              style={{
                backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                color: theme?.buttonTextColor || "#ffffff",
              }}
            >
              Subscribe to API
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList
              className="mb-4"
              style={{
                backgroundColor: theme?.secondaryColor + "20" || "#f1f5f9",
                borderColor: theme?.borderColor || "#e5e7eb",
              }}
            >
              <TabsTrigger value="overview">
                <Info className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="documentation">
                <FileText className="h-4 w-4 mr-2" />
                Documentation
              </TabsTrigger>
              <TabsTrigger value="console">
                <Code className="h-4 w-4 mr-2" />
                API Console
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card
                className="mb-6"
                style={{
                  backgroundColor: theme?.cardBackground || "#ffffff",
                  borderColor: theme?.cardBorderColor || "#e5e7eb",
                  borderRadius: theme?.cardBorderRadius || "0.5rem",
                  boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{api.description || "No description available."}</p>
                </CardContent>
              </Card>

              {api.tags && api.tags.length > 0 && (
                <Card
                  className="mb-6"
                  style={{
                    backgroundColor: theme?.cardBackground || "#ffffff",
                    borderColor: theme?.cardBorderColor || "#e5e7eb",
                    borderRadius: theme?.cardBorderRadius || "0.5rem",
                    boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardHeader>
                    <CardTitle>Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {api.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {api.endpointURLs && api.endpointURLs.length > 0 && (
                <Card
                  className="mb-6"
                  style={{
                    backgroundColor: theme?.cardBackground || "#ffffff",
                    borderColor: theme?.cardBorderColor || "#e5e7eb",
                    borderRadius: theme?.cardBorderRadius || "0.5rem",
                    boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardHeader>
                    <CardTitle>Endpoints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {api.endpointURLs.map((endpoint, index) => (
                        <div key={index} className="border rounded-md p-4">
                          <h3 className="font-medium mb-2">
                            {endpoint.environmentDisplayName || endpoint.environmentName}
                          </h3>
                          <div className="space-y-2">
                            {endpoint.URLs?.https && (
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">HTTPS</Badge>
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">
                                  {endpoint.URLs.https}
                                </code>
                              </div>
                            )}
                            {endpoint.URLs?.http && (
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">HTTP</Badge>
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">
                                  {endpoint.URLs.http}
                                </code>
                              </div>
                            )}
                            {endpoint.URLs?.ws && (
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">WS</Badge>
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">{endpoint.URLs.ws}</code>
                              </div>
                            )}
                            {endpoint.URLs?.wss && (
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">WSS</Badge>
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">
                                  {endpoint.URLs.wss}
                                </code>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {api.businessInformation && (
                <Card
                  className="mb-6"
                  style={{
                    backgroundColor: theme?.cardBackground || "#ffffff",
                    borderColor: theme?.cardBorderColor || "#e5e7eb",
                    borderRadius: theme?.cardBorderRadius || "0.5rem",
                    boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {api.businessInformation.businessOwner && (
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Business Owner</h3>
                          <p>{api.businessInformation.businessOwner}</p>
                          {api.businessInformation.businessOwnerEmail && (
                            <p className="text-sm text-blue-600">{api.businessInformation.businessOwnerEmail}</p>
                          )}
                        </div>
                      )}
                      {api.businessInformation.technicalOwner && (
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Technical Owner</h3>
                          <p>{api.businessInformation.technicalOwner}</p>
                          {api.businessInformation.technicalOwnerEmail && (
                            <p className="text-sm text-blue-600">{api.businessInformation.technicalOwnerEmail}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="documentation">
              <Card
                className="mb-6"
                style={{
                  backgroundColor: theme?.cardBackground || "#ffffff",
                  borderColor: theme?.cardBorderColor || "#e5e7eb",
                  borderRadius: theme?.cardBorderRadius || "0.5rem",
                  boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <CardHeader>
                  <CardTitle>API Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  {swagger ? (
                    <ApiDocumentation swagger={swagger} />
                  ) : (
                    <div className="text-center py-8">
                      <p>No documentation available for this API.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="console">
              <Card
                className="mb-6"
                style={{
                  backgroundColor: theme?.cardBackground || "#ffffff",
                  borderColor: theme?.cardBorderColor || "#e5e7eb",
                  borderRadius: theme?.cardBorderRadius || "0.5rem",
                  boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <CardHeader>
                  <CardTitle>API Console</CardTitle>
                  <CardDescription>Test the API endpoints directly from your browser</CardDescription>
                </CardHeader>
                <CardContent>
                  {isAuthenticated ? (
                    swagger ? (
                      isSubscribed && subscriptionInfo ? (
                        <ApiConsole
                          baseUrl={baseUrl}
                          api={api}
                          authService={authService!}
                          applicationId={subscriptionInfo.applicationId}
                        />
                      ) : (
                        <div className="border rounded-md p-4">
                          <p className="mb-4">You need to subscribe to this API to use the API Console.</p>
                          <Button onClick={() => setSubscribeDialogOpen(true)}>Subscribe to API</Button>
                        </div>
                      )
                    ) : (
                      <div className="text-center py-8">
                        <p>API Console is not available for this API.</p>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-8">
                      <p className="mb-4">You need to be logged in to use the API Console.</p>
                      <Button onClick={() => router.push("/wso2")}>Log In</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card
            className="mb-6"
            style={{
              backgroundColor: theme?.cardBackground || "#ffffff",
              borderColor: theme?.cardBorderColor || "#e5e7eb",
              borderRadius: theme?.cardBorderRadius || "0.5rem",
              boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <CardHeader>
              <CardTitle>API Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {thumbnailUrl && (
                <div className="flex justify-center mb-4">
                  <div className="relative h-32 w-32 overflow-hidden rounded-md">
                    <Image
                      src={thumbnailUrl || "/placeholder.svg"}
                      alt={`${api.name} thumbnail`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-gray-500">Context</h3>
                <p className="font-mono text-sm">{api.context}</p>
              </div>

              {api.type && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Type</h3>
                  <p>{api.type}</p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-gray-500">Created</h3>
                <p>{formatDate(api.createdTime)}</p>
              </div>

              {api.lastUpdatedTime && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                  <p>{formatDate(api.lastUpdatedTime)}</p>
                </div>
              )}

              {api.categories && api.categories.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Categories</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {api.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {api.throttlingPolicies && api.throttlingPolicies.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Available Tiers</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {api.throttlingPolicies.map((policy) => (
                      <Badge key={policy} variant="outline">
                        {policy}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {isAuthenticated && !isSubscribed && (
                <Button className="w-full" onClick={() => setSubscribeDialogOpen(true)}>
                  Subscribe to API
                </Button>
              )}
            </CardContent>
          </Card>

          {api.monetization?.enabled && (
            <Card
              className="mb-6"
              style={{
                backgroundColor: theme?.cardBackground || "#ffffff",
                borderColor: theme?.cardBorderColor || "#e5e7eb",
                borderRadius: theme?.cardBorderRadius || "0.5rem",
                boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <CardHeader>
                <CardTitle>Monetization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded">
                  <p className="font-medium">This API is monetized</p>
                  <p className="text-sm mt-1">Subscription may incur charges based on usage.</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {isAuthenticated && (
        <SubscribeDialog
          open={subscribeDialogOpen}
          onOpenChange={setSubscribeDialogOpen}
          baseUrl={baseUrl}
          api={api}
          authService={authService!}
        />
      )}
    </div>
  )
}
