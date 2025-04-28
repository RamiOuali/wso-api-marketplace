"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  AlertCircle, ArrowLeft, BookOpen, Code,
  ExternalLink, FileText, Info, Layers,
  Loader2, TagIcon,
} from "lucide-react"
import { WSO2DevPortalService } from "@/lib/wso2/api-service"
import { ApiDocumentation } from "@/components/wso2/api-documentation"
import { ApiConsole } from "@/components/wso2/api-console"
import { SubscribeDialog } from "@/components/wso2/subscribe-dialog"
import { useAuth } from "@/providers/authContext"
import { useThemeContext } from "@/providers/ThemeProvider"
import Image from "next/image"
import type { API } from "@/lib/wso2/types"
import { WSO2SubscriptionService } from "@/lib/wso2/subscription-service"
import { Skeleton } from "../ui/skeleton"

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
    <div className="min-h-screen bg-background flex flex-col">
      {/* API Info Header */}
      <div className="bg-gradient-to-b from-background to-muted/20 border-b">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button & Subscribe */}
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

          {/* API Header Content */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
            {/* API Logo/Thumbnail */}
            {thumbnailUrl && (
              <div className="flex justify-center md:justify-start">
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

            {/* API Info */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{api.name}</h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>Version {api.version}</span>
                  <span>•</span>
                  <span>By {api.provider}</span>
                  {api.avgRating && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        Rating: {api.avgRating}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Tags */}
              {api.tags && api.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {api.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Content */}
          <div className="xl:col-span-9">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-transparent p-0 mb-6 sticky top-0 z-10 border-b border-muted">
                <TabsTrigger value="overview" className="tab-button">
                  <Info className="h-5 w-5 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="documentation" className="tab-button">
                  <FileText className="h-5 w-5 mr-2" />
                  Documentation
                </TabsTrigger>
                <TabsTrigger value="console" className="tab-button">
                  <Code className="h-5 w-5 mr-2" />
                  API Console
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8 mt-0">
                {/* Description */}
                <section className="prose prose-slate max-w-none">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Description
                  </h2>
                  {api.description ? (
                    <p>{api.description}</p>
                  ) : (
                    <p className="text-muted-foreground italic">No description available.</p>
                  )}
                </section>

                {/* Endpoints */}
                {api.endpointURLs && api.endpointURLs.length > 0 && (
                  <section>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                      <Layers className="h-6 w-6 text-primary" />
                      Endpoints
                    </h2>
                    <div className="space-y-4">
                      {api.endpointURLs.map((endpoint, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border bg-muted/20"
                        >
                          <div className="space-y-3">
                            <h3 className="font-medium">
                              {endpoint.environmentDisplayName || "Default"}
                            </h3>
                            <div className="space-y-2">
                              {endpoint.URLs.https && (
                                <div className="space-y-1">
                                  <div className="text-sm text-muted-foreground">HTTPS</div>
                                  <code className="bg-background px-3 py-2 rounded-lg text-sm flex-1 border shadow-sm">
                                    {endpoint.URLs.https}
                                  </code>
                                </div>
                              )}
                              {endpoint.URLs.http && (
                                <div className="space-y-1">
                                  <div className="text-sm text-muted-foreground">HTTP</div>
                                  <code className="bg-background px-3 py-2 rounded-lg text-sm flex-1 border shadow-sm">
                                    {endpoint.URLs.http}
                                  </code>
                                </div>
                              )}
                              {endpoint.URLs.wss && (
                                <div className="space-y-1">
                                  <div className="text-sm text-muted-foreground">WebSocket</div>
                                  <code className="bg-background px-3 py-2 rounded-lg text-sm flex-1 border shadow-sm">
                                    {endpoint.URLs.wss}
                                  </code>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Business Information */}
                {api.businessInformation &&
                  (api.businessInformation.businessOwner || api.businessInformation.technicalOwner) && (
                    <section>
                      <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                        <Info className="h-6 w-6 text-primary" />
                        Business Information
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {api.businessInformation.businessOwner && (
                          <div className="p-4 rounded-lg border bg-muted/20">
                            <h3 className="font-medium mb-2">Business Owner</h3>
                            <p>{api.businessInformation.businessOwner}</p>
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
                          <div className="p-4 rounded-lg border bg-muted/20">
                            <h3 className="font-medium mb-2">Technical Owner</h3>
                            <p>{api.businessInformation.technicalOwner}</p>
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
                    </section>
                  )}
              </TabsContent>

              {/* Documentation Tab */}
              <TabsContent value="documentation" className="mt-0">
                {swagger ? (
                  <ApiDocumentation swagger={swagger} />
                ) : (
                  <div className="text-center py-16 rounded-lg border bg-muted/20">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-xl font-medium mb-2">No Documentation Available</p>
                    <p className="text-muted-foreground">
                      This API doesn't have any documentation or the documentation is not accessible.
                    </p>
                  </div>
                )}
              </TabsContent>

              {/* Console Tab */}
              <TabsContent value="console" className="mt-0">
                {isAuthenticated ? (
                  swagger ? (
                    isSubscribed && subscriptionInfo ? (
                      <div className="rounded-lg bg-muted/20">
                        <ApiConsole
                          baseUrl={baseUrl}
                          authService={wso2AuthService}
                          api={api}
                          applicationId={subscriptionInfo.applicationId}
                        />
                      </div>
                    ) : (
                      <div className="text-center py-16 rounded-lg border bg-muted/20">
                        <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-xl font-medium mb-2">Subscription Required</p>
                        <p className="text-muted-foreground mb-6">
                          You need to subscribe to this API before you can test it.
                        </p>
                        <Button
                          onClick={() => setSubscribeDialogOpen(true)}
                          style={{
                            backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                            color: theme?.buttonTextColor || "#ffffff",
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Subscribe Now
                        </Button>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-16 rounded-lg border bg-muted/20">
                      <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-xl font-medium mb-2">Console Not Available</p>
                      <p className="text-muted-foreground">
                        The API console is not available for this API at the moment.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="text-center py-16 rounded-lg border bg-muted/20">
                    <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-xl font-medium mb-2">Authentication Required</p>
                    <p className="text-muted-foreground mb-6">
                      Please log in to use the API Console.
                    </p>
                    <Button
                      onClick={() => router.push("/auth/login")}
                      style={{
                        backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                        color: theme?.buttonTextColor || "#ffffff",
                      }}
                    >
                      Log In
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-3">
            <div className="sticky top-4 space-y-6">
              {/* API Details */}
              <div className="p-4 rounded-lg border bg-muted/20">
                <h3 className="font-medium mb-4">API Details</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Context</div>
                    <code className="bg-background px-3 py-1 rounded text-xs">
                      {api.context}
                    </code>
                  </div>
                  {api.type && (
                    <div>
                      <div className="text-muted-foreground mb-1">Type</div>
                      <div>{api.type}</div>
                    </div>
                  )}
                  <div>
                    <div className="text-muted-foreground mb-1">Created</div>
                    <div>{formatDate(api.createdTime)}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Last Updated</div>
                    <div>{formatDate(api.lastUpdatedTime)}</div>
                  </div>
                  {isSubscribed && subscriptionInfo && (
                    <div>
                      <div className="text-muted-foreground mb-1">Subscription</div>
                      <Badge variant="outline" className="mt-1">
                        Active
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Monetization Info */}
              {api.monetization?.enabled && (
                <div className="p-4 rounded-lg border bg-amber-50/50 border-amber-200">
                  <h3 className="font-medium mb-4">Monetization</h3>
                  <Alert className="bg-transparent border-none p-0">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    <AlertDescription className="text-amber-700">
                      This API is monetized. Subscription may incur charges based on usage.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Dialog */}
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
