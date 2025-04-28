"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star } from "lucide-react"
import { useThemeContext } from "@/providers/ThemeProvider"
import type { API } from "@/lib/wso2/types"

interface ApiHeaderProps {
  api: API
  onBack: () => void
  onSubscribe: () => void
  isAuthenticated: boolean
  isSubscribed: boolean
}

export function ApiHeader({ api, onBack, onSubscribe, isAuthenticated, isSubscribed }: ApiHeaderProps) {
  const { theme } = useThemeContext()

  // Get status color based on lifecycle status
  const getStatusColor = (status: string) => {
    if (!theme) return "#10b981"

    switch (status.toUpperCase()) {
      case "PUBLISHED":
        return theme.successColor || "#10b981"
      case "DEPRECATED":
        return theme.warningColor || "#f59e0b"
      case "RETIRED":
        return theme.errorColor || "#ef4444"
      default:
        return theme.infoColor || "#3b82f6"
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
      <div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={onBack}
            style={{
              borderColor: theme?.buttonSecondaryColor || "#6c757d",
              color: theme?.buttonSecondaryColor || "#6c757d",
            }}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1
            className="text-3xl font-bold"
            style={{
              color: theme?.textColor || "#333333",
              fontFamily: theme?.headingFont || "Inter, sans-serif",
            }}
          >
            {api.name}
          </h1>
          <Badge
            style={{
              backgroundColor: getStatusColor(api.lifeCycleStatus),
              color: "#ffffff",
            }}
          >
            {api.lifeCycleStatus}
          </Badge>
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm" style={{ color: theme?.textColor + "80" || "#33333380" }}>
          <span>v{api.version}</span>
          <span>•</span>
          <span>By {api.provider}</span>
          {api.avgRating && (
            <>
              <span>•</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                <span>{api.avgRating}</span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        {isAuthenticated && !isSubscribed && (
          <Button
            onClick={onSubscribe}
            style={{
              backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
              color: theme?.buttonTextColor || "#ffffff",
            }}
          >
            Subscribe to API
          </Button>
        )}
      </div>
    </div>
  )
}
