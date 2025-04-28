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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertCircle, Check, Copy, Key, Loader2, Play, Plus, Trash2, Code } from "lucide-react"
import { WSO2ApplicationService } from "@/lib/wso2/application-service"
import type { WSO2AuthService } from "@/lib/wso2/auth-service"
import type { API } from "@/lib/wso2/types"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useThemeContext } from "@/providers/ThemeProvider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { WSO2OAuthService } from "@/lib/wso2/oauth-service"

interface ApiConsoleProps {
  baseUrl: string
  api: API
  authService: WSO2AuthService
  applicationId: string
}

export function ApiConsole({ baseUrl, api, authService, applicationId }: ApiConsoleProps) {
  const [error, setError] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [keyType, setKeyType] = useState<"PRODUCTION" | "SANDBOX">("PRODUCTION")
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
  const [activeTab, setActiveTab] = useState<string>("request")
  const [selectedEndpointDetails, setSelectedEndpointDetails] = useState<any>(null)
  const [curlCommand, setCurlCommand] = useState<string>("")
  const [authType, setAuthType] = useState<"apikey" | "oauth2">("oauth2")
  const [oauthKeys, setOauthKeys] = useState<any>(null)
  const [oauthToken, setOauthToken] = useState<string | null>(null)
  const [isGeneratingOAuthKeys, setIsGeneratingOAuthKeys] = useState<boolean>(false)
  const [isGeneratingOAuthToken, setIsGeneratingOAuthToken] = useState<boolean>(false)

  // Initialize OAuth service
  const oauthService = new WSO2OAuthService(baseUrl, authService)

  const { theme } = useThemeContext()

  // Extract endpoints from API swagger and select first endpoint
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

        // Auto-select first endpoint and method
        if (extractedEndpoints.length > 0) {
          const firstEndpoint = extractedEndpoints[0]
          const firstMethod = firstEndpoint.methods[0]
          setSelectedEndpoint(firstEndpoint.path)
          setSelectedMethod(firstMethod.method)
          setSelectedEndpointDetails(firstMethod)
        }
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
    setIsGeneratingKey(true)
    setError(null)
    try {
      const applicationService = new WSO2ApplicationService(baseUrl, authService)
      const apiKeys = await applicationService.generateApiKey(applicationId, keyType, { validityPeriod })
      setApiKey(apiKeys.apikey)
    } catch (error) {
      console.error("Error generating API key:", error)
      setError("Failed to generate API key. Please try again.")
    } finally {
      setIsGeneratingKey(false)
    }
  }

  const generateOAuthKeys = async () => {
    try {
      setIsGeneratingOAuthKeys(true)
      setError(null)
      
      const keys = await oauthService.generateOAuthKeys(
        applicationId,
        keyType as "PRODUCTION" | "SANDBOX",
        ["client_credentials", "password", "refresh_token"],
        "http://localhost"
      )
      
      setOauthKeys(keys)
      setIsCopied(false)
    } catch (err) {
      console.error("Error generating OAuth keys:", err)
      setError("Failed to generate OAuth keys. Please try again.")
    } finally {
      setIsGeneratingOAuthKeys(false)
    }
  }

  const generateOAuthToken = async () => {
    if (!oauthKeys?.keyMappingId) {
      setError("OAuth keys not generated. Please generate keys first.")
      return
    }

    try {
      setIsGeneratingOAuthToken(true)
      setError(null)

      const tokenResponse = await oauthService.generateOAuthToken(
        applicationId,
        oauthKeys.keyMappingId,
        validityPeriod
      )

      setOauthToken(tokenResponse.accessToken)
      setIsCopied(false)
    } catch (err) {
      console.error("Error generating OAuth token:", err)
      setError("Failed to generate OAuth token. Please try again.")
    } finally {
      setIsGeneratingOAuthToken(false)
    }
  }

  // Load existing OAuth keys on component mount
  useEffect(() => {
    const loadOAuthKeys = async () => {
      try {
        const keys = await oauthService.getOAuthKeys(applicationId)
        if (keys?.list?.[0]) {
          setOauthKeys(keys.list[0])
        }
      } catch (err) {
        console.error("Error loading OAuth keys:", err)
      }
    }

    loadOAuthKeys()
  }, [applicationId])

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

  const sendRequest = async () => {
    setIsSendingRequest(true)
    setError(null)
    setResponse(null)
    setResponseStatus(null)
    setResponseTime(null)

    try {
      const startTime = Date.now()
      
      // Get the actual endpoint URL from the API definition if available
      const endpointUrl = api.endpointURLs?.[0]?.URLs?.https || baseUrl
      const targetUrl = `${endpointUrl}${selectedEndpoint}`
      
      // Use our proxy route
      const proxyUrl = new URL('/api/wso2-proxy', window.location.origin)
      proxyUrl.searchParams.append('url', targetUrl)
      
      const headers: Record<string, string> = {
        ...requestHeaders,
      }

      if (authType === "oauth2" && oauthToken) {
        headers["Authorization"] = `Bearer ${oauthToken}`
      } else if (authType === "apikey" && apiKey) {
        headers["apikey"] = apiKey
      }

      const response = await fetch(proxyUrl.toString(), {
        method: selectedMethod,
        headers,
        body: ["POST", "PUT", "PATCH"].includes(selectedMethod) ? requestBody : undefined,
      })

      const responseTime = Date.now() - startTime
      setResponseTime(responseTime)
      setResponseStatus(response.status)

      const contentType = response.headers.get('content-type')
      if (contentType?.includes('application/json')) {
        const jsonResponse = await response.json()
        setResponse(jsonResponse)
      } else {
        const textResponse = await response.text()
        setResponse(textResponse)
      }

      // Switch to response tab after request is complete
      setActiveTab("response")

    } catch (error) {
      console.error("Error sending request:", error)
      setError("Failed to send request. Please check your input and try again.")
    } finally {
      setIsSendingRequest(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Authentication Type Selection */}
      <Card style={{ backgroundColor: theme?.cardBackground || "#ffffff" }}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key className="h-5 w-5 mr-2" />
            API Authentication
          </CardTitle>
          <CardDescription>Choose authentication method for API requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Button
                variant={authType === "oauth2" ? "default" : "outline"}
                onClick={() => setAuthType("oauth2")}
              >
                OAuth2
              </Button>
              <Button
                variant={authType === "apikey" ? "default" : "outline"}
                onClick={() => setAuthType("apikey")}
              >
                API Key
              </Button>
            </div>

            {/* OAuth2 Configuration */}
            {authType === "oauth2" && (
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
                    <Label htmlFor="validityPeriod">Token Validity (seconds)</Label>
                    <Input
                      id="validityPeriod"
                      type="number"
                      value={validityPeriod}
                      onChange={(e) => setValidityPeriod(Number.parseInt(e.target.value))}
                      min={1}
                    />
                  </div>
                </div>

                {/* OAuth Keys Info */}
                {oauthKeys ? (
                  <div className="space-y-2">
                    <div className="p-4 bg-gray-50 rounded-md">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Consumer Key</Label>
                          <div className="font-mono text-sm truncate">{oauthKeys.consumerKey}</div>
                        </div>
                        <div>
                          <Label>Consumer Secret</Label>
                          <div className="font-mono text-sm truncate">{oauthKeys.consumerSecret}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* OAuth Token Generation */}
                    <div className="flex justify-between items-center">
                      <Button
                        onClick={generateOAuthToken}
                        disabled={isGeneratingOAuthToken}
                      >
                        {isGeneratingOAuthToken ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating Token...
                          </>
                        ) : (
                          "Generate Access Token"
                        )}
                      </Button>
                      {oauthToken && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(oauthToken)
                            setIsCopied(true)
                            setTimeout(() => setIsCopied(false), 2000)
                          }}
                        >
                          {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      )}
                    </div>
                    
                    {oauthToken && (
                      <div className="p-4 bg-gray-50 rounded-md">
                        <Label>Access Token</Label>
                        <div className="font-mono text-sm break-all">{oauthToken}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    onClick={generateOAuthKeys}
                    disabled={isGeneratingOAuthKeys}
                  >
                    {isGeneratingOAuthKeys ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Keys...
                      </>
                    ) : (
                      "Generate OAuth Keys"
                    )}
                  </Button>
                )}
              </div>
            )}

            {/* API Key Configuration */}
            {authType === "apikey" && (
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
                {/* Existing API Key Info and Generate Button */}
                {!apiKey ? (
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
                ) : (
                  <div className="p-4 bg-gray-50 rounded-md">
                    <Label>API Key</Label>
                    <div className="font-mono text-sm break-all">{apiKey}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Rest of the console UI */}
      <ScrollArea className="w-full lg:w-96 border rounded-lg bg-background">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Available Endpoints</h3>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-slate-50/50 transition-colors">
                <div className="font-mono text-sm mb-3 text-slate-700 px-3">{endpoint.path}</div>
                <div className="space-y-2">
                  {endpoint.methods.map((method: any, methodIndex: number) => (
                    <div
                      key={methodIndex}
                      onClick={() => {
                        setSelectedEndpoint(endpoint.path)
                        setSelectedMethod(method.method)
                        setSelectedEndpointDetails(method)
                        setRequestParams({})
                        setRequestBody("")
                        setResponse(null)
                        setResponseStatus(null)
                      }}
                      className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all
                        ${selectedEndpoint === endpoint.path && selectedMethod === method.method
                          ? "bg-slate-100 ring-2 ring-slate-200"
                          : "hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-200"
                        }`}
                    >
                      <Badge
                        className={`w-24 justify-center font-mono text-xs cursor-pointer transform transition-transform hover:scale-105 hover:shadow-sm ${
                          selectedEndpoint === endpoint.path && selectedMethod === method.method
                            ? getMethodColor(method.method)
                            : "bg-slate-100 text-slate-800 hover:bg-slate-200 method-badge-pulse"
                        }`}
                      >
                        {method.method}
                      </Badge>
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1 flex items-center gap-2">
                          {method.details.summary || endpoint.path}
                          <span className="text-xs text-slate-400 hover:text-slate-600">Click to try it out →</span>
                        </div>
                        {method.details.description && (
                          <div className="text-xs text-slate-500 line-clamp-2">
                            {method.details.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Right Content Area - Console */}
      <div className="flex-1 min-w-0 flex flex-col">
        {selectedEndpoint && selectedMethod ? (
          <div className="flex-1 flex flex-col overflow-hidden bg-background rounded-lg border">
            {/* API Key Section */}
            {!apiKey && (
              <div className="px-6 pt-6">
                <div className="p-4 rounded-lg border" style={{
                  backgroundColor: theme?.cardBackground || "#ffffff",
                  borderColor: theme?.cardBorderColor || "#e5e7eb",
                }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-medium">Authentication Required</h4>
                      <p className="text-sm text-muted-foreground">Generate an API key to start testing endpoints</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Select 
                        value={keyType} 
                        onValueChange={(value: "PRODUCTION" | "SANDBOX") => setKeyType(value)}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select key type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PRODUCTION">Production</SelectItem>
                          <SelectItem value="SANDBOX">Sandbox</SelectItem>
                        </SelectContent>
                      </Select>
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
                </div>
              </div>
            )}

            {/* Error Messages */}
            {error && (
              <div className="px-6 pt-4">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1 overflow-hidden p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col h-full">
                <div className="flex-shrink-0 border-b mb-4 lg:mb-6 pb-2">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 lg:gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Badge className={getMethodColor(selectedMethod)}>{selectedMethod}</Badge>
                      <h3 className="text-xl font-medium font-mono" style={{ color: theme?.textColor || "#333333" }}>
                        {selectedEndpoint}
                      </h3>
                    </div>
                    {apiKey && (
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {keyType} KEY
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Expires in {Math.floor(validityPeriod / 60)} minutes
                        </Badge>
                      </div>
                    )}
                  </div>
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="request" className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Request
                    </TabsTrigger>
                    <TabsTrigger value="response" className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Response {responseStatus && `(${responseStatus})`}
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="flex-1 overflow-auto">
                  <TabsContent value="request" className="h-full">
                    <ScrollArea className="h-full">
                      <div className="space-y-6 pb-6">
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
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="response" className="h-full">
                    <ScrollArea className="h-full">
                      {(response || responseStatus) ? (
                        <div className="space-y-4 pb-6">
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
                                  backgroundColor: theme?.cardBackground || "#ffffff",
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
                        <div className="flex items-center justify-center h-full text-muted-foreground">
                          No response yet. Send a request to see the response here.
                        </div>
                      )}
                    </ScrollArea>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select an endpoint from the left to start testing
          </div>
        )}
      </div>
    </div>
  )
}
