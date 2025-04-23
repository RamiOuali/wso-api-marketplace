"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Loader2, Copy, Check, Play, Key } from "lucide-react"
import { WSO2ApplicationService } from "@/lib/wso2/application-service"
import type { WSO2AuthService } from "@/lib/wso2/auth-service"
import type { API } from "@/lib/wso2/types"

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
        return "bg-blue-100 text-blue-800"
      case "post":
        return "bg-green-100 text-green-800"
      case "put":
        return "bg-amber-100 text-amber-800"
      case "delete":
        return "bg-red-100 text-red-800"
      case "patch":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
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

      // Construct the endpoint URL
      return `${gatewayUrl}/${context}/${api.version}`
    }

    // If all else fails, use the baseUrl as a fallback
    return baseUrl
  }

  const sendRequest = async () => {
    try {
      setIsSendingRequest(true)
      setError(null)
      setResponse(null)
      setResponseStatus(null)
      setResponseTime(null)

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

      // Use our proxy API route to avoid CORS issues
      const proxyUrl = `/api/wso2-proxy?url=${encodeURIComponent(targetUrl)}`
      console.log("Using proxy URL:", proxyUrl)

      // Prepare headers
      const headers: Record<string, string> = {
        apikey: apiKey,
        ...requestHeaders,
      }

      // Add content-type header for POST/PUT/PATCH requests
      if (["POST", "PUT", "PATCH"].includes(selectedMethod) && !headers["Content-Type"]) {
        headers["Content-Type"] = "application/json"
      }

      console.log("Request headers:", headers)
      console.log("Request method:", selectedMethod)
      console.log("Request body:", ["POST", "PUT", "PATCH"].includes(selectedMethod) ? requestBody : "No body")

      const startTime = Date.now()

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
        if (contentType && contentType.includes("application/json")) {
          const jsonResponse = await response.json()
          setResponse(jsonResponse)
        } else {
          const textResponse = await response.text()
          setResponse(textResponse)
        }
      } catch (fetchErr) {
        console.error("Fetch error:", fetchErr)
        setError(`Network error: ${fetchErr instanceof Error ? fetchErr.message : String(fetchErr)}`)
      }
    } catch (err) {
      console.error("Error sending request:", err)
      setError(`Failed to send request: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setIsSendingRequest(false)
    }
  }

  // Add debug information to help troubleshoot endpoint issues
  useEffect(() => {
    if (api) {
      console.log("API Details for Endpoint Construction:", {
        id: api.id,
        name: api.name,
        context: api.context,
        version: api.version,
        endpointURLs: api.endpointURLs,
        baseUrl: baseUrl,
      })
    }
  }, [api, baseUrl])

  return (
    <div className="space-y-6">
      {/* API Key Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key className="h-5 w-5 mr-2" />
            API Key
          </CardTitle>
          <CardDescription>Generate an API key to authenticate your requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="keyType">Key Type</Label>
                <Select value={keyType} onValueChange={setKeyType}>
                  <SelectTrigger id="keyType">
                    <SelectValue placeholder="Select key type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PRODUCTION">Production</SelectItem>
                    <SelectItem value="SANDBOX">Sandbox</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="validityPeriod">Validity Period (seconds)</Label>
                <Input
                  id="validityPeriod"
                  type="number"
                  value={validityPeriod}
                  onChange={(e) => setValidityPeriod(Number.parseInt(e.target.value))}
                  min={1}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              {apiKey ? (
                <div className="flex items-center space-x-2">
                  <Input value={apiKey} readOnly className="font-mono" />
                  <Button variant="outline" size="icon" onClick={copyApiKey} title="Copy API Key">
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              ) : (
                <Button onClick={generateApiKey} disabled={isGeneratingKey}>
                  {isGeneratingKey ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate API Key"
                  )}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Testing Console */}
      <Card>
        <CardHeader>
          <CardTitle>Test API Endpoints</CardTitle>
          <CardDescription>Send requests to API endpoints and view responses</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <div className="space-y-6">
            {/* Endpoint Selection */}
            <div className="space-y-2">
              <Label htmlFor="endpoint">Endpoint</Label>
              <Select value={selectedEndpoint} onValueChange={setSelectedEndpoint}>
                <SelectTrigger id="endpoint">
                  <SelectValue placeholder="Select an endpoint" />
                </SelectTrigger>
                <SelectContent>
                  {endpoints.map((endpoint, index) => (
                    <SelectItem key={index} value={endpoint.path}>
                      {endpoint.path}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Method Selection */}
            <div className="space-y-2">
              <Label htmlFor="method">Method</Label>
              <div className="flex flex-wrap gap-2">
                {selectedEndpoint &&
                  endpoints
                    .find((e) => e.path === selectedEndpoint)
                    ?.methods.map((method: any, index: number) => (
                      <Badge
                        key={index}
                        className={`cursor-pointer ${
                          selectedMethod === method.method ? getMethodColor(method.method) : "bg-gray-100 text-gray-800"
                        }`}
                        onClick={() => setSelectedMethod(method.method)}
                      >
                        {method.method}
                      </Badge>
                    ))}
              </div>
            </div>

            {/* Parameters */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="parameters">
                <AccordionTrigger>Parameters</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {selectedEndpoint &&
                      selectedMethod &&
                      endpoints
                        .find((e) => e.path === selectedEndpoint)
                        ?.methods.find((m: any) => m.method === selectedMethod)
                        ?.details.parameters?.map((param: any, index: number) => (
                          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div>
                              <Label htmlFor={`param-${param.name}`}>
                                {param.name}
                                {param.required && <span className="text-red-500 ml-1">*</span>}
                              </Label>
                              <div className="text-xs text-gray-500">
                                {param.in} - {param.type || (param.schema && param.schema.type) || "string"}
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <Input
                                id={`param-${param.name}`}
                                value={requestParams[param.name] || ""}
                                onChange={(e) => handleParamChange(param.name, e.target.value)}
                                placeholder={param.description || `Enter ${param.name}`}
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
                        ?.methods.find((m: any) => m.method === selectedMethod)?.details.parameters.length === 0) && (
                      <div className="text-center py-2 text-gray-500">No parameters required</div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Request Headers */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="headers">
                <AccordionTrigger>Headers</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div>
                        <Label htmlFor="header-apikey">apikey</Label>
                        <div className="text-xs text-gray-500">Required for authentication</div>
                      </div>
                      <div className="md:col-span-2">
                        <Input
                          id="header-apikey"
                          value={apiKey || ""}
                          disabled
                          placeholder="Generate an API key first"
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
                          />
                        </div>
                        <div className="md:col-span-2 flex gap-2">
                          <Input
                            value={value}
                            onChange={(e) => handleHeaderChange(name, e.target.value)}
                            placeholder="Header value"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              const newHeaders = { ...requestHeaders }
                              delete newHeaders[name]
                              setRequestHeaders(newHeaders)
                            }}
                          >
                            &times;
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
                    >
                      Add Header
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Request Body */}
            {["POST", "PUT", "PATCH"].includes(selectedMethod) && (
              <div className="space-y-2">
                <Label htmlFor="requestBody">Request Body</Label>
                <Textarea
                  id="requestBody"
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                  placeholder="Enter request body (JSON)"
                  rows={6}
                  className="font-mono"
                />
              </div>
            )}

            {/* Send Button */}
            <Button onClick={sendRequest} disabled={isSendingRequest || !selectedEndpoint || !selectedMethod}>
              {isSendingRequest ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Send Request
                </>
              )}
            </Button>

            {/* Response */}
            {(response !== null || responseStatus !== null) && (
              <div className="space-y-2 mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Response</h3>
                  <div className="flex items-center gap-4">
                    {responseStatus !== null && (
                      <Badge
                        className={
                          responseStatus >= 200 && responseStatus < 300
                            ? "bg-green-100 text-green-800"
                            : responseStatus >= 400
                              ? "bg-red-100 text-red-800"
                              : "bg-amber-100 text-amber-800"
                        }
                      >
                        Status: {responseStatus}
                      </Badge>
                    )}
                    {responseTime !== null && <span className="text-sm text-gray-500">{responseTime}ms</span>}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md overflow-auto max-h-96">
                  <pre className="text-sm font-mono whitespace-pre-wrap">
                    {typeof response === "object" ? JSON.stringify(response, null, 2) : response}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
