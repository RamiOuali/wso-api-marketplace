
"use client"

import { useState, useEffect } from "react"
import { AuthDebugHelper } from "@/components/wso2/auth-helper"
import { WSO2_AUTH_CONFIG } from "@/lib/wso2/auth-config"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function WSO2DebugPage() {
  const [clientId, setClientId] = useState(WSO2_AUTH_CONFIG.clientId)
  const [clientSecret, setClientSecret] = useState(WSO2_AUTH_CONFIG.clientSecret)
  const [baseUrl, setBaseUrl] = useState(WSO2_AUTH_CONFIG.baseUrl)
  const [redirectUri, setRedirectUri] = useState("")

  useEffect(() => {
    // Set the redirect URI after component mounts to ensure window is available
    setRedirectUri(WSO2_AUTH_CONFIG.redirectUri)
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">WSO2 Authentication Debug</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Authentication Configuration</CardTitle>
          <CardDescription>Current configuration for WSO2 Identity Server authentication</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="baseUrl">Base URL</Label>
              <Input id="baseUrl" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} readOnly />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="clientId">Client ID</Label>
              <Input id="clientId" value={clientId} onChange={(e) => setClientId(e.target.value)} readOnly />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="clientSecret">Client Secret</Label>
              <Input id="clientSecret" value={clientSecret ? "••••••••••••••••" : ""} type="password" readOnly />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="redirectUri">Redirect URI</Label>
              <Input
                id="redirectUri"
                value={redirectUri}
                onChange={(e) => setRedirectUri(e.target.value)}
                className="font-mono text-sm"
                readOnly
              />
              <p className="text-xs text-muted-foreground">
                This is the callback URL that must be registered in WSO2 Identity Server
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <AuthDebugHelper />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How to Fix Callback URL Mismatch</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-inside list-decimal space-y-2">
            <li>Log in to your WSO2 Identity Server admin console</li>
            <li>
              Navigate to <strong>Service Providers</strong>
            </li>
            <li>Find and select your application</li>
            <li>
              Go to <strong>Inbound Authentication Configuration</strong> &gt;{" "}
              <strong>OAuth/OpenID Connect Configuration</strong>
            </li>
            <li>
              Add or update the <strong>Callback URL</strong> to match exactly:{" "}
              <code className="rounded bg-muted px-1 py-0.5">{redirectUri}</code>
            </li>
            <li>Save the changes</li>
            <li>Try logging in again</li>
          </ol>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            The callback URL must match exactly, including the protocol (http/https), domain, port, and path.
          </p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alternative Solution</CardTitle>
          <CardDescription>
            If you can't modify the WSO2 Identity Server configuration, you can update your application instead
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Update the <code className="rounded bg-muted px-1 py-0.5">redirectUri</code> in{" "}
            <code className="rounded bg-muted px-1 py-0.5">lib/wso2/auth-config.ts</code> to match what's registered in
            WSO2 Identity Server.
          </p>
          <pre className="overflow-x-auto rounded-md bg-muted p-4">
            <code>{`export const WSO2_AUTH_CONFIG = {
  // ...other config
  redirectUri: "https://your-domain.com/your-registered-callback-path",
  // ...other config
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
