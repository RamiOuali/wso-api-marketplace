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
  const [activeTab, setActiveTab] = useState<string>("endpoints")
  const [selectedEndpointDetails, setSelectedEndpointDetails] = useState<any>(null)
  const [curlCommand, setCurlCommand] = useState<string>("")

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
            summary: details.summary || path,
            description: details.description || "",
            parameters: details.parameters || [],
            requestBody: details.requestBody,
            responses: details.responses || {},
          })),
        }))

        setEndpoints(extractedEndpoints)
      } catch (error) {
        console.error("Error parsing API definition:", error)
        setError("Failed to parse API definition")
      }
    }
  }, [api])

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

  const generateApiKey = async () => {
    try {
      setIsGeneratingKey(true)
      setError(null)
      
      const key = await authService.generateAPIKey(applicationId, keyType, validityPeriod)
      setApiKey(key)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate API key")
    } finally {
      setIsGeneratingKey(false)
    }
  }

  const handleParamChange = (name: string, value: string) => {
    setRequestParams((prev) => ({ ...prev, [name]: value }))
  }

  const handleHeaderChange = (name: string, value: string) => {
    setRequestHeaders((prev) => ({ ...prev, [name]: value }))
  }

  const sendRequest = async () => {
    try {
      setIsSendingRequest(true)
      setError(null)
      
      const startTime = Date.now()
      
      const url = new URL(baseUrl + selectedEndpoint)
      // Add query parameters
      Object.entries(requestParams).forEach(([key, value]) => {
        if (value) {
          url.searchParams.append(key, value)
        }
      })

      // Prepare headers
      const headers = new Headers()
      if (apiKey) {
        headers.append("apikey", apiKey)
      }
      Object.entries(requestHeaders).forEach(([key, value]) => {
        if (key && value) {
          headers.append(key, value)
        }
      })

      // Prepare request options
      const options: RequestInit = {
        method: selectedMethod,
        headers,
      }

      // Add body for POST/PUT/PATCH requests
      if (["POST", "PUT", "PATCH"].includes(selectedMethod) && requestBody) {
        options.body = requestBody
      }

      // Generate curl command
      let curl = `curl -X ${selectedMethod} '${url.toString()}'`
      headers.forEach((value, key) => {
        curl += `\n  -H '${key}: ${value}'`
      })
      if (options.body) {
        curl += `\n  -d '${options.body}'`
      }
      setCurlCommand(curl)

      const response = await fetch(url.toString(), options)
      const responseTime = Date.now() - startTime
      setResponseTime(responseTime)
      setResponseStatus(response.status)

      const contentType = response.headers.get("content-type")
      if (contentType?.includes("application/json")) {
        const jsonResponse = await response.json()
        setResponse(jsonResponse)
      } else {
        const textResponse = await response.text()
        setResponse(textResponse)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send request")
    } finally {
      setIsSendingRequest(false)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-12rem)]">
      {/* Left Sidebar - Endpoints List */}
      <div className="w-full lg:w-1/4 flex flex-col border rounded-lg overflow-hidden"
        style={{
          backgroundColor: theme?.cardBackground || "#ffffff",
          borderColor: theme?.cardBorderColor || "#e5e7eb",
        }}>
        <div className="p-4 border-b bg-muted/30">
          <h3 className="text-lg font-medium" style={{ color: theme?.textColor || "#333333" }}>Endpoints</h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="mb-2">
                <div className="text-sm font-medium mb-1 text-muted-foreground">{endpoint.path}</div>
                <div className="flex flex-wrap gap-1">
                  {endpoint.methods.map((method: any, methodIndex: number) => (
                    <Badge
                      key={methodIndex}
                      className={`cursor-pointer border transition-all duration-200 hover:opacity-80 ${
                        selectedEndpoint === endpoint.path && selectedMethod === method.method
                          ? getMethodColor(method.method)
                          : "bg-muted/30 text-muted-foreground border-muted"
                      }`}
                      onClick={() => {
                        setSelectedEndpoint(endpoint.path)
                        setSelectedMethod(method.method)
                        setSelectedEndpointDetails(method)
                        setRequestParams({})
                        setRequestBody("")
                        setResponse(null)
                        setResponseStatus(null)
                      }}
                    >
                      {method.method}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col">
        {selectedEndpoint && selectedMethod ? (
          <Card className="flex-1 border-none shadow-sm overflow-hidden">
            <CardContent className="p-6 h-full flex flex-col">
              {/* API Key Section */}
              {!apiKey && (
                <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Authentication Required</h4>
                      <p className="text-sm text-muted-foreground">Generate an API key to start testing endpoints</p>
                    </div>
                    <Button
                      onClick={generateApiKey}
                      disabled={isGeneratingKey}
                      style={{
                        backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                        color: theme?.buttonTextColor || "#ffffff",
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
                  </div>
                </div>
              )}

              {/* Error Messages */}
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Main Content */}
              <Tabs defaultValue="request" className="flex-1 flex flex-col">
                <div className="border-b mb-6">
                  <div className="flex items-baseline gap-4 mb-4">
                    <h3 className="text-xl font-medium" style={{ color: theme?.textColor || "#333333" }}>
                      {selectedEndpoint}
                    </h3>
                    <Badge className={getMethodColor(selectedMethod)}>{selectedMethod}</Badge>
                  </div>
                  {selectedEndpointDetails?.description && (
                    <p className="text-sm text-muted-foreground mb-4">{selectedEndpointDetails.description}</p>
                  )}
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="request" className="flex-1 space-y-6">
                  {/* Parameters Section */}
                  {selectedEndpointDetails?.parameters?.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium" style={{ color: theme?.textColor || "#333333" }}>Parameters</h4>
                      <div className="grid gap-4">
                        {selectedEndpointDetails.parameters.map((param: any, index: number) => (
                          <div key={index} className="grid grid-cols-4 gap-4 items-start">
                            <div className="space-y-1">
                              <Label htmlFor={`param-${param.name}`} className="flex items-center gap-1">
                                <span className="font-mono text-sm">{param.name}</span>
                                {param.required && <span className="text-red-500">*</span>}
                              </Label>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs capitalize">
                                  {param.in}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {param.type || (param.schema && param.schema.type) || "string"}
                                </span>
                              </div>
                            </div>
                            <div className="col-span-3">
                              <Input
                                id={`param-${param.name}`}
                                value={requestParams[param.name] || ""}
                                onChange={(e) => handleParamChange(param.name, e.target.value)}
                                placeholder={param.description || `Enter ${param.name}`}
                                style={{
                                  backgroundColor: theme?.inputBackground || "#ffffff",
                                  borderColor: theme?.inputBorderColor || "#d1d5db",
                                  color: theme?.inputTextColor || "#333333",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Request Body Section */}
                  {["POST", "PUT", "PATCH"].includes(selectedMethod) && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium" style={{ color: theme?.textColor || "#333333" }}>Request Body</h4>
                      <Textarea
                        value={requestBody}
                        onChange={(e) => setRequestBody(e.target.value)}
                        placeholder="Enter JSON request body"
                        className="font-mono min-h-[200px]"
                        style={{
                          backgroundColor: theme?.inputBackground || "#ffffff",
                          borderColor: theme?.inputBorderColor || "#d1d5db",
                          color: theme?.inputTextColor || "#333333",
                        }}
                      />
                    </div>
                  )}

                  {/* Headers Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium" style={{ color: theme?.textColor || "#333333" }}>Headers</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newName = `header-${Object.keys(requestHeaders).length + 1}`
                          setRequestHeaders((prev) => ({ ...prev, [newName]: "" }))
                        }}
                        style={{
                          borderColor: theme?.buttonSecondaryColor || "#6c757d",
                          color: theme?.buttonSecondaryColor || "#6c757d",
                        }}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Header
                      </Button>
                    </div>
                    <div className="grid gap-2">
                      {apiKey && (
                        <div className="grid grid-cols-4 gap-4 items-center">
                          <div>
                            <Label className="text-sm">apikey</Label>
                          </div>
                          <div className="col-span-3">
                            <Input value={apiKey} disabled className="font-mono bg-muted/30" />
                          </div>
                        </div>
                      )}
                      {Object.entries(requestHeaders).map(([name, value], index) => (
                        <div key={index} className="grid grid-cols-4 gap-4 items-center">
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
                            }}
                          />
                          <div className="col-span-3 flex gap-2">
                            <Input
                              value={value}
                              onChange={(e) => handleHeaderChange(name, e.target.value)}
                              placeholder="Header value"
                              style={{
                                backgroundColor: theme?.inputBackground || "#ffffff",
                                borderColor: theme?.inputBorderColor || "#d1d5db",
                                color: theme?.inputTextColor || "#333333",
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
                    </div>
                  </div>

                  {/* Send Request Button */}
                  <div className="pt-4">
                    <Button
                      onClick={sendRequest}
                      disabled={isSendingRequest || !apiKey}
                      className="w-full"
                      style={{
                        backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                        color: theme?.buttonTextColor || "#ffffff",
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
                  </div>
                </TabsContent>

                <TabsContent value="response" className="flex-1">
                  {(response || responseStatus) ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        {responseStatus && (
                          <div className="space-y-1">
                            <div className="text-xs text-muted-foreground">Status</div>
                            <Badge
                              className={
                                responseStatus >= 200 && responseStatus < 300
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : responseStatus >= 400
                                  ? "bg-red-100 text-red-800 border-red-200"
                                  : "bg-amber-100 text-amber-800 border-amber-200"
                              }
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

                      <div className="relative">
                        <ScrollArea className="h-[calc(100vh-24rem)] w-full">
                          <pre
                            className="p-4 rounded-lg font-mono text-sm whitespace-pre-wrap"
                            style={{
                              backgroundColor: theme?.codeBackground || "#f1f5f9",
                              color: theme?.textColor || "#333333",
                            }}
                          >
                            {typeof response === "object" ? JSON.stringify(response, null, 2) : response}
                          </pre>
                        </ScrollArea>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => {
                            const text = typeof response === "object" ? JSON.stringify(response, null, 2) : response
                            navigator.clipboard.writeText(text)
                          }}
                          style={{
                            backgroundColor: theme?.cardBackground || "#ffffff",
                            borderColor: theme?.buttonSecondaryColor || "#6c757d",
                            color: theme?.buttonSecondaryColor || "#6c757d",
                          }}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[calc(100vh-24rem)] text-muted-foreground">
                      No response yet. Send a request to see the response here.
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="curl" className="flex-1">
                  <div className="space-y-4">
                    <div className="relative">
                      <ScrollArea className="h-[calc(100vh-24rem)] w-full">
                        <pre
                          className="p-4 rounded-lg font-mono text-sm whitespace-pre-wrap"
                          style={{
                            backgroundColor: theme?.codeBackground || "#f1f5f9",
                            color: theme?.textColor || "#333333",
                          }}
                        >
                          {curlCommand || "Send a request to generate the cURL command."}
                        </pre>
                      </ScrollArea>
                      {curlCommand && (
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => navigator.clipboard.writeText(curlCommand)}
                          style={{
                            backgroundColor: theme?.cardBackground || "#ffffff",
                            borderColor: theme?.buttonSecondaryColor || "#6c757d",
                            color: theme?.buttonSecondaryColor || "#6c757d",
                          }}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select an endpoint from the left to start testing
          </div>
        )}
      </div>
    </div>
  )
}
