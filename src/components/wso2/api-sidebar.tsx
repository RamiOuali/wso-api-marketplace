"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useThemeContext } from "@/providers/ThemeProvider"
import type { API } from "@/lib/wso2/types"

interface ApiSidebarProps {
  api: API
  thumbnailUrl: string | null
  formatDate: (date?: string) => string
  onSubscribe: () => void
  isAuthenticated: boolean
  isSubscribed: boolean
}

export function ApiSidebar({
  api,
  thumbnailUrl,
  formatDate,
  onSubscribe,
  isAuthenticated,
  isSubscribed,
}: ApiSidebarProps) {
  const { theme } = useThemeContext()

  return (
    <div className="space-y-6">
      <Card
        style={{
          backgroundColor: theme?.cardBackground || "#ffffff",
          borderColor: theme?.cardBorderColor || "#e5e7eb",
          borderRadius: theme?.cardBorderRadius || "0.5rem",
          boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <CardHeader>
          <CardTitle style={{ color: theme?.textColor || "#333333" }}>API Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {thumbnailUrl && (
            <div className="flex justify-center mb-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-md">
                <Image
                  src={thumbnailUrl || "/placeholder.svg"}
                  alt={`${api.name} thumbnail`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium" style={{ color: theme?.textColor + "80" || "#33333380" }}>
              Context
            </h3>
            <p className="font-mono text-sm" style={{ color: theme?.textColor || "#333333" }}>
              {api.context}
            </p>
          </div>

          {api.type && (
            <div>
              <h3 className="text-sm font-medium" style={{ color: theme?.textColor + "80" || "#33333380" }}>
                Type
              </h3>
              <p style={{ color: theme?.textColor || "#333333" }}>{api.type}</p>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium" style={{ color: theme?.textColor + "80" || "#33333380" }}>
              Created
            </h3>
            <p style={{ color: theme?.textColor || "#333333" }}>{formatDate(api.createdTime)}</p>
          </div>

          {api.lastUpdatedTime && (
            <div>
              <h3 className="text-sm font-medium" style={{ color: theme?.textColor + "80" || "#33333380" }}>
                Last Updated
              </h3>
              <p style={{ color: theme?.textColor || "#333333" }}>{formatDate(api.lastUpdatedTime)}</p>
            </div>
          )}

          {api.categories && api.categories.length > 0 && (
            <div>
              <h3 className="text-sm font-medium" style={{ color: theme?.textColor + "80" || "#33333380" }}>
                Categories
              </h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {api.categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    style={{
                      backgroundColor: theme?.secondaryColor || "#f1f5f9",
                      color: theme?.textColor || "#333333",
                    }}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {api.throttlingPolicies && api.throttlingPolicies.length > 0 && (
            <div>
              <h3 className="text-sm font-medium" style={{ color: theme?.textColor + "80" || "#33333380" }}>
                Available Tiers
              </h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {api.throttlingPolicies.map((policy) => (
                  <Badge
                    key={policy}
                    variant="outline"
                    style={{
                      borderColor: theme?.borderColor || "#e5e7eb",
                      color: theme?.textColor || "#333333",
                    }}
                  >
                    {policy}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {isAuthenticated && !isSubscribed && (
            <Button
              className="w-full"
              onClick={onSubscribe}
              style={{
                backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                color: theme?.buttonTextColor || "#ffffff",
              }}
            >
              Subscribe to API
            </Button>
          )}
        </CardContent>
      </Card>

      {api.monetization?.enabled && (
        <Card
          style={{
            backgroundColor: theme?.cardBackground || "#ffffff",
            borderColor: theme?.cardBorderColor || "#e5e7eb",
            borderRadius: theme?.cardBorderRadius || "0.5rem",
            boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <CardHeader>
            <CardTitle style={{ color: theme?.textColor || "#333333" }}>Monetization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded">
              <p className="font-medium">This API is monetized</p>
              <p className="text-sm mt-1">Subscription may incur charges based on usage.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

