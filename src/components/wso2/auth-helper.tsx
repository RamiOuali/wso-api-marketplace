"use client"

import { useEffect } from "react"
import { WSO2IdentityAuthService } from "@/lib/identity-auth-service"
import { WSO2_AUTH_CONFIG } from "@/lib/wso2/auth-config"
import type { API, AuthState, AuthConfig } from "@/lib/wso2/types"

/**
 * Helper function to get authentication header for API requests 
 */
export function getAuthHeader(authState: AuthState): Record<string, string> {
  if (authState.type === "oauth2" && authState.token) {
    return { Authorization: `Bearer ${authState.token}` }
  }
  if (authState.type === "apikey" && authState.apiKey) {
    return { apikey: authState.apiKey }
  }
  return {}
}

/**
 * Helper function to check if current authentication is valid
 */
export function isAuthValid(authState: AuthState, api: API): boolean {
  if (authState.type === "oauth2") {
    return !!(authState.oauthKeys && authState.token)
  }
  
  if (authState.type === "apikey") {
    return !!authState.apiKey
  }

  return false
}

/**
 * Get default OAuth2 configuration for an API
 */
export function getDefaultOAuthConfig(api: API): AuthConfig {
  const apiDefinition = typeof api.apiDefinition === "string" 
    ? JSON.parse(api.apiDefinition) 
    : api.apiDefinition

  const securitySchemes = apiDefinition?.components?.securitySchemes || {}
  const oauth2Scheme = Object.values(securitySchemes).find((scheme: any) => 
    scheme.type === "oauth2"
  ) as any

  return {
    grantTypes: oauth2Scheme?.flows?.clientCredentials?.grantTypes || ["client_credentials"],
    scopes: oauth2Scheme?.flows?.clientCredentials?.scopes || [],
    validityPeriod: 3600 // Default 1 hour
  }
}

/**
 * Get supported authentication methods for an API
 */
export function getSupportedAuthMethods(api: API): ("oauth2" | "apikey")[] {
  const apiDefinition = typeof api.apiDefinition === "string" 
    ? JSON.parse(api.apiDefinition) 
    : api.apiDefinition

  const securitySchemes = apiDefinition?.components?.securitySchemes || {}
  const methods: ("oauth2" | "apikey")[] = []

  Object.values(securitySchemes).forEach((scheme: any) => {
    if (scheme.type === "oauth2") {
      methods.push("oauth2")
    }
    if (scheme.type === "apiKey") {
      methods.push("apikey")
    }
  })

  return methods.length > 0 ? methods : ["oauth2", "apikey"]
}

/**
 * Helper component to display the current callback URL
 */
export function AuthDebugHelper() {
  useEffect(() => {
    console.log("Current callback URL:", WSO2_AUTH_CONFIG.redirectUri)
  }, [])

  return (
    <div className="my-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <h3 className="mb-2 font-semibold">Authentication Debug Information</h3>
      <p className="mb-2">
        <strong>Current callback URL:</strong> {WSO2_AUTH_CONFIG.redirectUri}
      </p>
      <p className="text-sm text-muted-foreground">
        Make sure this URL matches one of the registered redirect URIs in WSO2 Identity Server.
      </p>
    </div>
  )
}

/**
 * Helper function to initiate login with WSO2 Identity Server
 */
export function initiateWSO2Login(redirectAfterLogin?: string) {
  if (redirectAfterLogin) {
    localStorage.setItem("wso2_identity_redirectAfterLogin", redirectAfterLogin)
  } else {
    localStorage.setItem("wso2_identity_redirectAfterLogin", window.location.pathname)
  }

  const authService = new WSO2IdentityAuthService(
    WSO2_AUTH_CONFIG.apiManagerUrl,
    WSO2_AUTH_CONFIG.clientId,
    "",  // Client secret will be managed by the server
    WSO2_AUTH_CONFIG.redirectUri
  )

  authService.login()
}

/**
 * Helper function to log out from WSO2 Identity Server
 */
export function logoutFromWSO2() {
  const authService = new WSO2IdentityAuthService(
    WSO2_AUTH_CONFIG.apiManagerUrl,
    WSO2_AUTH_CONFIG.clientId,
    "",  // Client secret will be managed by the server
    WSO2_AUTH_CONFIG.redirectUri
  )

  authService.initFromStorage()
  authService.logout(WSO2_AUTH_CONFIG.postLogoutRedirectUri)
}
