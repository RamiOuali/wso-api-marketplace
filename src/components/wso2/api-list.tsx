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
import { AlertCircle, Calendar, ExternalLink, Filter, Search, Star, Tag, User, LayoutGrid, List, ArrowDownAZ, Clock, TagIcon, Loader2 } from "lucide-react"
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
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'name' | 'date'>('name')
  const [allTags, setAllTags] = useState<string[]>([])

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
      const response = await apiService.getApis(limit, offset, searchQuery)

      setApis(response.list)
      setTotalApis(response.pagination?.total || 0)

      // Fetch thumbnails for APIs that have thumbnailUri
      const thumbnailPromises = response.list
        .filter((api) => api.thumbnailUri)
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
    } catch (err) {
      console.error("Error fetching APIs:", err)
      const apiError = err as Error
      if (apiError instanceof TypeError && apiError.message.includes("NetworkError")) {
        setError(
          "Network error: Unable to connect to the WSO2 API Manager. This may be due to CORS restrictions or the server being unavailable.",
        )
      } else {
        setError(`Failed to fetch APIs: ${apiError?.message || 'Unknown error'}`)
      }
    } finally {
      setLoading(false)
      setInitialLoadComplete(true)
    }
  }, [apiService, currentPage, limit, initialLoadComplete, searchQuery])

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

  // Effect for fetching tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await apiService.getTags()
        if (response && response.list) {
          const tags = response.list.map((tag) => tag.value)
          setAllTags(tags)
        }
      } catch (error) {
        console.error('Error fetching tags:', error)
      }
    }

    fetchTags()
  }, [apiService])

  // Filter APIs by tags and sort
  const filteredAndSortedApis = useMemo(() => {
    let filtered = apis

    // Apply status filter
    if (filterStatus) {
      filtered = filtered.filter(api => 
        api.lifeCycleStatus?.toUpperCase() === filterStatus.toUpperCase()
      )
    }
    
    // Apply sort
    return filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return (a.name || '').localeCompare(b.name || '')
      } else {
        return new Date(b.createdTime || 0).getTime() - new Date(a.createdTime || 0).getTime()
      }
    })
  }, [apis, filterStatus, sortBy])

  // Memoize the skeleton cards to prevent re-renders
  const skeletonCards = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => (
      <Card key={`skeleton-${i}`} className="overflow-hidden border shadow-sm">
        <div className={cn(
          "flex",
          viewMode === 'list' ? "flex-row" : "flex-col"
        )}>
          {/* Thumbnail skeleton */}
          <div className={cn(
            "relative overflow-hidden bg-muted/30",
            viewMode === 'list' 
              ? "w-48 h-36 shrink-0" 
              : "aspect-[4/3] w-full"
          )}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center">
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
            {/* Version badge skeleton */}
            <div className="absolute top-2 right-2">
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>
          </div>

          {/* Content skeleton */}
          <div className={cn(
            "flex-1 p-4"
          )}>
            <div className="flex justify-between mb-3">
              <div className="flex-1">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/3 mb-1" />
              </div>
              <Skeleton className="h-5 w-8 rounded-full" />
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-4" />
            
            <div className="flex gap-1.5 mb-4">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            
            <div className="flex justify-end mt-4">
              <Skeleton className="h-8 w-28" />
            </div>
          </div>
        </div>
      </Card>
    ))
  }, [viewMode])

  const ApiCard = ({ api, isSubscribed }: { api: APIInfo; isSubscribed: boolean }) => (
    <div className={cn(
      "group relative overflow-hidden w-full", // Ensure card takes full width in its container
      viewMode === 'list' && "flex"
    )}>
      {/* API Thumbnail with hover effect */}
      <div className={cn(
        "relative overflow-hidden", // Base styles
        viewMode === 'list' 
          ? "w-48 h-36 shrink-0" // Fixed dimensions for list view
          : "aspect-[4/3] w-full", // Aspect ratio for grid view
        "transition-all duration-300",
        "border-r border-border/30" // Subtle separation in list view
      )}>
        {api.thumbnailUri ? (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-full"
          >
            {thumbnails[api.id] ? (
              <div className="relative w-full h-full">
                {/* Image with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-30 z-10" />
                <img
                  src={thumbnails[api.id]}
                  alt={`${api.name} thumbnail`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="h-full w-full bg-muted/50 flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            )}
          </motion.div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            {/* Monogram fallback with subtle pattern background */}
            <div 
              className="relative w-20 h-20 rounded-full flex items-center justify-center bg-muted-foreground/10"
              style={{
                backgroundImage: "radial-gradient(circle at center, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%)"
              }}
            >
              <span className="text-4xl font-bold text-muted-foreground/50">
                {api.name?.charAt(0)?.toUpperCase() || "A"}
              </span>
            </div>
            <span className="mt-2 text-xs font-medium text-muted-foreground/70">No thumbnail</span>
          </div>
        )}

        {/* Version Badge */}
        <div className="absolute top-2 right-2 z-10">
          <Badge variant="secondary" className="bg-black/70 text-white backdrop-blur-sm text-xs px-2 py-0.5 font-medium">
            v{api.version}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col flex-1", // Ensure content area fills space
        viewMode === 'list' ? "p-4" : "p-4"
      )}>
        {/* Top section: Title & Rating */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0 mr-4">
            <h3 className="text-lg font-semibold line-clamp-1 text-foreground group-hover:text-primary transition-colors duration-150">
              {api.name}
            </h3>
            {api.context && (
              <div className="text-xs text-muted-foreground mt-0.5 truncate">
                {api.context}
              </div>
            )}
          </div>
          {/* Star Rating */}
          {api.avgRating && parseFloat(api.avgRating) > 0 && (
            <div className="flex items-center gap-1 text-sm shrink-0">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="font-medium text-foreground">{api.avgRating}</span>
              {/* Optional: Add number of reviews if available */}
              {/* <span className="text-xs text-muted-foreground">(12)</span> */}
            </div>
          )}
        </div>

        {/* Description */}
        <p className={cn(
          "text-sm text-muted-foreground mb-3 flex-grow", // Use flex-grow for list view
          viewMode === 'list' ? "line-clamp-2" : "line-clamp-2" // Allow 2 lines always
        )}>
          {api.description || "No description available."}
        </p>

        {/* Business Owner - subtle display */}
        {api.businessInformation?.businessOwner && (
          <div className="mb-3 text-xs text-muted-foreground flex items-center gap-1.5">
            <User className="h-3 w-3" />
            <span>{api.businessInformation.businessOwner}</span>
          </div>
        )}

        {/* Tags - Improved hover */}
        {api.tags && api.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {api.tags.slice(0, viewMode === 'list' ? 5 : 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={cn(
                  "px-2 py-0.5 text-xs cursor-pointer transition-all duration-150 ease-in-out",
                  "border bg-background hover:border-primary/80 hover:bg-primary/10 hover:text-primary"
                )}
                style={{
                  borderColor: theme?.inputBorderColor,
                  color: theme?.secondaryColor,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTagClick(tag);
                }}
              >
                {tag}
              </Badge>
            ))}
            {api.tags.length > (viewMode === 'list' ? 5 : 3) && (
              <Badge variant="outline" className="px-2 py-0.5 text-xs border bg-background" style={{ borderColor: theme?.inputBorderColor, color: theme?.textColor }}>
                +{api.tags.length - (viewMode === 'list' ? 5 : 3)}
              </Badge>
            )}
          </div>
        )}

        {/* Action Button - Placed at the bottom */}
        <div className="mt-auto pt-2 flex justify-end">
          <Button
            size="sm"
            variant="default" // Use default variant for primary action
            onClick={(e) => {
              e.stopPropagation()
              viewApiDetails(api.id, isSubscribed ? undefined : "Consult api")
            }}
            className="gap-1.5"
            style={{
              backgroundColor: theme?.buttonPrimaryColor,
              color: theme?.buttonTextColor,
              borderRadius: theme?.buttonBorderRadius,
            }}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {isSubscribed ? "View API" : "View api details"}
          </Button>
        </div>
      </div>
    </div>
  )

  const handleTagClick = (tag: string) => {
    if (searchQuery === tag) {
      setSearchQuery("") // Clear search query when deselecting tag
    } else {
      setSearchQuery(tag) // Use tag directly as search query
    }
    setCurrentPage(1) // Reset to first page when changing tags
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-6">
      {/* Tags Sidebar */}
      {allTags.length > 0 && (
        <aside className="w-full lg:w-64 shrink-0">
          <div className="sticky top-20 space-y-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
              <TagIcon className="h-5 w-5 text-muted-foreground" />
              Browse by Tags
            </h3>
            <div className="space-y-1.5">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={searchQuery === tag ? "default" : "outline"}
                  className={cn(
                    "w-full justify-start py-2 px-3 text-sm cursor-pointer transition-all duration-150 ease-in-out",
                    "border rounded-md",
                    searchQuery === tag 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground hover:border-muted-foreground/50"
                  )}
                  onClick={() => handleTagClick(tag)}
                  style={searchQuery !== tag ? {
                    borderColor: theme?.inputBorderColor,
                    color: theme?.textColor,
                  } : {}}
                >
                  <span>{tag}</span>
                </Badge>
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 space-y-6 min-w-0">
        {/* Header: Search, Layout, Sort, Filter */}
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
          </form>

          <div className="flex items-center gap-2">
            {/* Layout Switch */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-2"
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-2"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  {sortBy === 'name' ? <ArrowDownAZ className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                  {sortBy === 'name' ? 'Sort by Name' : 'Sort by Date'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy('name')}>
                  <ArrowDownAZ className="h-4 w-4 mr-2" />
                  Sort by Name
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('date')}>
                  <Clock className="h-4 w-4 mr-2" />
                  Sort by Date
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Filter by Status */}
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
        </div>

        {/* Error Message */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Loading Skeletons */}
        {loading && !initialLoadComplete ? (
          <div className={cn(
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          )}>
            {skeletonCards}
          </div>
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
          /* API List Content */
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredApis.length} of {totalApis} APIs
                {filterStatus && ` with status "${filterStatus}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* API Grid/List */}
            <div className={cn(
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            )}>
              {filteredAndSortedApis.map((api) => {
                const isSubscribed = subscriptions.includes(api.id)
                return (
                  <Card
                    key={api.id}
                    className={cn(
                      "overflow-hidden transition-all duration-200 ease-in-out cursor-pointer border shadow-sm",
                      "hover:shadow-lg hover:-translate-y-1",
                      viewMode === 'list' && "flex flex-row items-stretch"
                    )}
                    onClick={() => viewApiDetails(api.id)}
                    style={{
                      backgroundColor: theme?.cardBackground || "#ffffff",
                      borderColor: theme?.cardBorderColor || "#e5e7eb",
                      borderRadius: theme?.cardBorderRadius || "0.75rem", // Slightly larger radius
                      boxShadow: theme?.cardShadow || "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                  >
                    <ApiCard api={api} isSubscribed={isSubscribed} />
                  </Card>
                )
              })}
            </div>
          </>
        )}

        {/* Loading More Indicator */}
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
      </main>
    </div>
  )
}
