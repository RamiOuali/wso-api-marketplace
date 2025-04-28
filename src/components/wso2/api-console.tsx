"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertCircle, Check, Copy, Key, Loader2, Play, Plus, Trash2, Code } from "lucide-react"
import { WSO2ApplicationService } from "@/lib/wso2/application-service"
import type { WSO2AuthService } from "@/lib/wso2/auth-service"
import type { API } from "@/lib/wso2/types"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useThemeContext } from "@/providers/ThemeProvider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ApiConsoleProps {
  baseUrl: string
  api: API
  authService: WSO2AuthService
  applicationId: string
}

export function ApiConsole({ baseUrl, api, authService, applicationId }: ApiConsoleProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [keyType, setKeyType] = useState<string>("PRODUCTION")
  const [validityPeriod, setValidityPeriod] = useState<number>(3600)
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>("")
  const [selectedMethod, setSelectedMethod] = useState<string>("")
  const [requestParams, setRequestParams] = useState<Record<string, string>>({})
  const [requestBody, setRequestBody] = useState<string>("")
  const [requestHeaders, setRequestHeaders] = useState<Record<string, string>>({})
  const [response, setResponse] = useState<any>(null)
  const [responseStatus, setResponseStatus] = useState<number | null>(null)
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [isGeneratingKey, setIsGeneratingKey] = useState<boolean>(false)
  const [isSendingRequest, setIsSendingRequest] = useState<boolean>(false)
  const [endpoints, setEndpoints] = useState<any[]>([])
  const [debugInfo, setDebugInfo] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("console")
  const [curlCommand, setCurlCommand] = useState<string>("")

  // Use theme context
  const { theme } = useThemeContext()

  // Extract endpoints from API swagger
  useEffect(() => {
    if (api && api.apiDefinition) {
      try {
        const apiDefinition = typeof api.apiDefinition === "string" ? JSON.parse(api.apiDefinition) : api.apiDefinition

        const paths = apiDefinition.paths || {}
        const extractedEndpoints = Object.entries(paths).map(([path, methods]: [string, any]) => ({
          path,
          methods: Object.entries(methods).map(([method, details]: [string, any]) => ({
            method: method.toUpperCase(),
            details,
          })),
        }))

        setEndpoints(extractedEndpoints)

        // Set default endpoint and method if available
        if (extractedEndpoints.length > 0) {
          setSelectedEndpoint(extractedEndpoints[0].path)
          if (extractedEndpoints[0].methods.length > 0) {
            setSelectedMethod(extractedEndpoints[0].methods[0].method)
          }
        }
      } catch (error) {
        console.error("Error parsing API definition:", error)
        setError("Failed to parse API definition")
      }
    }
  }, [api])

  const generateApiKey = async () => {
    try {
      setIsGeneratingKey(true)
      setError(null)

      const appService = new WSO2ApplicationService(baseUrl, authService)
      const response = await appService.generateApiKey(applicationId, keyType as "PRODUCTION" | "SANDBOX", {
        validityPeriod,
      })

      setApiKey(response.apikey)
      setIsCopied(false)
    } catch (err) {
      console.error("Error generating API key:", err)
      setError("Failed to generate API key. Please try again.")
    } finally {
      setIsGeneratingKey(false)
    }
  }

  const copyApiKey = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  const handleParamChange = (name: string, value: string) => {
    setRequestParams((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleHeaderChange = (name: string, value: string) => {
    setRequestHeaders((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const getMethodColor = (method: string) => {
    switch (method.toLowerCase()) {
      case "get":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "post":
        return "bg-green-100 text-green-800 border-green-200"
      case "put":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "delete":
        return "bg-red-100 text-red-800 border-red-200"
      case "patch":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  // Get the endpoint URL using our proxy to avoid CORS issues
  const getEndpointUrl = () => {
    // For debugging
    console.log("API endpoints:", api.endpointURLs)

    // First try to get from endpointURLs
    if (api.endpointURLs && api.endpointURLs.length > 0) {
      const endpoint = api.endpointURLs[0]
      const urls = endpoint.URLs || {}

      // Prefer HTTPS over HTTP
      if (urls.https) {
        return urls.https
      }
      if (urls.http) {
        return urls.http
      }
    }

    // If no endpointURLs, try to construct from context and version
    if (api.context) {
      // Remove leading slash if present
      const context = api.context.startsWith("/") ? api.context.substring(1) : api.context

      // Construct base URL from the WSO2 API Manager URL
      // Typically the gateway is on port 8243 or 8280
      const gatewayUrl = baseUrl.replace(":9443", ":8243") // Replace management port with gateway port

      // Construct the endpoint URL - don't include version twice
      // The context might already include the version
      if (context.includes(api.version)) {
        return `${gatewayUrl}/${context}`
      } else {
        return `${gatewayUrl}/${context}/${api.version}`
      }
    }

    // If all else fails, use the baseUrl as a fallback
    return baseUrl
  }

  // Generate curl command for the current request
  const generateCurlCommand = (targetUrl: string) => {
    let command = `curl -k -X '${selectedMethod}' \\\n  '${targetUrl}'`

    // Add headers
    const allHeaders = { ...requestHeaders }
    if (apiKey) {
      allHeaders["apikey"] = apiKey
    }

    Object.entries(allHeaders).forEach(([key, value]) => {
      command += ` \\\n  -H '${key}: ${value}'`
    })

    // Add body for POST/PUT/PATCH
    if (["POST", "PUT", "PATCH"].includes(selectedMethod) && requestBody) {
      command += ` \\\n  -d '${requestBody}'`
    }

    return command
  }

  const sendRequest = async () => {
    try {
      setIsSendingRequest(true)
      setError(null)
      setResponse(null)
      setResponseStatus(null)
      setResponseTime(null)
      setDebugInfo(null)

      if (!apiKey) {
        setError("Please generate an API key first")
        setIsSendingRequest(false)
        return
      }

      // Build the URL with path parameters
      let targetUrl = getEndpointUrl()
      if (!targetUrl) {
        setError("No endpoint URL available. Please check API configuration.")
        setIsSendingRequest(false)
        return
      }

      console.log("Using endpoint URL:", targetUrl)

      // Add the path
      let path = selectedEndpoint
      console.log("Selected path:", path)

      // Replace path parameters
      Object.entries(requestParams).forEach(([key, value]) => {
        if (path.includes(`{${key}}`)) {
          path = path.replace(`{${key}}`, encodeURIComponent(value))
          delete requestParams[key] // Remove from query params
        }
      })

      // Make sure URL ends with / if path doesn't start with /
      if (!targetUrl.endsWith("/") && !path.startsWith("/")) {
        targetUrl += "/"
      }
      // Remove / from the beginning of path if URL already ends with /
      if (targetUrl.endsWith("/") && path.startsWith("/")) {
        path = path.substring(1)
      }

      targetUrl += path

      // Add query parameters
      const queryParams = new URLSearchParams()
      Object.entries(requestParams).forEach(([key, value]) => {
        if (value) queryParams.append(key, value)
      })

      if (queryParams.toString()) {
        targetUrl += `?${queryParams.toString()}`
      }

      console.log("Final target URL:", targetUrl)

      // Generate curl command
      const curlCmd = generateCurlCommand(targetUrl)
      setCurlCommand(curlCmd)

      // Prepare headers
      const headers: Record<string, string> = {
        ...requestHeaders,
      }

      if (apiKey) {
        headers["apikey"] = apiKey
      }

      // Add content-type header for POST/PUT/PATCH requests
      if (["POST", "PUT", "PATCH"].includes(selectedMethod) && !headers["Content-Type"]) {
        headers["Content-Type"] = "application/json"
      }

      console.log("Request headers:", headers)
      console.log("Request method:", selectedMethod)
      console.log("Request body:", ["POST", "PUT", "PATCH"].includes(selectedMethod) ? requestBody : "No body")

      // Set debug info
      setDebugInfo(
        `Request Details:
- Target URL: ${targetUrl}
- Method: ${selectedMethod}
- Headers: ${JSON.stringify(headers, null, 2)}
- Body: ${["POST", "PUT", "PATCH"].includes(selectedMethod) ? requestBody : "N/A"}
      `,
      )

      const startTime = Date.now()

      // Use our proxy API route to avoid CORS issues
      const proxyUrl = `/api/wso2-proxy?url=${encodeURIComponent(targetUrl)}`
      console.log("Using proxy URL:", proxyUrl)

      try {
        const response = await fetch(proxyUrl, {
          method: selectedMethod,
          headers,
          body: ["POST", "PUT", "PATCH"].includes(selectedMethod) ? requestBody : undefined,
        })

        const endTime = Date.now()
        setResponseTime(endTime - startTime)
        setResponseStatus(response.status)

        // Parse response based on content type
        const contentType = response.headers.get("content-type")

        if (response.status >= 400) {
          try {
            // Try to parse error as JSON first
            const errorData = await response.json()
            setResponse(errorData)
          } catch (jsonError) {
            // If not JSON, get as text
            const errorText = await response.text()
            setResponse(errorText || "Error with no response body")
          }
        } else if (contentType && contentType.includes("application/json")) {
          const jsonResponse = await response.json()
          setResponse(jsonResponse)
        } else {
          const textResponse = await response.text()
          setResponse(textResponse || "(Empty response)")
        }
      } catch (fetchErr) {
        console.error("Fetch error:", fetchErr)

        // Provide more helpful error message for certificate issues
        if (fetchErr.message && fetchErr.message.includes("certificate")) {
          setError(
            "Certificate error: The API Gateway is using a self-signed certificate. " +
            "This is expected in development environments."
          )
        } else {
          setError(`Network error: ${fetchErr instanceof Error ? fetchErr.message : String(fetchErr)}`)
        }
      }
    } catch (err) {
      console.error("Error sending request:", err)
      setError(`Failed to send request: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setIsSendingRequest(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* API Key Generation */}
      <Card
        className="border-none shadow-sm overflow-hidden"
        style={{
          backgroundColor: theme?.cardBackground || "#ffffff",
          borderColor: theme?.cardBorderColor || "#e5e7eb",
          borderRadius: theme?.cardBorderRadius || "0.5rem",
          boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium flex items-center gap-2" style={{ color: theme?.textColor || "#333333" }}>
              <Key className="h-5 w-5 text-muted-foreground" />
              API Key
            </h3>
          </div>

          {error && error.includes("certificate") && (
            <Alert className="mb-4 bg-amber-50 border-amber-200 text-amber-800">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Certificate Issue Detected</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>
                  The API Gateway is using a self-signed certificate, which is common in development environments. You
                  can use the generated cURL command with the <code className="bg-amber-100 px-1 py-0.5 rounded">-k</code>{" "}
                  flag in your terminal.
                </p>
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="keyType" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                Key Type
              </Label>
              <Select value={keyType} onValueChange={setKeyType}>
                <SelectTrigger
                  id="keyType"
                  style={{
                    backgroundColor: theme?.inputBackground || "#ffffff",
                    borderColor: theme?.inputBorderColor || "#d1d5db",
                    color: theme?.inputTextColor || "#333333",
                    borderRadius: theme?.inputBorderRadius || "0.375rem",
                  }}
                >
                  <SelectValue placeholder="Select key type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PRODUCTION">Production</SelectItem>
                  <SelectItem value="SANDBOX">Sandbox</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="validityPeriod" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                Validity Period (seconds)
              </Label>
              <Input
                id="validityPeriod"
                type="number"
                value={validityPeriod}
                onChange={(e) => setValidityPeriod(Number.parseInt(e.target.value))}
                min={1}
                style={{
                  backgroundColor: theme?.inputBackground || "#ffffff",
                  borderColor: theme?.inputBorderColor || "#d1d5db",
                  color: theme?.inputTextColor || "#333333",
                  borderRadius: theme?.inputBorderRadius || "0.375rem",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {apiKey ? (
              <div className="flex items-center space-x-2">
                <Input
                  value={apiKey}
                  readOnly
                  className="font-mono"
                  style={{
                    backgroundColor: theme?.inputBackground || "#ffffff",
                    borderColor: theme?.inputBorderColor || "#d1d5db",
                    color: theme?.inputTextColor || "#333333",
                    borderRadius: theme?.inputBorderRadius || "0.375rem",
                  }}
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={copyApiKey}
                        className="shrink-0"
                        style={{
                          borderColor: theme?.buttonSecondaryColor || "#6c757d",
                          color: theme?.buttonSecondaryColor || "#6c757d",
                        }}
                      >
                        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isCopied ? "Copied!" : "Copy API Key"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ) : (
              <Button
                onClick={generateApiKey}
                disabled={isGeneratingKey}
                className="w-full md:w-auto"
                style={{
                  backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                  color: theme?.buttonTextColor || "#ffffff",
                  borderRadius: theme?.buttonBorderRadius || "0.375rem",
                }}
              >
                {isGeneratingKey ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Key className="mr-2 h-4 w-4" />
                    Generate API Key
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* API Testing Console */}
      <Card
        className="border-none shadow-sm overflow-hidden"
        style={{
          backgroundColor: theme?.cardBackground || "#ffffff",
          borderColor: theme?.cardBorderColor || "#e5e7eb",
          borderRadius: theme?.cardBorderRadius || "0.5rem",
          boxShadow: theme?.cardShadow || "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        <CardContent className="p-6">
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start mb-6 bg-muted/30 p-1 rounded-lg">
              <TabsTrigger value="console" className="flex items-center gap-2 data-[state=active]:bg-background">
                <Play className="h-4 w-4" />
                Console
              </TabsTrigger>
              <TabsTrigger value="curl" className="flex items-center gap-2 data-[state=active]:bg-background">
                <Code className="h-4 w-4" />
                cURL Command
              </TabsTrigger>
            </TabsList>

            <TabsContent value="console">
              <div className="space-y-6">
                {/* Endpoint Selection */}
                <div className="space-y-2">
                  <Label htmlFor="endpoint" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                    Endpoint
                  </Label>
                  <Select value={selectedEndpoint} onValueChange={(value) => {
                    setSelectedEndpoint(value)

                    // Reset request params
                    setRequestParams({})

                    // Auto-select first method when endpoint changes
                    const endpoint = endpoints.find(e => e.path === value)
                    if (endpoint && endpoint.methods.length > 0) {
                      setSelectedMethod(endpoint.methods[0].method)
                    }
                  }}>
                    <SelectTrigger
                      id="endpoint"
                      style={{
                        backgroundColor: theme?.inputBackground || "#ffffff",
                        borderColor: theme?.inputBorderColor || "#d1d5db",
                        color: theme?.inputTextColor || "#333333",
                        borderRadius: theme?.inputBorderRadius || "0.375rem",
                      }}
                    >
                      <SelectValue placeholder="Select an endpoint" />
                    </SelectTrigger>
                    <SelectContent>
                      {endpoints.map((endpoint, index) => (
                        <SelectItem key={index} value={endpoint.path}>
                          <span className="font-mono">{endpoint.path}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Method Selection */}
                <div className="space-y-2">
                  <Label htmlFor="method" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                    Method
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedEndpoint &&
                      endpoints
                        .find((e) => e.path === selectedEndpoint)
                        ?.methods.map((method: any, index: number) => (
                          <Badge
                            key={index}
                            className={`cursor-pointer border transition-all duration-200 hover:opacity-80 ${selectedMethod === method.method
                                ? getMethodColor(method.method)
                                : "bg-muted/30 text-muted-foreground border-muted"
                              }`}
                            onClick={() => setSelectedMethod(method.method)}
                            style={{
                              padding: "0.5rem 1rem",
                              fontSize: "0.875rem",
                              fontWeight: selectedMethod === method.method ? "600" : "400"
                            }}
                          >
                            {method.method}
                          </Badge>
                        ))}
                  </div>
                </div>

                {/* Parameters */}
                <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden">
                  <AccordionItem value="parameters" className="border-none">
                    <AccordionTrigger
                      className="px-4 py-3 hover:bg-muted/30 font-medium"
                      style={{ color: theme?.textColor || "#333333" }}
                    >
                      Parameters
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-4">
                        {selectedEndpoint &&
                          selectedMethod &&
                          endpoints
                            .find((e) => e.path === selectedEndpoint)
                            ?.methods.find((m: any) => m.method === selectedMethod)
                            ?.details.parameters?.map((param: any, index: number) => (
                              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                <div>
                                  <Label htmlFor={`param-${param.name}`} className="flex items-center gap-1" style={{ color: theme?.textColor || "#333333" }}>
                                    <span className="font-mono text-sm">{param.name}</span>
                                    {param.required && <span className="text-red-500">*</span>}
                                  </Label>
                                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                    <Badge variant="outline" className="text-xs capitalize">
                                      {param.in}
                                    </Badge>
                                    <span>•</span>
                                    <span>{param.type || (param.schema && param.schema.type) || "string"}</span>
                                  </div>
                                </div>
                                <div className="md:col-span-2">
                                  <Input
                                    id={`param-${param.name}`}
                                    value={requestParams[param.name] || ""}
                                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                                    placeholder={param.description || `Enter ${param.name}`}
                                    style={{
                                      backgroundColor: theme?.inputBackground || "#ffffff",
                                      borderColor: theme?.inputBorderColor || "#d1d5db",
                                      color: theme?.inputTextColor || "#333333",
                                      borderRadius: theme?.inputBorderRadius || "0.375rem",
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                        {(!selectedEndpoint ||
                          !selectedMethod ||
                          !endpoints
                            .find((e) => e.path === selectedEndpoint)
                            ?.methods.find((m: any) => m.method === selectedMethod)?.details.parameters ||
                          endpoints
                            .find((e) => e.path === selectedEndpoint)
                            ?.methods.find((m: any) => m.method === selectedMethod)?.details.parameters.length ===
                          0) && (
                            <div className="text-center py-4 text-muted-foreground bg-muted/30 rounded-lg">
                              No parameters required for this endpoint
                            </div>
                          )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Request Headers */}
                <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden">
                  <AccordionItem value="headers" className="border-none">
                    <AccordionTrigger
                      className="px-4 py-3 hover:bg-muted/30 font-medium"
                      style={{ color: theme?.textColor || "#333333" }}
                    >
                      Headers
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                          <div>
                            <Label htmlFor="header-apikey" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                              apikey
                            </Label>
                            <div className="text-xs text-muted-foreground mt-1">Required for authentication</div>
                          </div>
                          <div className="md:col-span-2">
                            <Input
                              id="header-apikey"
                              value={apiKey || ""}
                              disabled
                              placeholder="Generate an API key first"
                              className="font-mono bg-muted/30"
                            />
                          </div>
                        </div>

                        {/* Custom headers */}
                        {Object.entries(requestHeaders).map(([name, value], index) => (
                          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div>
                              <Input
                                value={name}
                                onChange={(e) => {
                                  const newHeaders = { ...requestHeaders }
                                  delete newHeaders[name]
                                  newHeaders[e.target.value] = value
                                  setRequestHeaders(newHeaders)
                                }}
                                placeholder="Header name"
                                className="font-mono text-sm"
                                style={{
                                  backgroundColor: theme?.inputBackground || "#ffffff",
                                  borderColor: theme?.inputBorderColor || "#d1d5db",
                                  color: theme?.inputTextColor || "#333333",
                                  borderRadius: theme?.inputBorderRadius || "0.375rem",
                                }}
                              />
                            </div>
                            <div className="md:col-span-2 flex gap-2">
                              <Input
                                value={value}
                                onChange={(e) => handleHeaderChange(name, e.target.value)}
                                placeholder="Header value"
                                style={{
                                  backgroundColor: theme?.inputBackground || "#ffffff",
                                  borderColor: theme?.inputBorderColor || "#d1d5db",
                                  color: theme?.inputTextColor || "#333333",
                                  borderRadius: theme?.inputBorderRadius || "0.375rem",
                                }}
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => {
                                  const newHeaders = { ...requestHeaders }
                                  delete newHeaders[name]
                                  setRequestHeaders(newHeaders)
                                }}
                                className="shrink-0"
                                style={{
                                  borderColor: theme?.errorColor || "#ef4444",
                                  color: theme?.errorColor || "#ef4444",
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}

                        <Button
                          variant="outline"
                          onClick={() => {
                            const newName = `header-${Object.keys(requestHeaders).length + 1}`
                            setRequestHeaders((prev) => ({ ...prev, [newName]: "" }))
                          }}
                          className="flex items-center gap-2"
                          style={{
                            borderColor: theme?.buttonSecondaryColor || "#6c757d",
                            color: theme?.buttonSecondaryColor || "#6c757d",
                            borderRadius: theme?.buttonBorderRadius || "0.375rem",
                            borderRadius: theme?.buttonBorderRadius || "0.375rem",
                          }}
                        >
                          <Plus className="h-4 w-4" />
                          Add Header
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Request Body */}
                {["POST", "PUT", "PATCH"].includes(selectedMethod) && (
                  <div className="space-y-2">
                    <Label htmlFor="request-body" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                      Request Body
                    </Label>
                    <Textarea
                      id="request-body"
                      value={requestBody}
                      onChange={(e) => setRequestBody(e.target.value)}
                      placeholder="Enter JSON request body"
                      className="font-mono h-40"
                      style={{
                        backgroundColor: theme?.inputBackground || "#ffffff",
                        borderColor: theme?.inputBorderColor || "#d1d5db",
                        color: theme?.inputTextColor || "#333333",
                        borderRadius: theme?.inputBorderRadius || "0.375rem",
                      }}
                    />
                  </div>
                )}

                {/* Send Request Button */}
                <Button
                  onClick={sendRequest}
                  disabled={isSendingRequest || !apiKey || !selectedEndpoint || !selectedMethod}
                  className="w-full"
                  style={{
                    backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                    color: theme?.buttonTextColor || "#ffffff",
                    borderRadius: theme?.buttonBorderRadius || "0.375rem",
                  }}
                >
                  {isSendingRequest ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Send Request
                    </>
                  )}
                </Button>

                {/* Response Section */}
                {(response || responseStatus) && (
                  <div className="mt-8 space-y-6">
                    <div className="border-b pb-2">
                      <h3 className="text-lg font-medium" style={{ color: theme?.textColor || "#333333" }}>
                        Response
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {/* Response Status and Time */}
                      <div className="flex flex-wrap gap-4">
                        {responseStatus && (
                          <div className="space-y-1">
                            <div className="text-xs text-muted-foreground">Status</div>
                            <Badge
                              className={`px-3 py-1 ${responseStatus >= 200 && responseStatus < 300
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : responseStatus >= 400
                                    ? "bg-red-100 text-red-800 border-red-200"
                                    : "bg-amber-100 text-amber-800 border-amber-200"
                                }`}
                            >
                              {responseStatus}
                            </Badge>
                          </div>
                        )}
                        {responseTime && (
                          <div className="space-y-1">
                            <div className="text-xs text-muted-foreground">Time</div>
                            <Badge variant="outline">{responseTime} ms</Badge>
                          </div>
                        )}
                      </div>

                      {/* Response Body */}
                      <div className="space-y-2">
                        <Label htmlFor="response-body" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                          Response Body
                        </Label>
                        <div
                          className="rounded-md border bg-muted p-4 relative overflow-hidden"
                          style={{
                            backgroundColor: theme?.codeBackground || "#f1f5f9",
                            borderColor: theme?.codeBorderColor || "#e2e8f0",
                          }}
                        >
                          <ScrollArea className="h-60 w-full relative font-mono text-sm">
                            <pre className="whitespace-pre-wrap break-words">
                              {typeof response === 'object'
                                ? JSON.stringify(response, null, 2)
                                : response}
                            </pre>
                          </ScrollArea>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="absolute top-2 right-2 bg-background"
                                  onClick={() => {
                                    const text = typeof response === 'object'
                                      ? JSON.stringify(response, null, 2)
                                      : response;
                                    navigator.clipboard.writeText(text);
                                  }}
                                  style={{
                                    borderColor: theme?.buttonSecondaryColor || "#6c757d",
                                    color: theme?.buttonSecondaryColor || "#6c757d",
                                  }}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy Response</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Debug Info (only shown if there's debug info) */}
                {debugInfo && (
                  <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden mt-6">
                    <AccordionItem value="debug" className="border-none">
                      <AccordionTrigger className="px-4 py-3 hover:bg-muted/30 font-medium">
                        Debug Information
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div
                          className="rounded-md border bg-muted p-4 font-mono text-sm whitespace-pre-wrap"
                          style={{
                            backgroundColor: theme?.codeBackground || "#f1f5f9",
                            borderColor: theme?.codeBorderColor || "#e2e8f0",
                          }}
                        >
                          {debugInfo}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            </TabsContent>

            <TabsContent value="curl">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="curl-command" className="text-sm" style={{ color: theme?.textColor || "#333333" }}>
                    cURL Command
                  </Label>
                  <div
                    className="relative overflow-hidden rounded-md border bg-muted p-4"
                    style={{
                      backgroundColor: theme?.codeBackground || "#f1f5f9",
                      borderColor: theme?.codeBorderColor || "#e2e8f0",
                    }}
                  >
                    <ScrollArea className="h-60 w-full relative">
                      <pre className="font-mono text-sm whitespace-pre-wrap break-words">
                        {curlCommand || "Select an endpoint and click 'Send Request' to generate a cURL command."}
                      </pre>
                    </ScrollArea>
                    {curlCommand && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute top-2 right-2 bg-background"
                              onClick={() => navigator.clipboard.writeText(curlCommand)}
                              style={{
                                borderColor: theme?.buttonSecondaryColor || "#6c757d",
                                color: theme?.buttonSecondaryColor || "#6c757d",
                              }}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy cURL Command</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    <p>
                      This cURL command can be used to test the API directly from your terminal.
                      The <code className="bg-muted px-1 py-0.5 rounded">-k</code> flag is included to bypass certificate verification for development environments.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
