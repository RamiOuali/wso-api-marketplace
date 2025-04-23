
"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Code, Info } from 'lucide-react'

interface ApiDocumentationProps {
  swagger: any
}

export function ApiDocumentation({ swagger }: ApiDocumentationProps) {
  const [paths, setPaths] = useState<any[]>([])
  const [definitions, setDefinitions] = useState<any[]>([])
  const [info, setInfo] = useState<any>(null)

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
    }
  }, [swagger])

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
      <div className="text-center py-8">
        <p>No documentation available for this API.</p>
      </div>
    )
  }

  return (
    <div>
      <Tabs defaultValue="endpoints">
        <TabsList className="mb-4">
          <TabsTrigger value="endpoints">
            <Code className="h-4 w-4 mr-2" />
            Endpoints
          </TabsTrigger>
          <TabsTrigger value="models">
            <FileText className="h-4 w-4 mr-2" />
            Models
          </TabsTrigger>
          <TabsTrigger value="info">
            <Info className="h-4 w-4 mr-2" />
            API Info
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="endpoints">
          {paths.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {paths.map((pathItem, index) => (
                <AccordionItem key={index} value={`path-${index}`}>
                  <AccordionTrigger className="font-mono text-sm">
                    {pathItem.path}
                  </AccordionTrigger>
                  <AccordionContent>
                    {pathItem.methods.map((methodItem, methodIndex) => (
                      <div key={methodIndex} className="mb-4 border rounded-md overflow-hidden">
                        <div className="flex items-center p-3 bg-gray-50 border-b">
                          <Badge className={`uppercase mr-2 ${getMethodColor(methodItem.method)}`}>
                            {methodItem.method}
                          </Badge>
                          <span className="font-medium">{methodItem.details.summary || pathItem.path}</span>
                        </div>
                        <div className="p-3">
                          {methodItem.details.description && (
                            <p className="text-sm text-gray-600 mb-3">{methodItem.details.description}</p>
                          )}
                          
                          {/* Parameters */}
                          {methodItem.details.parameters && methodItem.details.parameters.length > 0 && (
                            <div className="mb-3">
                              <h4 className="text-sm font-medium mb-2">Parameters</h4>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>In</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Required</TableHead>
                                    <TableHead>Description</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {methodItem.details.parameters.map((param: any, paramIndex: number) => (
                                    <TableRow key={paramIndex}>
                                      <TableCell className="font-mono text-xs">{param.name}</TableCell>
                                      <TableCell>
                                        <Badge variant="outline">{param.in}</Badge>
                                      </TableCell>
                                      <TableCell>
                                        {formatSchemaType(param.schema || { type: param.type })}
                                      </TableCell>
                                      <TableCell>
                                        {param.required ? (
                                          <Badge variant="destructive">Required</Badge>
                                        ) : (
                                          <Badge variant="outline">Optional</Badge>
                                        )}
                                      </TableCell>
                                      <TableCell className="text-sm">{param.description || "-"}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          )}
                          
                          {/* Responses */}
                          {methodItem.details.responses && Object.keys(methodItem.details.responses).length > 0 && (
                            <div>
                              <h4 className="text-sm font-medium mb-2">Responses</h4>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Code</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Schema</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {Object.entries(methodItem.details.responses).map(([code, response]: [string, any], respIndex) => (
                                    <TableRow key={respIndex}>
                                      <TableCell>
                                        <Badge
                                          variant={code.startsWith("2") ? "default" : code.startsWith("4") || code.startsWith("5") ? "destructive" : "outline"}
                                        >
                                          {code}
                                        </Badge>
                                      </TableCell>
                                      <TableCell>{response.description || "-"}</TableCell>
                                      <TableCell>
                                        {response.schema ? formatSchemaType(response.schema) : "-"}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8">
              <p>No endpoints defined for this API.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="models">
          {definitions.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {definitions.map((definition, index) => (
                <AccordionItem key={index} value={`definition-${index}`}>
                  <AccordionTrigger>
                    {definition.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    {definition.schema.properties ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Required</TableHead>
                            <TableHead>Description</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Object.entries(definition.schema.properties).map(([propName, propSchema]: [string, any], propIndex) => (
                            <TableRow key={propIndex}>
                              <TableCell className="font-mono text-xs">{propName}</TableCell>
                              <TableCell>{formatSchemaType(propSchema)}</TableCell>
                              <TableCell>
                                {definition.schema.required && definition.schema.required.includes(propName) ? (
                                  <Badge variant="destructive">Required</Badge>
                                ) : (
                                  <Badge variant="outline">Optional</Badge>
                                )}
                              </TableCell>
                              <TableCell className="text-sm">{propSchema.description || "-"}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="text-sm">
                        <pre className="bg-gray-50 p-3 rounded overflow-auto">
                          {JSON.stringify(definition.schema, null, 2)}
                        </pre>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8">
              <p>No models defined for this API.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="info">
          {info ? (
            <Card>
              <CardHeader>
                <CardTitle>{info.title}</CardTitle>
                <CardDescription>Version: {info.version}</CardDescription>
              </CardHeader>
              <CardContent>
                {info.description && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-1">Description</h3>
                    <p className="text-sm">{info.description}</p>
                  </div>
                )}
                
                {info.termsOfService && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-1">Terms of Service</h3>
                    <a href={info.termsOfService} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                      {info.termsOfService}
                    </a>
                  </div>
                )}
                
                {info.contact && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-1">Contact</h3>
                    <div className="text-sm">
                      {info.contact.name && <p>Name: {info.contact.name}</p>}
                      {info.contact.email && (
                        <p>
                          Email:{" "}
                          <a href={`mailto:${info.contact.email}`} className="text-blue-600 hover:underline">
                            {info.contact.email}
                          </a>
                        </p>
                      )}
                      {info.contact.url && (
                        <p>
                          URL:{" "}
                          <a href={info.contact.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {info.contact.url}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}
                
                {info.license && (
                  <div>
                    <h3 className="text-sm font-medium mb-1">License</h3>
                    <div className="text-sm">
                      <p>Name: {info.license.name}</p>
                      {info.license.url && (
                        <p>
                          URL:{" "}
                          <a href={info.license.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
            <div className="text-center py-8">
              <p>No API information available.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
