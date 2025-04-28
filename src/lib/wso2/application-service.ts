import type { WSO2AuthService } from "./auth-service"

/**
 * WSO2 Application Service
 * Handles application management for API subscriptions
 */
export class WSO2ApplicationService {
  private baseUrl: string
  private authService: WSO2AuthService

  constructor(baseUrl: string, authService: WSO2AuthService) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl
    this.authService = authService
  }

  /**
   * Get all applications
   * @returns Promise with applications list
   */
  async getApplications(): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/applications`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to get applications: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error getting applications:", error)
      throw error
    }
  }

  /**
   * Create a new application
   * @param name - Application name
   * @param throttlingPolicy - Throttling policy
   * @param description - Application description
   * @returns Promise with created application
   */
  async createApplication(name: string, throttlingPolicy: string, description?: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const payload = {
        name,
        throttlingPolicy,
        description: description || `Application for ${name}`,
        tokenType: "JWT",
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/applications`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Failed to create application: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error creating application:", error)
      throw error
    }
  }

  /**
   * Get application by ID
   * @param applicationId - Application ID
   * @returns Promise with application details
   */
  async getApplicationById(applicationId: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to get application: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error getting application:", error)
      throw error
    }
  }

  /**
   * Delete application
   * @param applicationId - Application ID
   * @returns Promise with success status
   */
  async deleteApplication(applicationId: string): Promise<boolean> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to delete application: ${response.statusText}`)
      }

      return true
    } catch (error) {
      console.error("Error deleting application:", error)
      throw error
    }
  }

  /**
   * Get application keys
   * @param applicationId - Application ID
   * @param keyType - Key type (PRODUCTION or SANDBOX)
   * @returns Promise with application keys
   */
  async getApplicationKeys(applicationId: string, keyType: "PRODUCTION" | "SANDBOX"): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/keys/${keyType}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to get application keys: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error getting application keys:", error)
      throw error
    }
  }

  /**
   * Generate application keys
   * @param applicationId - Application ID
   * @param keyType - Key type (PRODUCTION or SANDBOX)
   * @returns Promise with generated keys
   */
  async generateApplicationKeys(applicationId: string, keyType: "PRODUCTION" | "SANDBOX"): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const payload = {
        keyType,
        grantTypesToBeSupported: ["client_credentials", "password", "refresh_token"],
        callbackUrl: "http://localhost",
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/generate-keys`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Failed to generate application keys: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error generating application keys:", error)
      throw error
    }
  }

  /**
   * Generate API Key
   * @param applicationId - Application ID
   * @param keyType - Key type (PRODUCTION or SANDBOX)
   * @param options - API Key generation options
   * @returns Promise with generated API Key
   */
  async generateApiKey(
    applicationId: string,
    keyType: "PRODUCTION" | "SANDBOX",
    options?: { validityPeriod?: number },
  ): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const payload = {
        validityPeriod: options?.validityPeriod || 3600,
        additionalProperties: {},
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/api-keys/${keyType}/generate`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to generate API key: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error generating API key:", error)
      throw error
    }
  }

  /**
   * Revoke API Key
   * @param applicationId - Application ID
   * @param keyType - Key type (PRODUCTION or SANDBOX)
   * @param apiKey - API Key to revoke
   * @returns Promise with success status
   */
  async revokeApiKey(applicationId: string, keyType: "PRODUCTION" | "SANDBOX", apiKey: string): Promise<boolean> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const payload = {
        apikey: apiKey,
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/api-keys/${keyType}/revoke`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to revoke API key: ${response.statusText}`)
      }

      return true
    } catch (error) {
      console.error("Error revoking API key:", error)
      throw error
    }
  }


 

  

  async getApplication(applicationId: string): Promise<Application> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to get application: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error getting application:", error)
      throw error
    }
  }



  async updateApplication(applicationId: string, application: Partial<Application>): Promise<Application> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(application),
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to update application: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error updating application:", error)
      throw error
    }
  }

  async getApplicationSubscriptions(applicationId: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/subscriptions?applicationId=${applicationId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to get subscriptions: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error getting subscriptions:", error)
      throw error
    }
  }

  async deleteSubscription(subscriptionId: string): Promise<boolean> {
    try {
      const token = await this.authService.getValidAccessToken()
      if (!token) {
        throw new Error("No valid access token available")
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/subscriptions/${subscriptionId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to delete subscription: ${response.statusText}`)
      }

      return true
    } catch (error) {
      console.error("Error deleting subscription:", error)
      throw error
    }
  }
}



export interface Application {
  applicationId: string
  name: string
  throttlingPolicy: string
  description?: string
  status: string
  groups?: string[]
  subscriptionCount?: number
  attributes?: Record<string, string>
}


