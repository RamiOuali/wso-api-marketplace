"use client"
import { motion } from "framer-motion"
import { Star, ExternalLink, Tag, Clock, Check, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useThemeContext } from "@/providers/ThemeProvider"

// Define types for the card props
export interface CardProps {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

// Base Card component that uses theme properties
export function Card({ className, children, onClick }: CardProps) {
  const context = useThemeContext()
  const theme = context?.theme || null

  if (!theme) {
    return (
      <div className="border rounded-lg p-4 bg-white shadow">
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col border transition-all duration-300 hover:-translate-y-1",
        className
      )}
      style={{
        backgroundColor: theme.cardBackground || "#ffffff",
        borderColor: theme.cardBorderColor || "#e5e7eb",
        borderRadius: theme.cardBorderRadius || "0.5rem",
        boxShadow: theme.cardShadow || "0 2px 4px rgba(0,0,0,0.1)",
        padding: theme.cardPadding || "1rem",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

// Feature Card component for displaying feature data
export interface FeatureCardProps {
  id: string
  title: string
  description: string
  icon?: string
  link?: string
  index?: number
}

export function FeatureCard({ id, title, description, icon, link, index = 0 }: FeatureCardProps) {
  const context = useThemeContext()
  const theme = context?.theme || null

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  if (!theme) return null

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <Card>
        {icon && (
          <img
            src={icon || "/placeholder.svg"}
            alt={`${title} icon`}
            className="w-12 h-12 mb-4"
            style={{
              filter: theme.textColor === "#ffffff" ? "invert(1)" : "none",
            }}
          />
        )}
        <h3
          className="text-xl font-semibold mb-2"
          style={{
            color: theme.textColor || "#333333",
            fontFamily: theme.headingFont || "Inter, sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          className="text-base flex-grow mb-4"
          style={{
            color: theme.textColor || "#333333",
          }}
        >
          {description}
        </p>
        {link && (
          <Button
            asChild
            className="mt-auto w-fit"
            style={{
              backgroundColor: theme.buttonPrimaryColor || "#0070f3",
              color: theme.buttonTextColor || "#ffffff",
              borderRadius: theme.buttonBorderRadius || "0.375rem",
              padding: theme.buttonPadding || "0.5rem 1rem",
            }}
          >
            <a href={link}>Get Started</a>
          </Button>
        )}
      </Card>
    </motion.div>
  )
}

// WSO2 API Card component for displaying API data
export interface WSO2ApiData {
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

export function ApiCard({ api, index = 0 }: { api: WSO2ApiData; index?: number }) {
  // The bug is here - we need to call useThemeContext() with parentheses
  const context = useThemeContext()  // Fix: added () to call the hook properly
  const theme = context?.theme || null

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  // Provide a fallback for when theme is null
  if (!theme) {
    // Instead of returning null, provide a basic card without theme styling
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        <div className="border rounded-lg p-4 bg-white shadow h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              {api.hasThumbnail && api.thumbnailUrl ? (
                <img
                  src={api.thumbnailUrl || "/placeholder.svg"}
                  alt={`${api.name} thumbnail`}
                  className="w-12 h-12 object-contain rounded-md mb-2"

                />
              ) : (
                <div className="w-12 h-12 rounded-md mb-2 flex items-center justify-center text-xl font-bold bg-orange-500 text-white">
                  {api.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex items-center">
              {api.avgRating && (
                <div className="flex items-center mr-3">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{api.avgRating}</span>
                </div>
              )}
              <Badge
                className="flex items-center gap-1"
                style={{
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                }}
              >
                <Check className="h-4 w-4" />
                {api.lifeCycleStatus}
              </Badge>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-1">
            {api.name}
          </h3>

          <div className="flex items-center text-sm mb-2 opacity-75">
            <span>v{api.version}</span>
            <span className="mx-2">•</span>
            <span>{api.provider}</span>
          </div>

          <p className="text-base flex-grow mb-4">
            {api.description}
          </p>

          {api.tags && api.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {api.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
              {api.tags.length > 3 && (
                <Badge variant="outline">+{api.tags.length - 3}</Badge>
              )}
            </div>
          )}

          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="text-xs opacity-60">
              {api.createdTime && (
                <div>Created: {new Date(api.createdTime).toLocaleDateString()}</div>
              )}
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="ml-auto"
            >
              <a href={`/apis/${api.id}`}>
                <ExternalLink className="h-4 w-4 mr-1" />
                View API
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

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

  // Get status icon based on lifecycle status
  const getStatusIcon = (status: string) => {
    switch (status.toUpperCase()) {
      case "PUBLISHED":
        return <Check className="h-4 w-4" />
      case "DEPRECATED":
        return <AlertCircle className="h-4 w-4" />
      case "RETIRED":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <Card className="h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            {api.hasThumbnail && api.thumbnailUrl ? (
              <img
                src={api.thumbnailUrl || "/placeholder.svg"}
                alt={`${api.name} thumbnail`}
                className="w-12 h-12 object-cover rounded-md mb-2"
              />
            ) : (
              <div
                className="w-12 h-12 rounded-md mb-2 flex items-center justify-center text-xl font-bold"
                style={{
                  backgroundColor: theme.accentColor || "#f97316",
                  color: "#ffffff",
                }}
              >
                {api.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex items-center">
            {api.avgRating && (
              <div className="flex items-center mr-3">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{api.avgRating}</span>
              </div>
            )}
            <Badge
              className="flex items-center gap-1"
              style={{
                backgroundColor: getStatusColor(api.lifeCycleStatus),
                color: "#ffffff",
              }}
            >
              {getStatusIcon(api.lifeCycleStatus)}
              {api.lifeCycleStatus}
            </Badge>
          </div>
        </div>

        <h3
          className="text-xl font-semibold mb-1"
          style={{
            color: theme.textColor || "#333333",
            fontFamily: theme.headingFont || "Inter, sans-serif",
          }}
        >
          {api.name}
        </h3>

        <div className="flex items-center text-sm mb-2 opacity-75">
          <span>v{api.version}</span>
          <span className="mx-2">•</span>
          <span>{api.provider}</span>
        </div>

        <p
          className="text-base flex-grow mb-4"
          style={{
            color: theme.textColor || "#333333",
          }}
        >
          {api.description}
        </p>

        {api.tags && api.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {api.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
            {api.tags.length > 3 && (
              <Badge variant="outline">+{api.tags.length - 3}</Badge>
            )}
          </div>
        )}

        {api.categories && api.categories.length > 0 && (
          <div className="mb-4">
            <div className="text-xs uppercase font-semibold opacity-60 mb-1">Categories</div>
            <div className="flex flex-wrap gap-2">
              {api.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="text-xs opacity-60">
            {api.createdTime && (
              <div>Created: {formatDate(api.createdTime)}</div>
            )}
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="ml-auto"
            style={{
              borderColor: theme.buttonPrimaryColor || "#0070f3",
              color: theme.buttonPrimaryColor || "#0070f3",
            }}
          >
            <a href={`/apis/${api.id}`}>
              <ExternalLink className="h-4 w-4 mr-1" />
              View API
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
