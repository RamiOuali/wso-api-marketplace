 "use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ApiDetail } from "@/components/wso2/api-detail"
import { Loader2 } from 'lucide-react'
import { WSO2AuthService } from "@/lib/wso2/auth-service"

export default function ApiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [baseUrl, setBaseUrl] = useState<string>("")
  const [authService, setAuthService] = useState<WSO2AuthService | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const { id } = React.use(params);
  useEffect(() => {
    try {
      // Get connection details from localStorage
      const storedBaseUrl = localStorage.getItem("wso2_baseUrl")

      if (!storedBaseUrl) {
        // Redirect to connection page if no base URL is found
        router.push("/wso2")
        return
      }

      setBaseUrl(storedBaseUrl)

      // Check if we have client credentials
      const clientId = localStorage.getItem("wso2_clientId")
      const clientSecret = localStorage.getItem("wso2_clientSecret")
      const accessToken = localStorage.getItem("wso2_accessToken")
      const refreshToken = localStorage.getItem("wso2_refreshToken")
      const tokenExpiry = localStorage.getItem("wso2_tokenExpiry")

      if (clientId && clientSecret && accessToken && refreshToken && tokenExpiry) {
        // Create auth service with stored credentials
        const auth = new WSO2AuthService(storedBaseUrl)

        // Set auth service properties
        Object.assign(auth, {
          clientId,
          clientSecret,
          accessToken,
          refreshToken,
          tokenExpiry: Number.parseInt(tokenExpiry, 10),
        })

        setAuthService(auth)
      }
    } catch (err) {
      console.error("Error initializing API detail page:", err)
      setError("Failed to initialize API detail page. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [router])

  if (loading) {
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

  return <ApiDetail baseUrl={baseUrl} apiId={id} WSO2AuthService={authService} />;
}
