"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/skeleton"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Code,
  ExternalLink,
  FileText,
  Info,
  Layers,
  Loader2,
  TagIcon,
} from "lucide-react"
import { WSO2DevPortalService } from "@/lib/wso2/api-service"
import { ApiDocumentation } from "@/components/wso2/api-documentation"
import { SubscribeDialog } from "@/components/wso2/subscribe-dialog"
import { ApiConsole } from "@/components/wso2/api-console"
import { useThemeContext } from "@/providers/ThemeProvider"
import type { API } from "@/lib/wso2/types"
import { WSO2SubscriptionService } from "@/lib/wso2/subscription-service"
import Image from "next/image"
import { useAuth } from "@/providers/authContext"

interface ApiDetailProps {
  baseUrl: string
  apiId: string
}

export function ApiDetail({ baseUrl, apiId }: ApiDetailProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { theme } = useThemeContext()
  const { isAuthenticated, wso2AuthService } = useAuth()

  const [api, setApi] = useState<API | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [swagger, setSwagger] = useState<any>(null)
  const [subscribeDialogOpen, setSubscribeDialogOpen] = useState<boolean>(false)
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [subscriptionInfo, setSubscriptionInfo] = useState<any>(null)

  // Get the tab from URL or default to overview
  const initialTab = searchParams?.get("tab") || "overview"
  const [activeTab, setActiveTab] = useState<string>(initialTab)

  useEffect(() => {
    const fetchApiDetails = async () => {
      try {
        setLoading(true)
        setError(null)

        const apiService = new WSO2DevPortalService(baseUrl, wso2AuthService)

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
          if (isAuthenticated && wso2AuthService) {
            try {
              const subscriptionService = new WSO2SubscriptionService(baseUrl, wso2AuthService)
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
  }, [baseUrl, apiId, wso2AuthService, isAuthenticated])

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Get status color based on lifecycle status
  const getStatusColor = (status: string) => {
    if (!theme) return "#10b981"

    switch (status.toUpperCase()) {
      case "PUBLISHED":
        return theme.successColor || "#10b981"
      case "DEPRECATED":
        return theme.warningColor || "#f59e0b"
      case "RETIRED":
        return theme.errorColor || "#ef4444"
      default:
        return theme.infoColor || "#3b82f6"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-12 px-4">
          <div className="flex items-center gap-4 mb-8">
            <Skeleton className="h-16 w-16 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-9 space-y-6">
              <Skeleton className="h-96 w-full rounded-lg" />
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
            <div className="xl:col-span-3 space-y-6">
              <Skeleton className="h-80 w-full rounded-lg" />
              <Skeleton className="h-40 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-12 px-4">
          <Alert variant="destructive" className="mb-6 max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4 mr-2" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <div className="text-center">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="flex items-center gap-2 mx-auto hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!api) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-12 px-4">
          <div className="bg-muted/50 border rounded-lg p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-3">API Not Found</h3>
            <p className="text-muted-foreground mb-6">
              The requested API could not be found or you don't have permission to access it.
            </p>
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="flex items-center gap-2 mx-auto hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 pt-8 pb-12">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="hover:bg-muted/50 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
            {isAuthenticated && !isSubscribed && (
              <Button
                onClick={() => setSubscribeDialogOpen(true)}
                className="group hover:scale-105 transition-transform duration-200"
                style={{
                  backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                  color: theme?.buttonTextColor || "#ffffff",
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                Subscribe
              </Button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            {thumbnailUrl ? (
              <div className="relative h-20 w-20 rounded-xl overflow-hidden border-2 border-muted shadow-lg shrink-0">
                <Image
                  src={thumbnailUrl}
                  alt={`${api.name} thumbnail`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ) : (
              <div className="h-20 w-20 rounded-xl bg-muted flex items-center justify-center text-3xl font-bold shrink-0 shadow-lg">
                {api.name?.charAt(0) || "A"}
              </div>
            )}

            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1
                  className="text-3xl font-bold tracking-tight"
                  style={{
                    color: theme?.textColor || "#111827",
                    fontFamily: theme?.headingFont || "Inter, sans-serif",
                  }}
                >
                  {api.name}
                </h1>
                <Badge
                  className="text-white px-3 py-1"
                  style={{
                    backgroundColor: getStatusColor(api.lifeCycleStatus),
                  }}
                >
                  {api.lifeCycleStatus}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-2">
                <span className="font-medium">v{api.version}</span>
                <span className="text-xs">•</span>
                <span>By {api.provider}</span>
                {api.avgRating && (
                  <>
                    <span className="text-xs">•</span>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-yellow-400-hoc mr-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{api.avgRating}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-9 space-y-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-transparent p-0 mb-6 sticky top-0 z-10 border-b border-muted">
                <TabsTrigger
                  value="overview"
                  className="px-6 py-3 text-base font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent transition-all hover:bg-muted/50"
                >
                  <Info className="h-5 w-5 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="documentation"
                  className="px-6 py-3 text-base font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent transition-all hover:bg-muted/50"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Documentation
                </TabsTrigger>
                <TabsTrigger
                  value="console"
                  className="px-6 py-3 text-base font-medium rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent transition-all hover:bg-muted/50"
                >
                  <Code className="h-5 w-5 mr-2" />
                  API Console
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8 mt-0">
                {/* Description */}
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-primary" />
                      Description
                    </h2>
                    <div className="prose prose-lg max-w-none text-foreground">
                      {api.description ? (
                        <p>{api.description}</p>
                      ) : (
                        <p className="text-muted-foreground italic">No description available.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                {api.tags && api.tags.length > 0 && (
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                        <TagIcon className="h-6 w-6 text-primary" />
                        Tags
                      </h2>
                      <div className="flex flex-wrap gap-3">
                        {api.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="px-4 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Endpoints */}
                {api.endpointURLs && api.endpointURLs.length > 0 && (
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                        <Layers className="h-6 w-6 text-primary" />
                        Endpoints
                      </h2>
                      <div className="space-y-6">
                        {api.endpointURLs.map((endpoint, index) => (
                          <div
                            key={index}
                            className="bg-muted/20 rounded-xl p-6 hover:bg-muted/30 transition-colors"
                          >
                            <h3 className="text-lg font-medium mb-4">
                              {endpoint.environmentDisplayName || endpoint.environmentName}
                            </h3>
                            <div className="space-y-4">
                              {endpoint.URLs?.https && (
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className="w-20 justify-center text-sm">
                                    HTTPS
                                  </Badge>
                                  <code className="bg-background px-3 py-2 rounded-lg text-sm flex-1 border shadow-sm">
                                    {endpoint.URLs.https}
                                  </code>
                                </div>
                              )}
                              {endpoint.URLs?.http && (
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className="w-20 justify-center text-sm">
                                    HTTP
                                  </Badge>
                                  <code className="bg-background px-3 py-2 rounded-lg text-sm flex-1 border shadow-sm">
                                    {endpoint.URLs.http}
                                  </code>
                                </div>
                              )}
                              {endpoint.URLs?.ws && (
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className="w-20 justify-center text-sm">
                                    WS
                                  </Badge>
                                  <code className="bg-background px-3 py-2 rounded-lg text-sm flex-1 border shadow-sm">
                                    {endpoint.URLs.ws}
                                  </code>
                                </div>
                              )}
                              {endpoint.URLs?.wss && (
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className="w-20 justify-center text-sm">
                                    WSS
                                  </Badge>
                                  <code className="bg-background px-3 py-2 rounded-lg text-sm flex-1 border shadow-sm">
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

                {/* Business Information */}
                {api.businessInformation &&
                  (api.businessInformation.businessOwner || api.businessInformation.technicalOwner) && (
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8">
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                          <Info className="h-6 w-6 text-primary" />
                          Business Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {api.businessInformation.businessOwner && (
                            <div className="bg-muted/20 p-6 rounded-xl hover:bg-muted/30 transition-colors">
                              <h3 className="text-lg font-medium mb-3">Business Owner</h3>
                              <p className="text-foreground">{api.businessInformation.businessOwner}</p>
                              {api.businessInformation.businessOwnerEmail && (
                                <a
                                  href={`mailto:${api.businessInformation.businessOwnerEmail}`}
                                  className="text-primary hover:underline text-sm mt-2 inline-block"
                                >
                                  {api.businessInformation.businessOwnerEmail}
                                </a>
                              )}
                            </div>
                          )}
                          {api.businessInformation.technicalOwner && (
                            <div className="bg-muted/20 p-6 rounded-xl hover:bg-muted/30 transition-colors">
                              <h3 className="text-lg font-medium mb-3">Technical Owner</h3>
                              <p className="text-foreground">{api.businessInformation.technicalOwner}</p>
                              {api.businessInformation.technicalOwnerEmail && (
                                <a
                                  href={`mailto:${api.businessInformation.technicalOwnerEmail}`}
                                  className="text-primary hover:underline text-sm mt-2 inline-block"
                                >
                                  {api.businessInformation.technicalOwnerEmail}
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
              </TabsContent>

              <TabsContent value="documentation" className="mt-0">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      API Documentation
                    </h2>
                    {swagger ? (
                      <ApiDocumentation swagger={swagger} />
                    ) : (
                      <div className="text-center py-16 bg-muted/20 rounded-xl">
                        <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-xl font-medium mb-2">No Documentation Available</p>
                        <p className="text-muted-foreground">
                          This API doesn't have any documentation or the documentation is not accessible.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="console" className="mt-0">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                      <Code className="h-6 w-6 text-primary" />
                      API Console
                    </h2>
                    {isAuthenticated ? (
                      swagger ? (
                        isSubscribed && subscriptionInfo ? (
                          <ApiConsole
                            baseUrl={baseUrl}
                            authService={wso2AuthService}
                            api={api}
                            applicationId={subscriptionInfo.applicationId}
                          />
                        ) : (
                          <div className="bg-muted/20 rounded-xl p-12 text-center">
                            <ExternalLink className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                            <p className="text-xl font-medium mb-3">Subscription Required</p>
                            <p className="text-muted-foreground mb-6">
                              You need to subscribe to this API before you can use the API Console.
                            </p>
                            <Button
                              onClick={() => setSubscribeDialogOpen(true)}
                              className="group hover:scale-105 transition-transform duration-200"
                              style={{
                                backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                                color: theme?.buttonTextColor || "#ffffff",
                              }}
                            >
                              Subscribe to API
                            </Button>
                          </div>
                        )
                      ) : (
                        <div className="bg-muted/20 rounded-xl p-12 text-center">
                          <Code className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <p className="text-xl font-medium mb-3">API Console Not Available</p>
                          <p className="text-muted-foreground">
                            API Console is not available for this API because the API definition could not be loaded.
                          </p>
                        </div>
                      )
                    ) : (
                      <div className="bg-muted/20 rounded-xl p-12 text-center">
                        <Loader2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-xl font-medium mb-3">Authentication Required</p>
                        <p className="text-muted-foreground mb-6">
                          You need to be logged in to use the API Console.
                        </p>
                        <Button
                          onClick={() => router.push("/wso2")}
                          className="group hover:scale-105 transition-transform duration-200"
                          style={{
                            backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                            color: theme?.buttonTextColor || "#ffffff",
                          }}
                        >
                          Log In
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sticky Sidebar */}
          <div className="xl:col-span-3">
            <div className="sticky top-4 space-y-6">
              {/* API Information Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">API Information</h2>

                  {thumbnailUrl && (
                    <div className="flex justify-center mb-6">
                      <div className="relative h-32 w-32 rounded-xl overflow-hidden border-2 border-muted shadow-md">
                        <Image
                          src={thumbnailUrl}
                          alt={`${api.name} thumbnail`}
                          fill
                          className="object-contain transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Context</h3>
                      <p className="font-mono text-sm bg-muted/50 p-2 rounded">{api.context}</p>
                    </div>

                    {api.type && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Type</h3>
                        <p className="text-foreground">{api.type}</p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Created</h3>
                      <p className="text-foreground">{formatDate(api.createdTime)}</p>
                    </div>

                    {api.lastUpdatedTime && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Last Updated</h3>
                        <p className="text-foreground">{formatDate(api.lastUpdatedTime)}</p>
                      </div>
                    )}

                    {api.categories && api.categories.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
                        <div className="flex flex-wrap gap-2">
                          {api.categories.map((category) => (
                            <Badge
                              key={category}
                              variant="secondary"
                              className="px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {api.throttlingPolicies && api.throttlingPolicies.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Available Tiers</h3>
                        <div className="flex flex-wrap gap-2">
                          {api.throttlingPolicies.map((policy) => (
                            <Badge
                              key={policy}
                              variant="outline"
                              className="px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {policy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {isAuthenticated && !isSubscribed && (
                      <Button
                        className="w-full mt-4 group hover:scale-105 transition-transform duration-200"
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
                </CardContent>
              </Card>

              {/* Monetization Card */}
              {api.monetization?.enabled && (
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Monetization</h2>
                    <Alert className="bg-amber-50 border-amber-200 text-amber-800">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      <AlertDescription>
                        <p className="font-medium">This API is monetized</p>
                        <p className="text-sm mt-1">Subscription may incur charges based on usage.</p>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {isAuthenticated && wso2AuthService && (
        <SubscribeDialog
          open={subscribeDialogOpen}
          onOpenChange={setSubscribeDialogOpen}
          baseUrl={baseUrl}
          api={api}
          authService={wso2AuthService}
        />
      )}
    </div>
  )
}
