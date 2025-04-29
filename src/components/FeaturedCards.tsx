"use client"

import { useState, useEffect } from "react"
import { useThemeContext } from "@/providers/ThemeProvider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2, Star, Users, ArrowRight, Code, Shield } from "lucide-react"
import { WSO2DevPortalService } from "@/lib/wso2/api-service"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import type { APIInfo } from "@/lib/wso2/types"

export function FeaturedAPIs() {
  const { theme } = useThemeContext()
  const [featuredApis, setFeaturedApis] = useState<APIInfo[]>([
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
        enabled: true,
      },
      categories: ["Finance"],
      createdTime: "2025-01-15T09:30:00Z",
      lastUpdatedTime: "2025-03-21T14:22:00Z",
      hasThumbnail: true,
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
      categories: ["Data", "CRM"],
      createdTime: "2024-11-05T11:15:00Z",
      lastUpdatedTime: "2025-02-18T10:00:00Z",
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
        enabled: true,
      },
      categories: ["Logistics"],
      createdTime: "2025-02-10T08:45:00Z",
      lastUpdatedTime: "2025-04-05T09:30:00Z",
    },
  ])
  const [visibleApis, setVisibleApis] = useState<APIInfo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [baseUrl, setBaseUrl] = useState<string>("https://localhost:9443")

  useEffect(() => {
    // Get the base URL from localStorage if available
    if (typeof window !== 'undefined') {
      const storedBaseUrl = localStorage.getItem("wso2_baseUrl") || "https://localhost:9443"
      setBaseUrl(storedBaseUrl)
    }

    // Fetch the featured APIs
    fetchFeaturedApis()
  }, [])

  // Function to fetch featured APIs
  const fetchFeaturedApis = async () => {
    try {
      setLoading(true)

      // Get the base URL from localStorage if available (for SSR compatibility)
      const localBaseUrl = typeof window !== 'undefined' 
        ? localStorage.getItem("wso2_baseUrl") || "https://localhost:9443"
        : baseUrl

      // Create API service - we'll use public mode without authentication
      const apiService = new WSO2DevPortalService(localBaseUrl)

      // Fetch APIs with a limit of 3 for featured section
      const response = await apiService.getApis(3, 0)

      if (response && response.list) {
        // Filter for published APIs if needed
        const publishedApis = response.list.filter((api) => api.lifeCycleStatus === "PUBLISHED")

        // Process APIs to ensure thumbnail information is set correctly
        const processedApis = (publishedApis.length > 0 ? publishedApis : response.list)
          .map(api => ({
            ...api,
            // Ensure hasThumbnail is boolean (API might return it as string)
            hasThumbnail: api.hasThumbnail === true || api.hasThumbnail === "true",
            // Add base URL as a thumbnail URL property for easier consumption in child components
            thumbnailUrl: `${localBaseUrl}/api/am/devportal/v3/apis/${api.id}/thumbnail`
          }))

        // Set the processed APIs to state
        setVisibleApis(processedApis)
      } else {
        // Fallback to sample data if API fetch fails
        // Add thumbnailUrl to sample data based on baseUrl
        const processedFallbackApis = featuredApis.map(api => ({
          ...api,
          thumbnailUrl: api.hasThumbnail ? `${localBaseUrl}/api/am/devportal/v3/apis/${api.id}/thumbnail` : null
        }))
        setVisibleApis(processedFallbackApis)
      }
    } catch (error) {
      console.error("Error fetching featured APIs:", error)
      // Fallback to sample data if API fetch fails
      const processedFallbackApis = featuredApis.map(api => ({
        ...api,
        thumbnailUrl: api.hasThumbnail ? `${baseUrl}/api/am/devportal/v3/apis/${api.id}/thumbnail` : null
      }))
      setVisibleApis(processedFallbackApis)
    } finally {
      setLoading(false)
    }
  }

  if (!theme) {
    return null
  }

  // Section animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const handleViewApi = (apiId: string) => {
    router.push(`/wso2/api/${apiId}`)
  }

  return (
    <section
      className="py-20"
      style={{
        backgroundColor: theme.backgroundColor || "#f9fafb",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="max-w-xl mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge 
                className="mb-4"
                style={{
                  backgroundColor: theme.accentColor || "#f97316",
                  color: "#ffffff"
                }}
              >
                Featured APIs
              </Badge>
              <h2
                className="text-4xl font-extrabold tracking-tight mb-4"
                style={{ 
                  color: theme.textColor || "#111", 
                  fontFamily: theme.headingFont || "Inter, sans-serif" 
                }}
              >
                Discover Powerful APIs
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mt-4 mb-3"
              style={{ color: theme.textColor || "#4b5563", opacity: 0.8 }}
            >
              Build smarter and faster with our most trusted, high-performance APIs.
              Integrate seamlessly and accelerate your development.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              asChild
              className="group flex items-center px-6 py-3 text-base font-medium shadow-md hover:shadow-lg transition-all"
              style={{
                backgroundColor: theme.buttonPrimaryColor || "#0070f3",
                color: theme.buttonTextColor || "#ffffff",
                borderRadius: theme.buttonBorderRadius || "0.375rem",
              }}
            >
              <a href="/wso2">
                View All APIs
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin" style={{ color: theme.primaryColor || "#0070f3" }} />
          </div>
        ) : error ? (
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleApis.map((api, index) => (
              <ApiCard key={api.id} api={api} index={index} onViewApi={handleViewApi} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Enhanced ApiCard component implementation
interface ApiCardProps {
  api: APIInfo
  index: number
  onViewApi: (apiId: string) => void
}

export function ApiCard({ api, index, onViewApi }: ApiCardProps) {
  const { theme } = useThemeContext()

  // Get the first letter of the API name for the fallback logo
  const firstLetter = api.name.charAt(0).toUpperCase()

  // Get a colored icon based on API category or first tag
  const getApiIcon = () => {
    const category = api.categories?.[0]?.toLowerCase() || '';
    const firstTag = api.tags?.[0]?.toLowerCase() || '';
    
    if (category.includes('finance') || firstTag.includes('payment') || firstTag.includes('banking')) {
      return <Shield className="h-6 w-6" style={{ color: "#10b981" }} />
    }
    if (category.includes('data') || firstTag.includes('data')) {
      return <Users className="h-6 w-6" style={{ color: "#6366f1" }} />
    }
    return <Code className="h-6 w-6" style={{ color: "#f97316" }} />
  }

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
      className="group relative h-full"
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          backgroundImage: `linear-gradient(135deg, ${theme.primaryColor || "#0070f3"}22, ${theme.accentColor || "#f97316"}1a)`,
          borderRadius: theme.cardBorderRadius || "0.75rem",
          transform: "translate(8px, 8px)",
        }}
      ></div>

      <div 
        className="relative h-full rounded-2xl p-6 flex flex-col transition-all"
        style={{
          backgroundColor: theme.cardBackgroundColor || "#ffffff",
          borderRadius: theme.cardBorderRadius || "0.75rem",
          boxShadow: theme.cardShadow || "0 2px 10px rgba(0,0,0,0.08)",
          border: `1px solid ${theme.cardBorderColor || "rgba(0,0,0,0.05)"}`,
        }}
      >
        {/* API Header with Icon/Image */}
        <div className="flex items-center gap-4 mb-4">
          {api.hasThumbnail && api.thumbnailUrl ? (
            <img
              src={api.thumbnailUrl}
              alt={`${api.name} thumbnail`}
              className="w-14 h-14 rounded-xl object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.getElementsByClassName('fallback-icon')[0].classList.remove('hidden');
              }}
            />
          ) : (
            <div
              className="fallback-icon w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `${theme.primaryColor || "#0070f3"}15`,
              }}
            >
              {getApiIcon()}
            </div>
          )}
          
          <div>
            <div className="flex items-center">
              {api.lifeCycleStatus && (
                <Badge 
                  className="text-xs px-2 py-0.5 mr-2"
                  style={{
                    backgroundColor: (api.lifeCycleStatus === "PUBLISHED") 
                      ? (theme.successColor || "#10b981") 
                      : (theme.warningColor || "#f59e0b"),
                    color: "#ffffff"
                  }}
                >
                  {api.lifeCycleStatus}
                </Badge>
              )}
              {api.avgRating && (
                <div className="flex items-center">
                  <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                  <span className="text-xs font-medium text-gray-600">{api.avgRating}</span>
                </div>
              )}
            </div>
            
            <h3
              className="text-xl font-semibold mt-1"
              style={{ color: theme.textColor || "#111", fontFamily: theme.headingFont || "Inter, sans-serif" }}
            >
              {api.name}
            </h3>
            <p className="text-sm opacity-70" style={{ color: theme.textColor || "#111" }}>
              v{api.version} • {api.provider}
            </p>
          </div>
        </div>
        
        {/* API Description */}
        <p
          className="text-base mb-4 flex-grow"
          style={{ color: theme.textSecondaryColor || "#4b5563" }}
        >
          {api.description}
        </p>
        
        {/* Tags */}
        {api.tags && api.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {api.tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline"
                className="text-xs"
                style={{
                  borderColor: `${theme.primaryColor || "#0070f3"}30`,
                  color: theme.textColor || "#111",
                }}
              >
                {tag}
              </Badge>
            ))}
            {api.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">+{api.tags.length - 3}</Badge>
            )}
          </div>
        )}
        
        {/* Action Button */}
        <div className="mt-auto pt-4">
          <Button
            onClick={() => onViewApi(api.id)}
            className="w-full justify-center items-center group"
            style={{
              backgroundColor: theme.buttonPrimaryColor || "#0070f3",
              color: theme.buttonTextColor || "#ffffff",
              borderRadius: theme.buttonBorderRadius || "0.375rem",
            }}
          >
            View API Details
            <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
