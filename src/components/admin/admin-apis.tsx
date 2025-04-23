"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  AlertCircle, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  X 
} from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogHeader, 
  DialogFooter 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Define a type for WSO2 API data
interface WSO2ApiData {
  id: string
  name: string
  description: string
  context?: string
  version: string
  provider: string
  lifeCycleStatus: string
  tags?: string[]
  avgRating?: string
  monetization?: {
    enabled: boolean
  }
  businessInformation?: {
    businessOwner?: string
    technicalOwner?: string
  }
  categories?: string[]
  createdTime?: string
  lastUpdatedTime?: string
  hasThumbnail?: boolean
  thumbnailUrl?: string
  featured?: boolean
}

// Sample all APIs from WSO2 API Dev Portal
const allApis: WSO2ApiData[] = [
  {
    id: "a1b2c3d4",
    name: "Payment Processing API",
    description: "Secure payment processing with support for multiple currencies and payment methods.",
    version: "1.2.0",
    provider: "Finance Team",
    lifeCycleStatus: "PUBLISHED",
    tags: ["payments", "finance", "banking"],
    avgRating: "4.7",
    monetization: {
      enabled: true
    },
    categories: ["Finance"],
    createdTime: "2025-01-15T09:30:00Z",
    lastUpdatedTime: "2025-03-21T14:22:00Z",
    hasThumbnail: true,
    thumbnailUrl: "/api-thumbnails/payment.svg",
    featured: true
  },
  {
    id: "e5f6g7h8",
    name: "Customer Data API",
    description: "Access and manage customer data with comprehensive filtering and search capabilities.",
    version: "2.0.1",
    provider: "CRM Team",
    lifeCycleStatus: "PUBLISHED",
    tags: ["customers", "data", "crm"],
    avgRating: "4.5",
    monetization: {
      enabled: false
    },
    categories: ["Data", "CRM"],
    createdTime: "2024-11-05T11:15:00Z",
    lastUpdatedTime: "2025-02-18T10:00:00Z",
    hasThumbnail: false,
    featured: true
  },
  {
    id: "i9j0k1l2",
    name: "Logistics Tracking API",
    description: "Real-time shipment tracking and logistics management across global supply chains.",
    version: "1.1.0",
    provider: "Logistics Division",
    lifeCycleStatus: "PUBLISHED",
    tags: ["logistics", "tracking", "shipping"],
    avgRating: "4.8",
    monetization: {
      enabled: true
    },
    categories: ["Logistics"],
    createdTime: "2025-02-10T08:45:00Z",
    lastUpdatedTime: "2025-04-05T09:30:00Z",
    hasThumbnail: true,
    thumbnailUrl: "/api-thumbnails/logistics.svg",
    featured: true
  },
  {
    id: "m3n4o5p6",
    name: "Analytics Engine API",
    description: "Powerful analytics capabilities to process and visualize large datasets in real-time.",
    version: "3.2.1",
    provider: "Data Science Team",
    lifeCycleStatus: "PUBLISHED",
    tags: ["analytics", "data", "visualization"],
    avgRating: "4.6",
    monetization: {
      enabled: true
    },
    categories: ["Analytics", "Data Science"],
    createdTime: "2024-12-20T14:30:00Z",
    lastUpdatedTime: "2025-03-15T16:45:00Z",
    hasThumbnail: true,
    thumbnailUrl: "/api-thumbnails/analytics.svg",
    featured: true
  },
  {
    id: "q7r8s9t0",
    name: "Authentication API",
    description: "Secure user authentication and authorization with OAuth 2.0 and JWT support.",
    version: "2.3.0",
    provider: "Security Team",
    lifeCycleStatus: "PUBLISHED",
    tags: ["security", "auth", "oauth"],
    avgRating: "4.9",
    monetization: {
      enabled: false
    },
    categories: ["Security"],
    createdTime: "2024-10-05T10:15:00Z",
    lastUpdatedTime: "2025-01-20T11:30:00Z",
    hasThumbnail: false,
    featured: false
  },
  {
    id: "u1v2w3x4",
    name: "Notification Service API",
    description: "Send notifications via email, SMS, push notifications, and more with a unified API.",
    version: "1.0.2",
    provider: "Communications Team",
    lifeCycleStatus: "PUBLISHED",
    tags: ["notifications", "messaging", "communications"],
    avgRating: "4.2",
    monetization: {
      enabled: false
    },
    categories: ["Communications"],
    createdTime: "2025-01-30T15:45:00Z",
    lastUpdatedTime: "2025-03-10T09:15:00Z",
    hasThumbnail: true,
    thumbnailUrl: "/api-thumbnails/notification.svg",
    featured: false
  },
  {
    id: "y5z6a7b8",
    name: "Document Processing API",
    description: "Convert, merge, split, and analyze PDF, Word, Excel, and other document formats.",
    version: "2.1.0",
    provider: "Document Solutions",
    lifeCycleStatus: "PUBLISHED",
    tags: ["documents", "conversion", "processing"],
    avgRating: "4.4",
    monetization: {
      enabled: true
    },
    categories: ["Document Management"],
    createdTime: "2024-12-10T13:20:00Z",
    lastUpdatedTime: "2025-02-28T16:10:00Z",
    hasThumbnail: false,
    featured: false
  },
  {
    id: "c9d0e1f2",
    name: "Weather Data API",
    description: "Access real-time weather data and forecasts from around the world.",
    version: "3.0.1",
    provider: "Weather Services",
    lifeCycleStatus: "DEPRECATED",
    tags: ["weather", "forecast", "meteorology"],
    avgRating: "4.0",
    monetization: {
      enabled: true
    },
    categories: ["Weather", "Data"],
    createdTime: "2024-09-15T08:30:00Z",
    lastUpdatedTime: "2025-01-10T11:45:00Z",
    hasThumbnail: true,
    thumbnailUrl: "/api-thumbnails/weather.svg",
    featured: false
  }
]

export function AdminFeaturedApis() {
  const [apis, setApis] = useState<WSO2ApiData[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [sortConfig, setSortConfig] = useState<{
    key: keyof WSO2ApiData | ""; 
    direction: "asc" | "desc"
  }>({ key: "", direction: "asc" })
  
  // Maximum number of featured APIs
  const MAX_FEATURED = 4
  
  // Get featured APIs count
  const featuredCount = apis.filter(api => api.featured).length
  
  // In a real implementation, you would fetch all APIs from WSO2
  useEffect(() => {
    // Simulate API fetch
    setApis(allApis)
  }, [])
  
  // Handle search
  const filteredApis = apis.filter(api => 
    api.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    api.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (api.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ?? false)
  )
  
  // Handle sort
  const sortedApis = [...filteredApis].sort((a, b) => {
    if (sortConfig.key === "") return 0
    
    if (sortConfig.key === "featured") {
      const aFeatured = a.featured ? 1 : 0
      const bFeatured = b.featured ? 1 : 0
      return sortConfig.direction === "asc" 
        ? aFeatured - bFeatured 
        : bFeatured - aFeatured
    }
    
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === "asc" 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue)
    }
    
    return 0
  })
  
  // Handle toggle featured status
  const toggleFeatured = (id: string) => {
    const api = apis.find(api => api.id === id)
    
    // If trying to add a new featured API but already at max, show warning
    if (!api?.featured && featuredCount >= MAX_FEATURED) {
      alert(`You can only feature up to ${MAX_FEATURED} APIs. Please remove one before adding another.`)
      return
    }
    
    setApis(apis.map(api => 
      api.id === id 
        ? { ...api, featured: !api.featured } 
        : api
    ))
    
    // In a real implementation, you would make an API call to update the featured status
    console.log(`API ${id} featured status toggled`)
  }
  
  // Handle sort click
  const handleSortClick = (key: keyof WSO2ApiData | "") => {
    if (sortConfig.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc"
      })
    } else {
      setSortConfig({ key, direction: "asc" })
    }
  }
  
  // Get status color
  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case "PUBLISHED":
        return "#10b981" // green
      case "DEPRECATED":
        return "#f59e0b" // amber
      case "RETIRED":
        return "#ef4444" // red
      default:
        return "#3b82f6" // blue
    }
  }
  
  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Manage Featured APIs
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Select up to {MAX_FEATURED} APIs to feature on your homepage. Featured APIs will be displayed prominently to all visitors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search APIs..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Featured: {featuredCount}/{MAX_FEATURED}
                </span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer w-20"
                      onClick={() => handleSortClick("featured")}
                    >
                      <div className="flex items-center">
                        Featured
                        {sortConfig.key === "featured" && (
                          sortConfig.direction === "asc" 
                            ? <ChevronUp className="h-4 w-4 ml-1" /> 
                            : <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSortClick("name")}
                    >
                      <div className="flex items-center">
                        Name
                        {sortConfig.key === "name" && (
                          sortConfig.direction === "asc" 
                            ? <ChevronUp className="h-4 w-4 ml-1" /> 
                            : <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSortClick("lifeCycleStatus")}
                    >
                      <div className="flex items-center">
                        Status
                        {sortConfig.key === "lifeCycleStatus" && (
                          sortConfig.direction === "asc" 
                            ? <ChevronUp className="h-4 w-4 ml-1" /> 
                            : <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSortClick("lastUpdatedTime")}
                    >
                      <div className="flex items-center">
                        Last Updated
                        {sortConfig.key === "lastUpdatedTime" && (
                          sortConfig.direction === "asc" 
                            ? <ChevronUp className="h-4 w-4 ml-1" /> 
                            : <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedApis.length > 0 ? (
                    sortedApis.map((api) => (
                      <TableRow key={api.id}>
                        <TableCell className="text-center">
                          {api.featured ? (
                            <Badge className="bg-green-100 text-green-800 border-green-300">
                              Featured
                            </Badge>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{api.name}</div>
                          <div className="text-sm text-gray-500 truncate max-w-md">{api.description}</div>
                        </TableCell>
                        <TableCell>{api.version}</TableCell>
                        <TableCell>
                          <Badge
                            style={{
                              backgroundColor: getStatusColor(api.lifeCycleStatus),
                              color: "#ffffff",
                            }}
                          >
                            {api.lifeCycleStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>{api.provider}</TableCell>
                        <TableCell>{formatDate(api.lastUpdatedTime)}</TableCell>
                        <TableCell>
                          <Button
                            variant={api.featured ? "destructive" : "outline"}
                            size="sm"
                            onClick={() => toggleFeatured(api.id)}
                            className={api.featured ? "" : "border-blue-600 text-blue-600"}
                          >
                            {api.featured ? (
                              <>
                                <X className="h-4 w-4 mr-1" />
                                Remove
                              </>
                            ) : (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Feature
                              </>
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8">
                        <div className="flex flex-col items-center justify-center">
                          <AlertCircle className="h-8 w-8 text-gray-400 mb-2" />
                          <p className="text-lg font-medium">No APIs found</p>
                          <p className="text-sm text-gray-500">Try adjusting your search query</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button
              className="px-6 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                // In a real implementation, you would save the featured APIs to your backend
                console.log("Featured APIs saved:", apis.filter(api => api.featured))
                alert("Featured APIs updated successfully!")
              }}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
