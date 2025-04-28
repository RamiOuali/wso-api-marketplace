"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { 
  FileText, Code, Info, Server, Database, AlertCircle, 
  ChevronDown, ChevronRight, Copy, ExternalLink,
  Menu, X, List, Layout,
  ChevronLeft
} from 'lucide-react'
import { useThemeContext } from "@/providers/ThemeProvider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface ApiDocumentationProps {
  swagger: any
}

export function ApiDocumentation({ swagger }: ApiDocumentationProps) {
  const [paths, setPaths] = useState<any[]>([])
  const [definitions, setDefinitions] = useState<any[]>([])
  const [info, setInfo] = useState<any>(null)
  const [servers, setServers] = useState<any[]>([])
  const [expandedEndpoints, setExpandedEndpoints] = useState<string[]>([])
  const [expandedModels, setExpandedModels] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterMethod, setFilterMethod] = useState<string | null>(null)
  const [activeEndpoint, setActiveEndpoint] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [uiStyle, setUiStyle] = useState<"swagger" | "rapidoc">("swagger")
  const [pathsByTag, setPathsByTag] = useState<Record<string, any[]>>({})
  const [filteredPathsByTag, setFilteredPathsByTag] = useState<Record<string, any[]>>({})

  const { theme } = useThemeContext()

  useEffect(() => {
    if (swagger) {
      const pathsArray = Object.entries(swagger.paths || {}).map(([path, methods]) => ({
        path,
        methods: Object.entries(methods as any).map(([method, details]) => ({
          method,
          details,
        })),
      }))
      setPaths(pathsArray)

      const definitionsObj = swagger.definitions || swagger.components?.schemas || {}
      const definitionsArray = Object.entries(definitionsObj).map(([name, schema]) => ({
        name,
        schema,
      }))
      setDefinitions(definitionsArray)

      setInfo(swagger.info || null)
      setServers(swagger.servers || [])

      if (pathsArray.length > 0) {
        setActiveEndpoint(`${pathsArray[0].path}-${pathsArray[0].methods[0].method}`)
      }

      // Group paths by tag
      const taggedPaths = pathsArray.reduce((acc: Record<string, any[]>, pathItem) => {
        pathItem.methods.forEach((methodItem: any) => {
          const tags = methodItem.details.tags || ['Default']
          tags.forEach((tag: string) => {
            if (!acc[tag]) acc[tag] = []
            acc[tag].push({
              path: pathItem.path,
              method: methodItem.method,
              summary: methodItem.details.summary || pathItem.path,
              description: methodItem.details.description || '',
              id: `${pathItem.path}-${methodItem.method}`,
              operationId: methodItem.details.operationId || '',
              parameters: methodItem.details.parameters || []
            })
          })
        })
        return acc
      }, {})

      setPathsByTag(taggedPaths)
      setFilteredPathsByTag(taggedPaths)
    }
  }, [swagger])

  // Update filtered paths when search term or filter method changes
  useEffect(() => {
    if (Object.keys(pathsByTag).length === 0) return;

    const filteredTags: Record<string, any[]> = {};

    Object.entries(pathsByTag).forEach(([tag, endpoints]) => {
      const filteredEndpoints = endpoints.filter(endpoint => {
        // Filter by search term
        const matchesSearch = searchTerm === "" || 
          matchesSearchTerm(endpoint.path, searchTerm) ||
          matchesSearchTerm(endpoint.summary, searchTerm) ||
          matchesSearchTerm(endpoint.description, searchTerm) ||
          matchesSearchTerm(endpoint.operationId, searchTerm) ||
          (endpoint.parameters && endpoint.parameters.some((param: any) =>
            matchesSearchTerm(param.name || '', searchTerm) ||
            matchesSearchTerm(param.description || '', searchTerm)
          ));

        // Filter by method
        const matchesMethod = filterMethod === null || endpoint.method.toLowerCase() === filterMethod.toLowerCase();

        return matchesSearch && matchesMethod;
      });

      if (filteredEndpoints.length > 0) {
        filteredTags[tag] = filteredEndpoints;
      }
    });

    setFilteredPathsByTag(filteredTags);
  }, [searchTerm, filterMethod, pathsByTag]);

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

  const getMethodBackgroundColor = (method: string) => {
    switch (method.toLowerCase()) {
      case "get":
        return "bg-blue-50"
      case "post":
        return "bg-green-50"
      case "put":
        return "bg-amber-50"
      case "delete":
        return "bg-red-50"
      case "patch":
        return "bg-purple-50"
      default:
        return "bg-gray-50"
    }
  }

  const formatSchemaType = (schema: any): string => {
    if (!schema) return "any"
    if (schema.$ref) {
      const refParts = schema.$ref.split("/")
      return refParts[refParts.length - 1]
    }
    if (schema.type === "array") {
      if (schema.items) {
        return `array<${formatSchemaType(schema.items)}>`
      }
      return "array"
    }
    if (schema.type === "object" && schema.properties) {
      return "object"
    }
    return schema.type || "any"
  }

  const toggleEndpointExpansion = (id: string) => {
    setExpandedEndpoints(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const toggleModelExpansion = (id: string) => {
    setExpandedModels(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const expandAllEndpoints = () => {
    setExpandedEndpoints(paths.map((_, index) => `path-${index}`))
  }

  const collapseAllEndpoints = () => {
    setExpandedEndpoints([])
  }

  const expandAllModels = () => {
    setExpandedModels(definitions.map((_, index) => `definition-${index}`))
  }

  const collapseAllModels = () => {
    setExpandedModels([])
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => console.log('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  const matchesSearchTerm = (text: string, search: string) => {
    if (!text || !search) return !search; // If search is empty, always match
    
    const lowerText = text.toLowerCase();
    const lowerSearch = search.toLowerCase();
    
    if (search.startsWith('.')) {
      return lowerText.endsWith(lowerSearch.substring(1));
    }
    return lowerText.includes(lowerSearch);
  }

  const filteredDefinitions = definitions.filter(def =>
    searchTerm === "" ||
    matchesSearchTerm(def.name, searchTerm) ||
    matchesSearchTerm(def.schema.description || '', searchTerm)
  )

  const getActiveEndpointData = () => {
    if (!activeEndpoint) return null
    const [path, method] = activeEndpoint.split('-')
    const pathItem = paths.find(p => p.path === path)
    if (!pathItem) return null
    const methodItem = pathItem.methods.find((m: any) => m.method === method)
    if (!methodItem) return null
    return { path: pathItem.path, methodItem }
  }

  const activeEndpointData = getActiveEndpointData()

  const renderSwaggerStyleEndpoint = () => {
    if (!activeEndpointData) return null
    const { path, methodItem } = activeEndpointData

    return (
      <div className="space-y-4">
        <div className={`p-6 rounded-md ${getMethodBackgroundColor(methodItem.method)}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge className={`uppercase ${getMethodColor(methodItem.method)}`}>
                {methodItem.method}
              </Badge>
              <h3 className="font-medium">{methodItem.details.summary || path}</h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => copyToClipboard(`${methodItem.method.toUpperCase()} ${path}`)}
            >
              <Copy className="h-3 w-3" /> Copy
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <code className="bg-black/10 px-3 py-1 rounded text-sm font-mono">{path}</code>
          </div>

          {methodItem.details.description && (
            <div className="mb-6 bg-white bg-opacity-50 p-3 rounded-md">
              <p className="text-sm">{methodItem.details.description}</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6">
            {methodItem.details.parameters && methodItem.details.parameters.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <span className="mr-2">Parameters</span>
                  <Badge variant="outline">{methodItem.details.parameters.length}</Badge>
                </h4>
                <div className="border rounded-md overflow-hidden bg-white bg-opacity-70">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/30 hover:bg-muted/30">
                        <TableHead className="w-1/4 font-medium">Name</TableHead>
                        <TableHead className="w-1/6 font-medium">In</TableHead>
                        <TableHead className="w-1/6 font-medium">Type</TableHead>
                        <TableHead className="w-1/6 font-medium">Required</TableHead>
                        <TableHead className="w-1/3 font-medium">Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {methodItem.details.parameters.map((param: any, paramIndex: number) => (
                        <TableRow key={paramIndex} className="hover:bg-muted/10">
                          <TableCell className="font-mono text-xs">{param.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize">
                              {param.in}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <code className="text-xs bg-muted/30 px-2 py-1 rounded">
                              {formatSchemaType(param.schema || { type: param.type })}
                            </code>
                          </TableCell>
                          <TableCell>
                            {param.required ? (
                              <Badge variant="destructive" className="text-xs">Required</Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs">Optional</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-xs">
                            {param.description || "-"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}

            {methodItem.details.requestBody && (
              <div>
                <h4 className="text-sm font-medium mb-2">Request Body</h4>
                <div className="bg-white bg-opacity-70 p-4 rounded-md border">
                  {methodItem.details.requestBody.description && (
                    <p className="text-sm mb-3">{methodItem.details.requestBody.description}</p>
                  )}
                  {methodItem.details.requestBody.content && (
                    <div className="space-y-3">
                      {Object.entries(methodItem.details.requestBody.content).map(
                        ([contentType, content]: [string, any], contentIndex) => (
                          <div key={contentIndex} className="space-y-2">
                            <Badge variant="outline">{contentType}</Badge>
                            {content.schema && (
                              <Collapsible className="w-full">
                                <div className="flex items-center justify-between">
                                  <div className="bg-muted/30 px-3 py-2 rounded-md w-full">
                                    <code className="text-xs font-mono">
                                      {formatSchemaType(content.schema)}
                                    </code>
                                  </div>
                                  <CollapsibleTrigger className="ml-2">
                                    <Button variant="ghost" size="sm">
                                      <ChevronDown className="h-4 w-4" />
                                    </Button>
                                  </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent>
                                  <div className="mt-2 bg-muted/20 p-3 rounded-md">
                                    <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                                      {JSON.stringify(content.schema, null, 2)}
                                    </pre>
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                  {methodItem.details.requestBody.required && (
                    <Badge variant="destructive" className="mt-3 text-xs">Required</Badge>
                  )}
                </div>
              </div>
            )}

            {methodItem.details.responses && Object.keys(methodItem.details.responses).length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <span className="mr-2">Responses</span>
                  <Badge variant="outline">{Object.keys(methodItem.details.responses).length}</Badge>
                </h4>
                <div className="space-y-3">
                  {Object.entries(methodItem.details.responses).map(
                    ([code, response]: [string, any], respIndex) => (
                      <Collapsible key={respIndex} className="w-full border rounded-md overflow-hidden">
                        <div className="flex items-center justify-between p-3 bg-muted/10">
                          <div className="flex items-center gap-3">
                            <Badge
                              variant={
                                code.startsWith("2")
                                  ? "default"
                                  : code.startsWith("4") || code.startsWith("5")
                                    ? "destructive"
                                    : "outline"
                              }
                            >
                              {code}
                            </Badge>
                            <span className="text-sm">{response.description || "-"}</span>
                          </div>
                          <CollapsibleTrigger>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent>
                          <div className="p-4 border-t bg-white bg-opacity-70">
                            {response.schema ? (
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <code className="text-xs font-mono bg-muted/30 px-2 py-1 rounded">
                                    {formatSchemaType(response.schema)}
                                  </code>
                                </div>
                                <div className="bg-muted/20 p-3 rounded-md">
                                  <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                                    {JSON.stringify(response.schema, null, 2)}
                                  </pre>
                                </div>
                              </div>
                            ) : response.content ? (
                              <div className="space-y-3">
                                {Object.entries(response.content).map(
                                  ([contentType, content]: [string, any], contentIndex) => (
                                    <div key={contentIndex} className="space-y-2">
                                      <Badge variant="outline" className="text-xs">
                                        {contentType}
                                      </Badge>
                                      {content.schema && (
                                        <div className="space-y-2">
                                          <code className="text-xs font-mono bg-muted/30 px-2 py-1 rounded">
                                            {formatSchemaType(content.schema)}
                                          </code>
                                          <div className="bg-muted/20 p-3 rounded-md">
                                            <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                                              {JSON.stringify(content.schema, null, 2)}
                                            </pre>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            ) : (
                              <p className="text-sm text-muted-foreground">No schema defined</p>
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderRapiDocStyleEndpoint = () => {
    if (!activeEndpointData) return null
    const { path, methodItem } = activeEndpointData
    
    return (
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <div className={`flex items-center p-4 ${methodItem.method === 'get' ? 'bg-blue-600' : 
                           methodItem.method === 'post' ? 'bg-green-600' : 
                           methodItem.method === 'put' ? 'bg-amber-600' : 
                           methodItem.method === 'delete' ? 'bg-red-600' : 
                           methodItem.method === 'patch' ? 'bg-purple-600' : 'bg-gray-600'} text-white`}>
            <div className="font-mono uppercase font-bold w-16 mr-4">{methodItem.method}</div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">{methodItem.details.summary || path}</h3>
              <code className="text-xs opacity-80">{path}</code>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => copyToClipboard(`${methodItem.method.toUpperCase()} ${path}`)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          
          {methodItem.details.description && (
            <div className="p-4 border-b">
              <p className="text-sm">{methodItem.details.description}</p>
            </div>
          )}
          
          {methodItem.details.parameters && methodItem.details.parameters.length > 0 && (
            <div className="p-4 border-b">
              <h4 className="font-bold mb-4">Parameters</h4>
              <div className="space-y-4">
                {methodItem.details.parameters.map((param: any, paramIndex: number) => (
                  <div key={paramIndex} className="bg-muted/30 p-4 rounded-md">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono font-medium">{param.name}</span>
                      <Badge variant="outline" className="capitalize">
                        {param.in}
                      </Badge>
                      {param.required ? (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">Optional</Badge>
                      )}
                    </div>
                    <div className="text-sm mb-2">{param.description || "No description"}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium">Type:</span>
                      <code className="text-xs bg-muted/50 px-2 py-1 rounded">
                        {formatSchemaType(param.schema || { type: param.type })}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {methodItem.details.requestBody && (
            <div className="p-4 border-b">
              <h4 className="font-bold mb-4">Request Body</h4>
              {methodItem.details.requestBody.description && (
                <p className="text-sm mb-4">{methodItem.details.requestBody.description}</p>
              )}
              {methodItem.details.requestBody.content && (
                <div className="space-y-4">
                  {Object.entries(methodItem.details.requestBody.content).map(
                    ([contentType, content]: [string, any], contentIndex) => (
                      <div key={contentIndex} className="bg-muted/30 p-4 rounded-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{contentType}</Badge>
                          {methodItem.details.requestBody.required && (
                            <Badge variant="destructive" className="text-xs">Required</Badge>
                          )}
                        </div>
                        {content.schema && (
                          <Collapsible className="w-full">
                            <div className="flex items-center justify-between mb-2">
                              <code className="text-xs font-mono">
                                {formatSchemaType(content.schema)}
                              </code>
                              <CollapsibleTrigger>
                                <Button variant="ghost" size="sm">
                                  <ChevronDown className="h-4 w-4" />
                                </Button>
                              </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent>
                              <div className="bg-muted/20 p-3 rounded-md">
                                <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                                  {JSON.stringify(content.schema, null, 2)}
                                </pre>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          )}

          {methodItem.details.responses && Object.keys(methodItem.details.responses).length > 0 && (
            <div className="p-4">
              <h4 className="font-bold mb-4">Responses</h4>
              <div className="space-y-4">
                {Object.entries(methodItem.details.responses).map(
                  ([code, response]: [string, any], respIndex) => (
                    <Collapsible key={respIndex} className="w-full">
                      <CollapsibleTrigger className="w-full">
                        <div className={`flex items-center justify-between p-3 rounded-md border
                          ${code.startsWith("2") ? "border-green-200 bg-green-50" : 
                            code.startsWith("4") || code.startsWith("5") ? "border-red-200 bg-red-50" : 
                            "border-gray-200 bg-gray-50"}`}
                        >
                          <div className="flex items-center gap-3">
                            <Badge
                              variant={
                                code.startsWith("2")
                                  ? "default"
                                  : code.startsWith("4") || code.startsWith("5")
                                    ? "destructive"
                                    : "outline"
                              }
                            >
                              {code}
                            </Badge>
                            <span className="text-sm">{response.description || "-"}</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 mt-2 bg-muted/20 rounded-md">
                          {response.schema ? (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <code className="text-xs font-mono bg-muted/30 px-2 py-1 rounded">
                                  {formatSchemaType(response.schema)}
                                </code>
                              </div>
                              <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                                {JSON.stringify(response.schema, null, 2)}
                              </pre>
                            </div>
                          ) : response.content ? (
                            <div className="space-y-3">
                              {Object.entries(response.content).map(
                                ([contentType, content]: [string, any], contentIndex) => (
                                  <div key={contentIndex} className="space-y-2">
                                    <Badge variant="outline" className="text-xs">
                                      {contentType}
                                    </Badge>
                                    {content.schema && (
                                      <div className="space-y-2">
                                        <code className="text-xs font-mono bg-muted/30 px-2 py-1 rounded">
                                          {formatSchemaType(content.schema)}
                                        </code>
                                        <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                                          {JSON.stringify(content.schema, null, 2)}
                                        </pre>
                                      </div>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">No schema defined</p>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  if (!swagger) {
    return (
      <div className="text-center py-12 bg-muted/50 rounded-lg">
        <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-lg font-medium mb-2">No Documentation Available</p>
        <p className="text-muted-foreground">
          This API doesn't have any documentation or the documentation is not accessible.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{info?.title || "API Documentation"}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="ui-style">UI Style:</Label>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${uiStyle === "swagger" ? "font-bold" : ""}`}>Swagger</span>
              <Switch
                id="ui-style"
                checked={uiStyle === "rapidoc"}
                onCheckedChange={(checked) => setUiStyle(checked ? "rapidoc" : "swagger")}
              />
              <span className={`text-sm ${uiStyle === "rapidoc" ? "font-bold" : ""}`}>RapiDoc</span>
            </div>
          </div>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-96 p-0">
              {renderSidebar()}
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className={`hidden md:block ${sidebarOpen ? 'w-80 sm:w-96' : 'w-12'} shrink-0 transition-all duration-300`}>
          {renderSidebar()}
        </div>

        <div className="flex-1">
          {servers && servers.length > 0 && (
            <Card className="mb-6 border shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-sm font-medium">Base URLs</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {servers.map((server, index) => (
                      <div key={index} className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-md">
                        <code className="text-sm font-mono">{server.url}</code>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5"
                          onClick={() => copyToClipboard(server.url)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {info && (
            <Card className="mb-6 border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-primary" />
                  <h3 className="text-lg font-medium">{info.title}</h3>
                  {info.version && (
                    <Badge variant="outline" className="ml-auto">
                      Version: {info.version}
                    </Badge>
                  )}
                </div>
                {info.description && (
                  <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                )}
                {info.contact && (
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    {info.contact.name && <span>Contact: {info.contact.name}</span>}
                    {info.contact.email && <span>Email: {info.contact.email}</span>}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="endpoints" className="mb-6">
            <TabsList>
              <TabsTrigger value="endpoints" className="flex items-center gap-1">
                <Code className="h-4 w-4" /> Endpoints
              </TabsTrigger>
              <TabsTrigger value="models" className="flex items-center gap-1">
                <Database className="h-4 w-4" /> Models
              </TabsTrigger>
            </TabsList>

            <TabsContent value="endpoints" className="mt-4">
              {activeEndpoint ? (
                uiStyle === "swagger" ? renderSwaggerStyleEndpoint() : renderRapiDocStyleEndpoint()
              ) : (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>No endpoint selected</AlertTitle>
                  <AlertDescription>
                    Select an endpoint from the sidebar to view its details.
                  </AlertDescription>
                </Alert>
              )}
            </TabsContent>

            <TabsContent value="models" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Data Models</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={expandAllModels}>
                      Expand All
                    </Button>
                    <Button variant="outline" size="sm" onClick={collapseAllModels}>
                      Collapse All
                    </Button>
                  </div>
                </div>

                {filteredDefinitions.length > 0 ? (
                  <div className="space-y-2">
                    {filteredDefinitions.map((def, index) => (
                      <Collapsible
                        key={def.name}
                        open={expandedModels.includes(`definition-${index}`)}
                        onOpenChange={() => toggleModelExpansion(`definition-${index}`)}
                        className="border rounded-md overflow-hidden"
                      >
                        <CollapsibleTrigger className="w-full">
                          <div className="flex items-center justify-between p-3 bg-muted/30 hover:bg-muted/50">
                            <div className="flex items-center">
                              <Database className="h-4 w-4 mr-2 text-primary" />
                              <span className="font-medium font-mono text-sm">{def.name}</span>
                            </div>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="p-4 bg-white bg-opacity-70">
                            <pre className="text-xs font-mono overflow-auto bg-muted/20 p-3 rounded-md whitespace-pre-wrap">
                              {JSON.stringify(def.schema, null, 2)}
                            </pre>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center bg-muted/20 rounded-md">
                    <Database className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No models found</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )

  function renderSidebar() {
    return (
      <div className={`h-full border-r ${sidebarOpen ? '' : 'items-center'}`}>
        <div className="p-4 flex items-center justify-between border-b">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-primary" />
              <h3 className="font-medium">Endpoints</h3>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:flex hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {sidebarOpen && (
          <>
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search endpoints..."
                  className="w-full p-2 pr-8 border rounded-md text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-1 mt-3">
                <Button
                  variant={filterMethod === null ? "default" : "outline"}
                  size="sm"
                  className="text-xs h-7"
                  onClick={() => setFilterMethod(null)}
                >
                  All
                </Button>
                <Button
                  variant={filterMethod === "get" ? "default" : "outline"}
                  size="sm"
                  className="text-xs h-7"
                  onClick={() => setFilterMethod("get")}
                >
                  GET
                </Button>
                <Button
                  variant={filterMethod === "post" ? "default" : "outline"}
                  size="sm"
                  className="text-xs h-7"
                  onClick={() => setFilterMethod("post")}
                >
                  POST
                </Button>
                <Button
                  variant={filterMethod === "put" ? "default" : "outline"}
                  size="sm"
                  className="text-xs h-7"
                  onClick={() => setFilterMethod("put")}
                >
                  PUT
                </Button>
                <Button
                  variant={filterMethod === "delete" ? "default" : "outline"}
                  size="sm"
                  className="text-xs h-7"
                  onClick={() => setFilterMethod("delete")}
                >
                  DEL
                </Button>
              </div>
            </div>

            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-sm font-medium">Endpoints</h3>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={expandAllEndpoints}
                  title="Expand all"
                >
                  <List className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={collapseAllEndpoints}
                  title="Collapse all"
                >
                  <Layout className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 16rem)" }}>
              <ScrollArea className="h-full">
                {Object.keys(filteredPathsByTag).length > 0 ? (
                  <div>
                    {Object.entries(filteredPathsByTag).map(([tag, endpoints]: [string, any[]], tagIndex) => (
                      <div key={tagIndex}>
                        <div className="p-2 bg-muted/50 font-medium text-sm">
                          {tag}
                        </div>
                        <div className="p-2">
                          {endpoints.map((endpoint: any, endpointIndex) => (
                            <div
                              key={endpointIndex}
                              className={`mb-1 rounded-md cursor-pointer transition-colors ${
                                activeEndpoint === endpoint.id
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-muted/50"
                              }`}
                              onClick={() => setActiveEndpoint(endpoint.id)}
                            >
                              <div className="p-2 flex items-center gap-2">
                                <Badge
                                  className={`uppercase text-xs h-5 min-w-[40px] flex items-center justify-center ${
                                    activeEndpoint === endpoint.id
                                      ? "bg-primary-foreground text-primary"
                                      : getMethodColor(endpoint.method)
                                  }`}
                                >
                                  {endpoint.method}
                                </Badge>
                                <span className="text-xs truncate">{endpoint.summary}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        {tagIndex < Object.keys(filteredPathsByTag).length - 1 && (
                          <Separator className="my-1" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">No endpoints found</p>
                  </div>
                )}
              </ScrollArea>
            </div>
          </>
        )}
      </div>
    )
  }
}
