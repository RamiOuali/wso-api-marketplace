export class WSO2ApiManagerService {
  private baseUrl: string
  private clientId: string
  private clientSecret: string
  private accessToken: string | null = null
  private tokenExpiry = 0

  constructor(
    baseUrl: string,
    clientId = "HyoXELEpE6MIspK9nm_gRfDzR4Ea",
    clientSecret = "vZT7AR0qzpGi7Mwo5KqhDnMS96wa",
  ) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl
    this.clientId = clientId
    this.clientSecret = clientSecret

    // Try to load access token from localStorage if available
    if (typeof window !== "undefined") {
      this.accessToken = localStorage.getItem("wso2_apim_accessToken")
      const expiryStr = localStorage.getItem("wso2_apim_tokenExpiry")
      this.tokenExpiry = expiryStr ? Number.parseInt(expiryStr, 10) : 0
    }
  }

  /**
   * Get access token for API Manager using client credentials
   * @returns Promise with access token
   */
  async getAccessToken(): Promise<string> {
    // If we have a valid token, return it
    if (this.accessToken && Date.now() < this.tokenExpiry - 60000) {
      return this.accessToken
    }

    try {
      const params = new URLSearchParams()
      params.append("grant_type", "client_credentials")
      params.append(
        "scope",
        "openid apim:subscribe apim:api_key apim:app_manage apim:sub_manage apim:store_settings apim:sub_alert_manage apim:app_import_export apim:admin",
      )

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
      this.tokenExpiry = Date.now() + data.expires_in * 1000

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("wso2_apim_accessToken", this.accessToken)
        localStorage.setItem("wso2_apim_tokenExpiry", this.tokenExpiry.toString())
      }

      return this.accessToken
    } catch (error) {
      console.error("Error getting access token:", error)
      throw error
    }
  }

  /**
   * Get client ID
   */
  getClientId(): string {
    return this.clientId
  }

  /**
   * Get client secret
   */
  getClientSecret(): string {
    return this.clientSecret
  }

  /**
   * Check if we have valid credentials
   */
  hasValidCredentials(): boolean {
    return !!(this.clientId && this.clientSecret)
  }

  /**
   * Clear credentials
   */
  clearCredentials(): void {
    this.accessToken = null
    this.tokenExpiry = 0

    // Clear from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("wso2_apim_accessToken")
      localStorage.removeItem("wso2_apim_tokenExpiry")
    }
  }
}