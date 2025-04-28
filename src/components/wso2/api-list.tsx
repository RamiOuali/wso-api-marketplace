"use client"

import type React from "react"
import { useState, useEffect, useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { WSO2DevPortalService } from "@/lib/wso2/api-service"
import { WSO2SubscriptionService } from "@/lib/wso2/subscription-service"
import type { APIInfo } from "@/lib/wso2/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Calendar, ExternalLink, Filter, Search, Star, Tag, User } from "lucide-react"
import Image from "next/image"
import { useThemeContext } from "@/providers/ThemeProvider"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { debounce } from "@/lib/utils"
import { useAuth } from "@/providers/authContext"

interface WSO2ApiListProps {
  baseUrl: string
}

export function WSO2ApiList({ baseUrl }: WSO2ApiListProps) {
  const router = useRouter()
  const { theme } = useThemeContext()
  const { wso2AuthService, isAuthenticated } = useAuth()

  const [apis, setApis] = useState<APIInfo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [searchInputValue, setSearchInputValue] = useState<string>("")
  const [totalApis, setTotalApis] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limit] = useState<number>(12)
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({})
  const [filterStatus, setFilterStatus] = useState<string | null>(null)
  const [initialLoadComplete, setInitialLoadComplete] = useState<boolean>(false)
  const [subscriptions, setSubscriptions] = useState<string[]>([]) // Store subscribed API IDs

  // Memoize the API and Subscription services
  const apiService = useMemo(() => {
    return new WSO2DevPortalService(baseUrl, wso2AuthService || undefined)
  }, [baseUrl, wso2AuthService])

  const subscriptionService = useMemo(() => {
    return wso2AuthService ? new WSO2SubscriptionService(baseUrl, wso2AuthService) : null
  }, [baseUrl, wso2AuthService])

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query)
      setCurrentPage(1) // Reset to first page on new search
    }, 500),
    [],
  )

  // Handle search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchInputValue(value)
    debouncedSearch(value)
  }

  // Fetch subscriptions
  const fetchSubscriptions = useCallback(async () => {
    if (!subscriptionService || !isAuthenticated) {
      setSubscriptions([])
      return
    }

    try {
      const response = await subscriptionService.getSubscriptions()
      const subscribedApiIds = response.list?.map((sub: any) => sub.apiId) || []
      setSubscriptions(subscribedApiIds)
    } catch (error) {
      console.error("Error fetching subscriptions:", error)
      setSubscriptions([])
    }
  }, [subscriptionService, isAuthenticated])

  // Fetch APIs function
  const fetchApis = useCallback(async () => {
    if (!initialLoadComplete) {
      setLoading(true)
    }

    setError(null)

    try {
      const offset = (currentPage - 1) * limit
      const query = searchQuery ? searchQuery : undefined
      const response = await apiService.getApis(limit, offset, query)

      setApis(response.list)
      setTotalApis(response.pagination?.total || 0)

      // Fetch thumbnails for APIs that have them
      const thumbnailPromises = response.list
        .filter((api) => api.hasThumbnail)
        .map(async (api) => {
          try {
            const thumbnailBlob = await apiService.getApiThumbnail(api.id)
            const thumbnailUrl = URL.createObjectURL(thumbnailBlob)
            return { id: api.id, url: thumbnailUrl }
          } catch (err) {
            console.error(`Error fetching thumbnail for API ${api.id}:`, err)
            return null
          }
        })

      const thumbnailResults = await Promise.all(thumbnailPromises)
      const newThumbnails: Record<string, string> = {}

      thumbnailResults.forEach((result) => {
        if (result) {
          newThumbnails[result.id] = result.url
        }
      })

      setThumbnails((prev) => ({ ...prev, ...newThumbnails }))
    } catch (apiError) {
      console.error("Error fetching APIs:", apiError)
      if (apiError instanceof TypeError && apiError.message.includes("NetworkError")) {
        setError(
          "Network error: Unable to connect to the WSO2 API Manager. This may be due to CORS restrictions or the server being unavailable.",
        )
      } else {
        setError(`Failed to fetch APIs: ${apiError.message}`)
      }
    } finally {
      setLoading(false)
      setInitialLoadComplete(true)
    }
  }, [apiService, currentPage, searchQuery, limit, initialLoadComplete])

  // Effect for fetching APIs and subscriptions
  useEffect(() => {
    fetchApis()
    fetchSubscriptions()

    // Cleanup function for thumbnail URLs
    return () => {
      Object.values(thumbnails).forEach((url) => {
        URL.revokeObjectURL(url)
      })
    }
  }, [fetchApis, fetchSubscriptions])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(searchInputValue)
    setCurrentPage(1) // Reset to first page on new search
  }

  const totalPages = Math.ceil(totalApis / limit)

  // Format date to be more readable
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  // Get status color based on lifecycle status
  const getStatusColor = (status: string) => {
    switch (status?.toUpperCase()) {
      case "PUBLISHED":
        return "bg-green-100 text-green-800 border-green-200"
      case "DEPRECATED":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "RETIRED":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  const viewApiDetails = (apiId: string, tab?: string) => {
    const path = tab ? `/wso2/api/${apiId}?tab=${tab}` : `/wso2/api/${apiId}`
    router.push(path)
  }

  // Filter APIs by status if filter is active
  const filteredApis = useMemo(() => {
    return filterStatus ? apis.filter((api) => api.lifeCycleStatus?.toUpperCase() === filterStatus.toUpperCase()) : apis
  }, [apis, filterStatus])

  // Memoize the skeleton cards to prevent re-renders
  const skeletonCards = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => (
      <Card key={`skeleton-${i}`} className="overflow-hidden border-none shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-start gap-3">
            <Skeleton className="h-12 w-12 rounded-md" />
            <div className="flex-1">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-4/6" />
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </CardFooter>
      </Card>
    ))
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search APIs by name, version, context, or description..."
              className="pl-9 bg-background"
              value={searchInputValue}
              onChange={handleSearchInputChange}
              style={{
                backgroundColor: theme?.inputBackground || "#ffffff",
                borderColor: theme?.inputBorderColor || "#d1d5db",
                color: theme?.inputTextColor || "#333333",
                borderRadius: theme?.inputBorderRadius || "0.375rem",
              }}
            />
          </div>
          <Button
            type="submit"
            style={{
              backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
              color: theme?.buttonTextColor || "#ffffff",
            }}
          >
            Search
          </Button>
        </form>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {filterStatus ? `Status: ${filterStatus}` : "Filter"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className={!filterStatus ? "主menuItemBg-muted/50" : ""}
                onClick={() => setFilterStatus(null)}
              >
                All Statuses
              </DropdownMenuItem>
              <DropdownMenuItem
                className={filterStatus === "PUBLISHED" ? "bg-muted/50" : ""}
                onClick={() => setFilterStatus("PUBLISHED")}
              >
                <Badge className="bg-green-100 text-green-800 border-green-200 mr-2">PUBLISHED</Badge>
                <span>Published</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={filterStatus === "DEPRECATED" ? "bg-muted/50" : ""}
                onClick={() => setFilterStatus("DEPRECATED")}
              >
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 mr-2">DEPRECATED</Badge>
                <span>Deprecated</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={filterStatus === "RETIRED" ? "bg-muted/50" : ""}
                onClick={() => setFilterStatus("RETIRED")}
              >
                <Badge className="bg-red-100 text-red-800 border-red-200 mr-2">RETIRED</Badge>
                <span>Retired</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading && !initialLoadComplete ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{skeletonCards}</div>
      ) : filteredApis.length === 0 ? (
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No APIs Found</h3>
          <p className="text-muted-foreground">
            {searchQuery
              ? "No APIs match your search criteria. Try a different search term."
              : filterStatus
                ? `No APIs with status "${filterStatus}" are available.`
                : "No APIs are available in this WSO2 API Manager instance."}
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredApis.length} of {totalApis} APIs
              {filterStatus && ` with status "${filterStatus}"`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApis.map((api) => {
              const isSubscribed = subscriptions.includes(api.id)
              return (
                <Card
                  key={api.id}
                  className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm"
                  onClick={() => viewApiDetails(api.id)}
                  style={{
                    backgroundColor: theme?.cardBackground || "#ffffff",
                    borderRadius: theme?.cardBorderRadius || "0.5rem",
                    boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      {/* API Thumbnail or Icon */}
                      <div className="flex-shrink-0">
                        {thumbnails[api.id] ? (
                          <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                            <Image
                              src={thumbnails[api.id] || "/placeholder.svg"}
                              alt={`${api.name} thumbnail`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center text-xl font-bold">
                            {api.name?.charAt(0) || "A"}
                          </div>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg line-clamp-1">{api.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 flex-wrap">
                          <span className="font-medium">v{api.version}</span>
                          {api.lifeCycleStatus && (
                            <Badge className={getStatusColor(api.lifeCycleStatus)}>{api.lifeCycleStatus}</Badge>
                          )}
                          {api.avgRating && (
                            <div className="flex items-center ml-auto">
                              <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 mr-0.5" />
                              <span className="text-xs">{api.avgRating}</span>
                            </div>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <Separator className="my-1" />
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-3 min-h-[3rem]">
                      {api.description || "No description available"}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {api.tags?.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1 text-xs">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                      {api.tags && api.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{api.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground gap-4">
                      {api.provider && (
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="truncate max-w-[100px]">{api.provider}</span>
                        </div>
                      )}
                      {api.createdTime && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(api.createdTime)}
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        viewApiDetails(api.id)
                      }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Details
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        viewApiDetails(api.id, isSubscribed ? undefined : "subscribe")
                      }}
                      style={{
                        backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                        color: theme?.buttonTextColor || "#ffffff",
                      }}
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {isSubscribed ? "Consult API" : "Consult API"}
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </>
      )}

      {/* Show loading indicator when fetching more data */}
      {loading && initialLoadComplete && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  )
}
