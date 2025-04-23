"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { WSO2DevPortalService } from "@/lib/wso2/api-service"
import type { WSO2AuthService } from "@/lib/wso2/auth-service"
import type { APIInfo } from "@/lib/wso2/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/pagination"
import { Search, Tag, Calendar, User, Star, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/skeleton"
import Image from "next/image"

interface WSO2ApiListProps {
  baseUrl: string
  authService?: WSO2AuthService | null
}

export function WSO2ApiList({ baseUrl, authService }: WSO2ApiListProps) {
  const router = useRouter()
  const [apis, setApis] = useState<APIInfo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [totalApis, setTotalApis] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limit] = useState<number>(10)
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({})

  useEffect(() => {
    const fetchApis = async () => {
      try {
        setLoading(true)
        setError(null)

        try {
          const service = new WSO2DevPortalService(baseUrl, authService || undefined)

          const offset = (currentPage - 1) * limit
          const query = searchQuery ? searchQuery : undefined
          const response = await service.getApis(limit, offset, query)

          setApis(response.list)
          setTotalApis(response.pagination?.total || 0)

          // Fetch thumbnails for APIs that have them
          const thumbnailPromises = response.list
            .filter((api) => api.hasThumbnail)
            .map(async (api) => {
              try {
                const thumbnailBlob = await service.getApiThumbnail(api.id)
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
        }
      } catch (err) {
        console.error("Error in API list component:", err)
        setError("An unexpected error occurred. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchApis()

    // Cleanup function for thumbnail URLs
    return () => {
      Object.values(thumbnails).forEach((url) => {
        URL.revokeObjectURL(url)
      })
    }
  }, [baseUrl, authService, currentPage, searchQuery, limit])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
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
        return "bg-green-500 hover:bg-green-600"
      case "DEPRECATED":
        return "bg-amber-500 hover:bg-amber-600"
      case "RETIRED":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-blue-500 hover:bg-blue-600"
    }
  }

  const viewApiDetails = (apiId: string) => {
    router.push(`/wso2/api/${apiId}`)
  }

  return (
    <div>
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search APIs by name, version, context, or description..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
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
          ))}
        </div>
      ) : apis.length === 0 ? (
        <div className="text-center py-12 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No APIs Found</h3>
          <p className="text-gray-500">
            {searchQuery
              ? "No APIs match your search criteria. Try a different search term."
              : "No APIs are available in this WSO2 API Manager instance."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apis.map((api) => (
            <Card
              key={api.id}
              className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => viewApiDetails(api.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    {/* API Thumbnail or Icon */}
                    <div className="flex-shrink-0">
                      {thumbnails[api.id] ? (
                        <div className="relative h-12 w-12 rounded-md overflow-hidden">
                          <Image
                            src={thumbnails[api.id] || "/placeholder.svg"}
                            alt={`${api.name} thumbnail`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center text-xl font-bold">
                          {api.name?.charAt(0) || "A"}
                        </div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{api.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <span className="font-medium">v{api.version}</span>
                        {api.lifeCycleStatus && (
                          <Badge className={getStatusColor(api.lifeCycleStatus)}>{api.lifeCycleStatus}</Badge>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                  {api.avgRating && (
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-sm">{api.avgRating}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                  {api.description || "No description available"}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {api.tags?.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                  {api.tags && api.tags.length > 3 && <Badge variant="outline">+{api.tags.length - 3}</Badge>}
                </div>
                <div className="flex items-center text-xs text-gray-500 gap-4">
                  {api.provider && (
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {api.provider}
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
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    viewApiDetails(api.id)
                  }}
                >
                  Details
                </Button>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    viewApiDetails(`${api.id}?tab=subscribe`)
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
          ))}
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
