/**
 * WSO2 Authentication Service
 * Handles authentication with WSO2 API Manager
 */
export class WSO2AuthService {
  baseUrl: string
  clientId = ""
  clientSecret = ""
  accessToken = ""
  refreshToken = ""
  tokenExpiry = 0
  username = ""

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl

    // Try to load credentials from localStorage if available
    if (typeof window !== "undefined") {
      this.clientId = localStorage.getItem("wso2_clientId") || ""
      this.clientSecret = localStorage.getItem("wso2_clientSecret") || ""
      this.accessToken = localStorage.getItem("wso2_accessToken") || ""
      this.refreshToken = localStorage.getItem("wso2_refreshToken") || ""
      this.tokenExpiry = Number.parseInt(localStorage.getItem("wso2_tokenExpiry") || "0", 10)
      this.username = localStorage.getItem("wso2_username") || ""
    }
  }

  /**
   * Check if we have valid credentials
   */
  hasValidCredentials(): boolean {
    return !!(this.clientId && this.clientSecret && this.accessToken)
  }

  /**
   * Check if the token is expired
   */
  isTokenExpired(): boolean {
    return Date.now() > this.tokenExpiry - 60000 // 1 minute buffer
  }

  /**
   * Check if the user is authenticated
   */
  isAuthenticated(): boolean {
    return this.hasValidCredentials() && !this.isTokenExpired()
  }

  /**
   * Get access token, refreshing if necessary
   */
  async getValidAccessToken(): Promise<string> {
    // If we have a valid token, return it
    if (this.accessToken && !this.isTokenExpired()) {
      return this.accessToken
    }

    // If we have a refresh token, try to refresh
    if (this.refreshToken) {
      try {
        await this.refreshAccessToken()
        return this.accessToken
      } catch (error) {
        console.error("Error refreshing token:", error)
        throw error
      }
    }

    throw new Error("No valid token or refresh token available")
  }

  /**
   * Refresh the access token using the refresh token
   */
  async refreshAccessToken(): Promise<void> {
    try {
      const params = new URLSearchParams()
      params.append("grant_type", "refresh_token")
      params.append("refresh_token", this.refreshToken)

      const response = await fetch(`${this.baseUrl}/oauth2/token`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Failed to refresh token: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const data = await response.json()
      this.accessToken = data.access_token
      this.refreshToken = data.refresh_token
      this.tokenExpiry = Date.now() + data.expires_in * 1000

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("wso2_accessToken", this.accessToken)
        localStorage.setItem("wso2_refreshToken", this.refreshToken)
        localStorage.setItem("wso2_tokenExpiry", this.tokenExpiry.toString())
      }
    } catch (error) {
      console.error("Error refreshing token:", error)
      throw error
    }
  }

  /**
   * Set credentials from Identity Server auth service
   */
  setCredentialsFromIdentityAuth(
    clientId: string,
    clientSecret: string,
    accessToken: string,
    refreshToken: string,
    tokenExpiry: number,
    username: string,
  ): void {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.accessToken = accessToken
    this.refreshToken = refreshToken
    this.tokenExpiry = tokenExpiry
    this.username = username

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("wso2_clientId", this.clientId)
      localStorage.setItem("wso2_clientSecret", this.clientSecret)
      localStorage.setItem("wso2_accessToken", this.accessToken)
      localStorage.setItem("wso2_refreshToken", this.refreshToken)
      localStorage.setItem("wso2_tokenExpiry", this.tokenExpiry.toString())
      localStorage.setItem("wso2_username", this.username)
      localStorage.setItem("wso2_baseUrl", this.baseUrl)
    }

    // Dispatch event to notify components that auth status has changed
    if (typeof document !== "undefined") {
      document.dispatchEvent(new Event("wso2AuthStatusChanged"))
    }
  }

  /**
   * Clear credentials
   */
  clearCredentials(): void {
    this.clientId = ""
    this.clientSecret = ""
    this.accessToken = ""
    this.refreshToken = ""
    this.tokenExpiry = 0
    this.username = ""

    // Clear from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("wso2_clientId")
      localStorage.removeItem("wso2_clientSecret")
      localStorage.removeItem("wso2_accessToken")
      localStorage.removeItem("wso2_refreshToken")
      localStorage.removeItem("wso2_tokenExpiry")
      localStorage.removeItem("wso2_username")
      localStorage.removeItem("wso2_publicMode")
    }

    // Dispatch event to notify components that auth status has changed
    if (typeof document !== "undefined") {
      document.dispatchEvent(new Event("wso2AuthStatusChanged"))
    }
  }
}
