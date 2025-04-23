"use client"
import { useState, useEffect } from "react"
import { useThemeContext } from "@/providers/ThemeProvider"
import { ApiCard } from "./ui/cards"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

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
}

// Sample featured APIs data
// In a production environment, this would come from an API call or CMS

export function FeaturedAPIs() {
  const context = useThemeContext()
  const theme = context?.theme || null
  const [visibleApis, setVisibleApis] = useState<WSO2ApiData[]>([])
 const featuredApis: WSO2ApiData[] = [
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
  thumbnailUrl: theme?.siteLogo  },

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
    hasThumbnail: false
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
    hasThumbnail:false ,
   thumbnailUrl: "/api-thumbnails/logistics.svg"
  },


]
  // In a real implementation, you would fetch the featured APIs
  // selected by the admin from your backend
  useEffect(() => {
    // Simulate an API call to get admin-selected featured APIs
    setVisibleApis(featuredApis)
  }, [])

  if (!theme) {
    console.log("No theme available for FeaturedAPIs")
    return null
  }
  
  // Section animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"

className="flex flex-nowrap 
justify-center gap-6 overflow-x-auto"

        >
          {visibleApis.map((api, index) => (
            <ApiCard
              key={api.id}
              api={api}
              index={index}
            />
          ))}
        </motion.div>
        
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
    borderRadius:theme.buttonBorderRadius
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
