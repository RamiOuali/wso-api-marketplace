"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ApiDetail } from "@/components/wso2/api-detail"
import { Loader2 } from "lucide-react"
import { useAuth } from "@/providers/authContext"

export default function ApiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { wso2AuthService, isAuthenticated, isLoading: authLoading } = useAuth()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [baseUrl, setBaseUrl] = useState<string>("")

  const { id } = React.use(params)

  useEffect(() => {
    try {
      // Get base URL from localStorage or use default
      const storedBaseUrl = localStorage.getItem("wso2_baseUrl") || "https://localhost:9443"
      setBaseUrl(storedBaseUrl)

      // Allow unauthenticated users to view the API detail (subscribe button will be disabled)
      setLoading(false)
    } catch (err) {
      console.error("Error initializing API detail page:", err)
      setError("Failed to initialize API detail page. Please try again.")
      setLoading(false)
    }
  }, [router, wso2AuthService, isAuthenticated, authLoading])

  if (loading || authLoading) {
    return (
      <div className="container mx-auto py-8 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>
      </div>
    )
  }

  return <ApiDetail baseUrl={baseUrl} apiId={id} />
}
