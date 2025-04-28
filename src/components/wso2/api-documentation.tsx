"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { FileText, Code, Info, Server, Database, AlertCircle } from 'lucide-react'
import { useThemeContext } from "@/providers/ThemeProvider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ApiDocumentationProps {
  swagger: any
}

export function ApiDocumentation({ swagger }: ApiDocumentationProps) {
  const [paths, setPaths] = useState<any[]>([])
  const [definitions, setDefinitions] = useState<any[]>([])
  const [info, setInfo] = useState<any>(null)
  const [servers, setServers] = useState<any[]>([])

  const { theme } = useThemeContext()

  useEffect(() => {
    if (swagger) {
      // Process paths
      const pathsArray = Object.entries(swagger.paths || {}).map(([path, methods]) => ({
        path,
        methods: Object.entries(methods as any).map(([method, details]) => ({
          method,
          details,
        })),
      }))
      setPaths(pathsArray)

      // Process definitions/schemas
      const definitionsObj = swagger.definitions || swagger.components?.schemas || {}
      const definitionsArray = Object.entries(definitionsObj).map(([name, schema]) => ({
        name,
        schema,
      }))
      setDefinitions(definitionsArray)

      // Set info
      setInfo(swagger.info || null)

      // Set servers (OpenAPI 3.0)
      setServers(swagger.servers || [])
    }
  }, [swagger])

  const getMethodColor = (method: string) => {
    if (!theme) {
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

    switch (method.toLowerCase()) {
      case "get":
        return `bg-blue-100 text-${theme.primaryColor || "blue-800"} border-blue-200`
      case "post":
        return `bg-green-100 text-${theme.successColor || "green-800"} border-green-200`
      case "put":
        return `bg-amber-100 text-${theme.warningColor || "amber-800"} border-amber-200`
      case "delete":
        return `bg-red-100 text-${theme.errorColor || "red-800"} border-red-200`
      case "patch":
        return `bg-purple-100 text-${theme.accentColor || "purple-800"} border-purple-200`
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatSchemaType = (schema: any): string => {
    if (!schema) return "any"

    if (schema.$ref) {
      // Extract the model name from the reference
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
    <div>
      <Tabs defaultValue="endpoints" className="w-full">
        <TabsList className="w-full justify-start mb-6 bg-muted/30 p-1 rounded-lg">
          <TabsTrigger value="endpoints" className="flex items-center gap-2 data-[state=active]:bg-background">
            <Server className="h-4 w-4" />
            Endpoints
          </TabsTrigger>
          <TabsTrigger value="models" className="flex items-center gap-2 data-[state=active]:bg-background">
            <Database className="h-4 w-4" />
            Models
          </TabsTrigger>
          <TabsTrigger value="info" className="flex items-center gap-2 data-[state=active]:bg-background">
            <Info className="h-4 w-4" />
            API Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="endpoints">
          {paths.length > 0 ? (
            <div className="space-y-4">
              {servers && servers.length > 0 && (
                <Card className="mb-6 border-none shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-2">Base URLs</h3>
                    <div className="space-y-2">
                      {servers.map((server, index) => (
                        <div key={index} className="bg-muted/50 p-3 rounded-md">
                          <code className="text-sm font-mono">{server.url}</code>
                          {server.description && (
                            <p className="text-xs text-muted-foreground mt-1">{server.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <ScrollArea className="h-[calc(100vh-400px)]">
                <Accordion type="single" collapsible className="w-full">
                  {paths.map((pathItem, index) => (
                    <AccordionItem key={index} value={`path-${index}`} className="border-b border-muted">
                      <AccordionTrigger className="py-4 px-4 hover:bg-muted/30 rounded-md font-mono text-sm">
                        {pathItem.path}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 px-4">
                        <div className="space-y-4">
                          {pathItem.methods.map((methodItem, methodIndex) => (
                            <div key={methodIndex} className="border rounded-md overflow-hidden">
                              <div className="flex items-center p-3 bg-muted/30 border-b">
                                <Badge className={`uppercase mr-2 ${getMethodColor(methodItem.method)}`}>
                                  {methodItem.method}
                                </Badge>
                                <span className="font-medium">{methodItem.details.summary || pathItem.path}</span>
                              </div>
                              <div className="p-4">
                                {methodItem.details.description && (
                                  <div className="mb-4">
                                    <p className="text-sm text-muted-foreground">{methodItem.details.description}</p>
                                  </div>
                                )}

                                {/* Parameters */}
                                {methodItem.details.parameters && methodItem.details.parameters.length > 0 && (
                                  <div className="mb-4">
                                    <h4 className="text-sm font-medium mb-2">Parameters</h4>
                                    <div className="border rounded-md overflow-hidden">
                                      <Table>
                                        <TableHeader>
                                          <TableRow className="bg-muted/30 hover:bg-muted/30">
                                            <TableHead className="font-medium">Name</TableHead>
                                            <TableHead className="font-medium">In</TableHead>
                                            <TableHead className="font-medium">Type</TableHead>
                                            <TableHead className="font-medium">Required</TableHead>
                                            <TableHead className="font-medium">Description</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {methodItem.details.parameters.map((param: any, paramIndex: number) => (
                                            <TableRow key={paramIndex} className="hover:bg-muted/20">
                                              <TableCell className="font-mono text-xs">{param.name}</TableCell>
                                              <TableCell>
                                                <Badge variant="outline" className="capitalize">
                                                  {param.in}
                                                </Badge>
                                              </TableCell>
                                              <TableCell>
                                                {formatSchemaType(param.schema || { type: param.type })}
                                              </TableCell>
                                              <TableCell>
                                                {param.required ? (
                                                  <Badge variant="destructive" className="text-xs">Required</Badge>
                                                ) : (
                                                  <Badge variant="outline" className="text-xs">Optional</Badge>
                                                )}
                                              </TableCell>
                                              <TableCell className="text-sm">
                                                {param.description || "-"}
                                              </TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  </div>
                                )}

                                {/* Request Body (OpenAPI 3.0) */}
                                {methodItem.details.requestBody && (
                                  <div className="mb-4">
                                    <h4 className="text-sm font-medium mb-2">Request Body</h4>
                                    <div className="bg-muted/30 p-3 rounded-md">
                                      {methodItem.details.requestBody.description && (
                                        <p className="text-sm mb-2">{methodItem.details.requestBody.description}</p>
                                      )}
                                      {methodItem.details.requestBody.content && (
                                        <div className="space-y-2">
                                          {Object.entries(methodItem.details.requestBody.content).map(
                                            ([contentType, content]: [string, any], contentIndex) => (
                                              <div key={contentIndex}>
                                                <Badge variant="outline" className="mb-2">{contentType}</Badge>
                                                {content.schema && (
                                                  <div className="bg-muted/50 p-2 rounded-md">
                                                    <code className="text-xs font-mono">
                                                      {formatSchemaType(content.schema)}
                                                    </code>
                                                  </div>
                                                )}
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )}
                                      {methodItem.details.requestBody.required && (
                                        <Badge variant="destructive" className="mt-2 text-xs">Required</Badge>
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* Responses */}
                                {methodItem.details.responses && Object.keys(methodItem.details.responses).length > 0 && (
                                  <div>
                                    <h4 className="text-sm font-medium mb-2">Responses</h4>
                                    <div className="border rounded-md overflow-hidden">
                                      <Table>
                                        <TableHeader>
                                          <TableRow className="bg-muted/30 hover:bg-muted/30">
                                            <TableHead className="font-medium">Code</TableHead>
                                            <TableHead className="font-medium">Description</TableHead>
                                            <TableHead className="font-medium">Schema</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {Object.entries(methodItem.details.responses).map(
                                            ([code, response]: [string, any], respIndex) => (
                                              <TableRow key={respIndex} className="hover:bg-muted/20">
                                                <TableCell>
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
                                                </TableCell>
                                                <TableCell>{response.description || "-"}</TableCell>
                                                <TableCell>
                                                  {response.schema ? (
                                                    <code className="text-xs font-mono bg-muted/30 px-2 py-1 rounded">
                                                      {formatSchemaType(response.schema)}
                                                    </code>
                                                  ) : response.content ? (
                                                    <div className="space-y-1">
                                                      {Object.entries(response.content).map(
                                                        ([contentType, content]: [string, any], contentIndex) => (
                                                          <div key={contentIndex} className="flex items-center gap-2">
                                                            <Badge variant="outline" className="text-xs">
                                                              {contentType}
                                                            </Badge>
                                                            {content.schema && (
                                                              <code className="text-xs font-mono bg-muted/30 px-2 py-1 rounded">
                                                                {formatSchemaType(content.schema)}
                                                              </code>
                                                            )}
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  ) : (
                                                    "-"
                                                  )}
                                                </TableCell>
                                              </TableRow>
                                            )
                                          )}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </div>
          ) : (
            <Alert variant="default" className="bg-muted/50 border-muted">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Endpoints Defined</AlertTitle>
              <AlertDescription>
                This API doesn't have any endpoints defined in its documentation.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="models">
          {definitions.length > 0 ? (
            <ScrollArea className="h-[calc(100vh-400px)]">
              <Accordion type="single" collapsible className="w-full">
                {definitions.map((definition, index) => (
                  <AccordionItem key={index} value={`definition-${index}`} className="border-b border-muted">
                    <AccordionTrigger className="py-4 px-4 hover:bg-muted/30 rounded-md">
                      <span className="font-mono">{definition.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-4">
                      {definition.schema.properties ? (
                        <div className="border rounded-md overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-muted/30 hover:bg-muted/30">
                                <TableHead className="font-medium">Property</TableHead>
                                <TableHead className="font-medium">Type</TableHead>
                                <TableHead className="font-medium">Required</TableHead>
                                <TableHead className="font-medium">Description</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {Object.entries(definition.schema.properties).map(
                                ([propName, propSchema]: [string, any], propIndex) => (
                                  <TableRow key={propIndex} className="hover:bg-muted/20">
                                    <TableCell className="font-mono text-xs">{propName}</TableCell>
                                    <TableCell>
                                      <code className="text-xs bg-muted/30 px-2 py-1 rounded">
                                        {formatSchemaType(propSchema)}
                                      </code>
                                    </TableCell>
                                    <TableCell>
                                      {definition.schema.required && definition.schema.required.includes(propName) ? (
                                        <Badge variant="destructive" className="text-xs">Required</Badge>
                                      ) : (
                                        <Badge variant="outline" className="text-xs">Optional</Badge>
                                      )}
                                    </TableCell>
                                    <TableCell className="text-sm">{propSchema.description || "-"}</TableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <div className="bg-muted/30 p-4 rounded-md">
                          <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                            {JSON.stringify(definition.schema, null, 2)}
                          </pre>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          ) : (
            <Alert variant="default" className="bg-muted/50 border-muted">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Models Defined</AlertTitle>
              <AlertDescription>
                This API doesn't have any data models defined in its documentation.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="info">
          {info ? (
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
                  <Badge variant="outline" className="text-sm">Version: {info.version}</Badge>
                </div>

                <Separator />

                {info.description && (
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-muted-foreground">Description</h3>
                    <div className="bg-muted/30 p-4 rounded-md">
                      <p className="text-sm whitespace-pre-wrap">{info.description}</p>
                    </div>
                  </div>
                )}

                {info.termsOfService && (
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-muted-foreground">Terms of Service</h3>
                    <a
                      href={info.termsOfService}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {info.termsOfService}
                    </a>
                  </div>
                )}

                {info.contact && Object.keys(info.contact).length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-muted-foreground">Contact</h3>
                    <div className="bg-muted/30 p-4 rounded-md">
                      {info.contact.name && <p className="text-sm mb-1"><span className="font-medium">Name:</span> {info.contact.name}</p>}
                      {info.contact.email && (
                        <p className="text-sm mb-1">
                          <span className="font-medium">Email:</span>{" "}
                          <a href={`mailto:${info.contact.email}`} className="text-primary hover:underline">
                            {info.contact.email}
                          </a>
                        </p>
                      )}
                      {info.contact.url && (
                        <p className="text-sm">
                          <span className="font-medium">URL:</span>{" "}
                          <a
                            href={info.contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {info.contact.url}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {info.license && (
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-muted-foreground">License</h3>
                    <div className="bg-muted/30 p-4 rounded-md">
                      <p className="text-sm mb-1"><span className="font-medium">Name:</span> {info.license.name}</p>
                      {info.license.url && (
                        <p className="text-sm">
                          <span className="font-medium">URL:</span>{" "}
                          <a
                            href={info.license.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {info.license.url}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Alert variant="default" className="bg-muted/50 border-muted">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No API Information</AlertTitle>
              <AlertDescription>
                This API doesn't have any general information defined in its documentation.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
