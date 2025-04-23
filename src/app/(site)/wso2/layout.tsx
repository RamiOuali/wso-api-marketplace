
import type React from "react"
import { ErrorBoundary } from "@/components/error-boundary"

export default function WSO2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ErrorBoundary>
      <div className="container mx-auto py-8">{children}</div>
    </ErrorBoundary>
  )
}
