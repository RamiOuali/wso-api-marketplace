
"use client"

import { useEffect } from "react"
import { WSO2IdentityAuthService } from "@/lib/identity-auth-service"
import { WSO2_AUTH_CONFIG } from "@/lib/wso2/auth-config"

/**
 * Helper component to display the current callback URL
 * This helps with debugging redirect URL issues
 */
export function AuthDebugHelper() {
  useEffect(() => {
    // Log the callback URL that's being used
    console.log("Current callback URL:", WSO2_AUTH_CONFIG.redirectUri)
  }, [])

  return (
    <div className="my-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <h3 className="mb-2 font-semibold">Authentication Debug Information</h3>
      <p className="mb-2">
        <strong>Current callback URL:</strong> {WSO2_AUTH_CONFIG.redirectUri}
      </p>
      <p className="text-sm text-muted-foreground">
        Make sure this URL exactly matches one of the redirect URIs registered in WSO2 Identity Server.
      </p>
      <div className="mt-4">
        <h4 className="mb-1 font-medium">How to fix the callback URL mismatch:</h4>
        <ol className="list-inside list-decimal text-sm">
          <li>Copy the exact callback URL shown above</li>
          <li>Log in to WSO2 Identity Server admin console</li>
          <li>
            Navigate to Service Providers &gt; Your Application &gt; Inbound Authentication Configuration &gt;
            OAuth/OpenID Connect Configuration
          </li>
          <li>Add or update the Callback URL to match exactly what's shown above</li>
          <li>Save the changes</li>
        </ol>
      </div>
    </div>
  )
}

/**
 * Helper function to initiate login with WSO2 Identity Server
 * @param redirectAfterLogin Optional URL to redirect to after successful login
 */
export function initiateWSO2Login(redirectAfterLogin?: string) {
  // Store the current URL to redirect back after login
  if (redirectAfterLogin) {
    localStorage.setItem("wso2_identity_redirectAfterLogin", redirectAfterLogin)
  } else {
    localStorage.setItem("wso2_identity_redirectAfterLogin", window.location.pathname)
  }

  // Create auth service and initiate login
  const authService = new WSO2IdentityAuthService(
    WSO2_AUTH_CONFIG.baseUrl,
    WSO2_AUTH_CONFIG.clientId,
    WSO2_AUTH_CONFIG.clientSecret,
    WSO2_AUTH_CONFIG.redirectUri,
  )

  authService.login()
}

/**
 * Helper function to log out from WSO2 Identity Server
 */
export function logoutFromWSO2() {
  const authService = new WSO2IdentityAuthService(
    WSO2_AUTH_CONFIG.baseUrl,
    WSO2_AUTH_CONFIG.clientId,
    WSO2_AUTH_CONFIG.clientSecret,
    WSO2_AUTH_CONFIG.redirectUri,
  )

  // Initialize from storage to get the ID token for proper logout
  authService.initFromStorage()

  // Logout and redirect to home page
  authService.logout(WSO2_AUTH_CONFIG.homeUrl)
}
