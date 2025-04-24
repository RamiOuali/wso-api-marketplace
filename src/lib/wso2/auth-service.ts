/**
 * WSO2 Authentication Service
 * Handles authentication with WSO2 API Manager
 */
export class WSO2AuthService {
  private baseUrl: string
  private clientId = ""
  private clientSecret = ""
  private accessToken: string | null = null
  private refreshToken: string | null = null
  private tokenExpiry = 0

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl
  }

  /**
   * Register a dynamic client with WSO2 API Manager
   * @param username - Username for registration
   * @param password - Password for registration
   * @returns Promise with client credentials
   */
  async registerClient(username: string, password: string): Promise<{ clientId: string; clientSecret: string }> {
    try {
      const payload = {
        callbackUrl: "http://localhost",
        clientName: `api_marketplace_${Date.now()}`,
        owner: username,
        grantType: "password refresh_token",
        saasApp: true,
      }

      try {
        const response = await fetch(`${this.baseUrl}/client-registration/v0.17/register`, {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`Failed to register client: ${response.status} ${response.statusText} - ${errorText}`)
        }

        const data = await response.json()
        this.clientId = data.clientId
        this.clientSecret = data.clientSecret

        return {
          clientId: this.clientId,
          clientSecret: this.clientSecret,
        }
      } catch (fetchError) {
        if (fetchError instanceof TypeError && fetchError.message.includes("NetworkError")) {
          throw new Error(
            "Network error: Unable to connect to the WSO2 API Manager. This may be due to CORS restrictions or the server being unavailable.",
          )
        }
        throw fetchError
      }
    } catch (error) {
      console.error("Error registering client:", error)
      throw error
    }
  }

  /**
   * Get access token using password grant
   * @param username - Username for authentication
   * @param password - Password for authentication
   * @returns Promise with access token
   */
  async getAccessTokenWithPasswordGrant(username: string, password: string): Promise<string> {
    try {
      if (!this.clientId || !this.clientSecret) {
        throw new Error("Client registration required before getting access token")
      }

      const params = new URLSearchParams()
      params.append("grant_type", "password")
      params.append("username", username)
      params.append("password", password)
      params.append("scope", "apim:subscribe apim:api_view apim:api_key")

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
        throw new Error(`Failed to get access token: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const data = await response.json()
      this.accessToken = data.access_token
      this.refreshToken = data.refresh_token
      this.tokenExpiry = Date.now() + data.expires_in * 1000

      return this.accessToken
    } catch (error) {
      console.error("Error getting access token:", error)
      throw error
    }
  }

  /**
   * Refresh the access token using refresh token
   * @returns Promise with new access token
   */
  async refreshAccessToken(): Promise<string> {
    try {
      if (!this.clientId || !this.clientSecret || !this.refreshToken) {
        throw new Error("Client registration and previous authentication required")
      }

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

      return this.accessToken
    } catch (error) {
      console.error("Error refreshing token:", error)
      throw error
    }
  }

  /**
   * Get a valid access token, refreshing if necessary
   * @returns Promise with access token
   */
  async getValidAccessToken(): Promise<string | null> {
    if (!this.accessToken) {
      return null
    }

    // If token is expired or about to expire in the next minute, refresh it
    if (Date.now() > this.tokenExpiry - 60000) {
      try {
        return await this.refreshAccessToken()
      } catch (error) {
        console.error("Error refreshing token:", error)
        return null
      }
    }

    return this.accessToken
  }

  /**
   * Check if user is authenticated
   * @returns Boolean indicating if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.accessToken && Date.now() < this.tokenExpiry
  }

  /**
   * Clear authentication data
   */
  logout(): void {
    this.accessToken = null
    this.refreshToken = null
    this.tokenExpiry = 0
  }

  /**
   * Check if the user is authenticated with WSO2
   * @returns Boolean indicating if the user is authenticated
   */
  static checkAuthentication(): boolean {
    try {
      const accessToken = localStorage.getItem("wso2_accessToken")
      const tokenExpiry = localStorage.getItem("wso2_tokenExpiry")

      if (!accessToken || !tokenExpiry) {
        return false
      }

      // Check if token is expired
      const expiryTime = Number.parseInt(tokenExpiry, 10)
      if (Date.now() > expiryTime) {
        return false
      }

      return true
    } catch (error) {
      console.error("Error checking authentication:", error)
      return false
    }
  }

  /**
   * Check if public mode is enabled
   * @returns Boolean indicating if public mode is enabled
   */
  static isPublicMode(): boolean {
    return localStorage.getItem("wso2_publicMode") === "true"
  }
}
