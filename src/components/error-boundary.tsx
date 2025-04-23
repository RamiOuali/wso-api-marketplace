
"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
            <div className="rounded-full bg-red-100 p-4 mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              An error occurred while rendering this component. Please try refreshing the page or contact support if the
              problem persists.
            </p>
            <div className="space-x-4">
              <Button onClick={() => window.location.reload()}>Refresh Page</Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                Go Back
              </Button>
            </div>
            {process.env.NODE_ENV !== "production" && this.state.error && (
              <div className="mt-8 p-4 bg-gray-100 rounded-md text-left overflow-auto max-w-full">
                <p className="font-mono text-sm text-red-600 mb-2">{this.state.error.toString()}</p>
                {this.state.errorInfo && (
                  <pre className="font-mono text-xs text-gray-800 overflow-auto max-h-[300px]">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
          </div>
        )
      )
    }

    return this.props.children
  }
}
