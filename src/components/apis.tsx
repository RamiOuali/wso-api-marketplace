"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { ApiCard, WSO2ApiData } from "./ui/card"
import { useThemeContext } from "@/providers/ThemeProvider"

// Sample API data for demonstration
const sampleApis: WSO2ApiData[] = [
  {
    id: "01234567-0123-0123-0123-012345678901",
    name: "CalculatorAPI",
    description: "A calculator API that supports basic operations",
    context: "CalculatorAPI",
    version: "1.0.0",
    provider: "admin",
    lifeCycleStatus: "PUBLISHED",
    tags: ["substract", "add"],
    avgRating: "4.5",
    monetization: {
      enabled: true,
    },
    categories: ["Marketing"],
    createdTime: "2020-10-31T13:57:16.229",
    hasThumbnail: true,
  },
  {
    id: "12345678-1234-1234-1234-123456789012",
    name: "WeatherAPI",
    description: "Get real-time weather data for any location worldwide",
    version: "2.1.0",
    provider: "weatherprovider",
    lifeCycleStatus: "PUBLISHED",
    tags: ["weather", "forecast", "temperature"],
    avgRating: "4.8",
    categories: ["Utilities", "Data"],
    createdTime: "2021-03-15T09:22:45.123",
  },
  {
    id: "23456789-2345-2345-2345-234567890123",
    name: "PaymentGateway",
    description: "Secure payment processing API for e-commerce applications",
    version: "3.0.1",
    provider: "paymentsinc",
    lifeCycleStatus: "PUBLISHED",
    tags: ["payments", "ecommerce", "transactions"],
    avgRating: "4.2",
    monetization: {
      enabled: true,
    },
    categories: ["Finance", "E-commerce"],
    createdTime: "2021-05-22T14:30:12.456",
  },
  {
    id: "34567890-3456-3456-3456-345678901234",
    name: "ImageRecognition",
    description: "AI-powered image recognition and classification API",
    version: "1.2.0",
    provider: "aiservices",
    lifeCycleStatus: "DEPRECATED",
    tags: ["ai", "machine-learning", "computer-vision"],
    avgRating: "4.6",
    categories: ["AI", "Machine Learning"],
    createdTime: "2020-11-18T10:15:33.789",
  },
]

export function ApiList() {
  const context =useThemeContext() 
  const theme = context?.theme || null
  const [apis, setApis] = useState<WSO2ApiData[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch with a delay
    const fetchApis = async () => {
      setIsLoading(true)
      try {
        // In a real app, you would fetch from WSO2 API here
        // const response = await fetch('/api/wso2/apis');
        // const data = await response.json();
        // setApis(data);

        // Using sample data for demonstration
        setTimeout(() => {
          setApis(sampleApis)
          setIsLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching APIs:", error)
        setIsLoading(false)
      }
    }

    fetchApis()
  }, [])

  // Filter APIs based on search term
  const filteredApis = apis.filter(
    (api) =>
      api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  if (!theme) return null

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: theme.backgroundColor || "#ffffff",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2
              className="text-3xl font-bold mb-2"
              style={{
                color: theme.textColor || "#333333",
                fontFamily: theme.headingFont || "Inter, sans-serif",
              }}
            >
              Available APIs
            </h2>
            <p
              className="text-lg opacity-75 mb-4 md:mb-0"
              style={{
                color: theme.textColor || "#333333",
              }}
            >
              Discover and integrate with our collection of APIs
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search APIs..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  backgroundColor: theme.inputBackground || "#ffffff",
                  borderColor: theme.inputBorderColor || "#d1d5db",
                  color: theme.inputTextColor || "#333333",
                  borderRadius: theme.inputBorderRadius || "0.375rem",
                }}
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              style={{
                borderColor: theme.buttonSecondaryColor || "#6c757d",
                color: theme.buttonSecondaryColor || "#6c757d",
              }}
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border rounded-lg p-6 h-64 animate-pulse"
                style={{
                  backgroundColor: `${theme.cardBackground}80` || "#f9fafb",
                  borderColor: theme.cardBorderColor || "#e5e7eb",
                  borderRadius: theme.cardBorderRadius || "0.5rem",
                }}
              >
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6 mb-6"></div>
                <div className="flex gap-2 mb-6">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded w-1/3 ml-auto"></div>
              </div>
            ))}
          </div>
        ) : filteredApis.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApis.map((api, index) => (
              <ApiCard key={api.id} api={api} index={index} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-16 border rounded-lg"
            style={{
              borderColor: theme.cardBorderColor || "#e5e7eb",
              borderRadius: theme.cardBorderRadius || "0.5rem",
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                color: theme.textColor || "#333333",
              }}
            >
              No APIs Found
            </h3>
            <p
              className="text-base opacity-75"
              style={{
                color: theme.textColor || "#333333",
              }}
            >
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
