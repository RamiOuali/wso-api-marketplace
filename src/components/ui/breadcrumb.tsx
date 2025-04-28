import * as React from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { useThemeContext } from "@/providers/ThemeProvider"

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  segments: {
    name: string
    href?: string
  }[]
  homeHref?: string
  className?: string
}

export function Breadcrumb({
  segments = [],
  homeHref = "/",
  className,
  ...props
}: BreadcrumbProps) {
  const { theme } = useThemeContext()
  
  return (
    <nav
      className={cn(
        "flex items-center text-sm",
        className
      )}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            href={homeHref}
            className="flex items-center hover:text-primary transition-colors"
            style={{ color: theme?.textSecondaryColor || "#6c757d" }}
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center">
              <ChevronRight 
                className="h-3.5 w-3.5 opacity-50" 
                style={{ color: theme?.textSecondaryColor || "#6c757d" }}
              />
            </li>
            <li>
              {segment.href ? (
                <Link 
                  href={segment.href} 
                  className="hover:text-primary transition-colors"
                  style={{ color: index === segments.length - 1 
                    ? theme?.textColor || "#171717"  // Last item is current page
                    : theme?.textSecondaryColor || "#6c757d"
                  }}
                >
                  {segment.name}
                </Link>
              ) : (
                <span 
                  className="font-medium"
                  style={{ color: theme?.textColor || "#171717" }}
                >
                  {segment.name}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}