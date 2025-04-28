"use client"

import { useState, useEffect } from "react"
import { useThemeContext } from "@/providers/ThemeProvider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2 } from "lucide-react"
import { WSO2DevPortalService } from "@/lib/wso2/api-service"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
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
      className="py-16"
      style={{
        backgroundColor: theme.backgroundColor || "#f9fafb",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight"
            style={{ color: theme.textColor || "#111", fontFamily: theme.headingFont || "Inter, sans-serif" }}
          >
            Discover Powerful APIs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto mb-3"
          >
            Build smarter and faster with our most trusted, high-performance APIs.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleApis.map((api, index) => (
              <ApiCard key={api.id} api={api} index={index} onViewApi={handleViewApi} />
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            className="mt-12 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium shadow-md transition hover:shadow-lg"
            style={{
              backgroundColor: theme.buttonPrimaryColor || "#0070f3",
              color: theme.buttonTextColor || "#ffffff",
              borderRadius: theme.buttonBorderRadius,
            }}
          >
            <a href="/wso2">
              View All APIs
              <ChevronRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Sample ApiCard component implementation
interface ApiCardProps {
  api: APIInfo
  index: number
  onViewApi: (apiId: string) => void
}

export function ApiCard({ api, index, onViewApi }: ApiCardProps) {
  const { theme } = useThemeContext()

  // Get the first letter of the API name for the fallback logo
  const firstLetter = api.name.charAt(0).toUpperCase()

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
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      style={{
        backgroundColor: theme.cardBackgroundColor || "#ffffff",
      }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {api.hasThumbnail && api.thumbnailUrl ? (
            <img
              src={api.thumbnailUrl}
              alt={`${api.name} thumbnail`}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{
                backgroundColor: theme.buttonPrimaryColor || "#0070f3",
                color: theme.buttonTextColor || "#ffffff",
                fontFamily: theme.headingFont || "Inter, sans-serif",
              }}
            >
              {firstLetter}
            </div>
          )}
          <div className="ml-4">
            <h3
              className="text-xl font-semibold"
              style={{ color: theme.textColor || "#111" }}
            >
              {api.name}
            </h3>
            <p className="text-sm text-gray-500">{api.version}</p>
          </div>
        </div>
        <p
          className="text-gray-600 mb-4 line-clamp-3"
          style={{ color: theme.textSecondaryColor || "#4b5563" }}
        >
          {api.description}
        </p>
        <div className="flex justify-between items-center">
          <span
            className="text-sm font-medium"
            style={{ color: theme.textColor || "#111" }}
          >
            {api.avgRating} ★
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewApi(api.id)}
            style={{
              borderColor: theme.buttonPrimaryColor || "#0070f3",
              color: theme.buttonPrimaryColor || "#0070f3",
            }}
          >
            View API
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
