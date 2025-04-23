import type { WSO2AuthService } from "./auth-service"
import type { APIListResponse, API } from "./types"

/**
 * WSO2 API Manager DevPortal API Service
 * Service for interacting with the WSO2 API Manager DevPortal API
 */
export class WSO2DevPortalService {
  private baseUrl: string
  private authService: WSO2AuthService | null = null

  /**
   * Constructor for WSO2DevPortalService
   * @param baseUrl - Base URL of the WSO2 API Manager (e.g., https://localhost:9443)
   * @param authService - Optional authentication service
   */
  constructor(baseUrl: string, authService?: WSO2AuthService) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl
    this.authService = authService || null
  }

  /**
   * Set authentication service
   * @param authService - Authentication service
   */
  setAuthService(authService: WSO2AuthService): void {
    this.authService = authService
  }

  /**
   * Get all APIs
   * @param limit - Maximum number of APIs to return
   * @param offset - Starting point within the complete list of items
   * @param query - Search query
   * @returns Promise with API list response
   */
  async getApis(limit = 25, offset = 0, query?: string): Promise<APIListResponse> {
    try {
      let url = `${this.baseUrl}/api/am/devportal/v3/apis?limit=${limit}&offset=${offset}`
      if (query) {
        url += `&query=${encodeURIComponent(query)}`
      }

      const headers: Record<string, string> = {
        Accept: "application/json",
      }

      // Add authorization header if we have an auth service and it's authenticated
      if (this.authService && this.authService.isAuthenticated()) {
        const token = await this.authService.getValidAccessToken()
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }
      }

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        })

        if (!response.ok) {
          throw new Error(`Failed to get APIs: ${response.status} ${response.statusText}`)
        }

        return (await response.json()) as APIListResponse
      } catch (fetchError) {
        if (fetchError instanceof TypeError && fetchError.message.includes("NetworkError")) {
          throw new Error(
            "Network error: Unable to connect to the WSO2 API Manager. This may be due to CORS restrictions or the server being unavailable.",
          )
        }
        throw fetchError
      }
    } catch (error) {
      console.error("Error getting APIs:", error)
      throw error
    }
  }

  /**
   * Get API details by ID
   * @param apiId - API ID
   * @returns Promise with API details
   */
  async getApiById(apiId: string): Promise<API> {
    try {
      const headers: Record<string, string> = {
        Accept: "application/json",
      }

      // Add authorization header if we have an auth service and it's authenticated
      if (this.authService && this.authService.isAuthenticated()) {
        const token = await this.authService.getValidAccessToken()
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/apis/${apiId}`, {
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        throw new Error(`Failed to get API details: ${response.statusText}`)
      }

      return (await response.json()) as API
    } catch (error) {
      console.error("Error getting API details:", error)
      throw error
    }
  }

  /**
   * Get API swagger definition
   * @param apiId - API ID
   * @returns Promise with swagger definition as string
   */
  async getApiSwagger(apiId: string): Promise<any> {
    try {
      const headers: Record<string, string> = {
        Accept: "application/json",
      }

      // Add authorization header if we have an auth service and it's authenticated
      if (this.authService && this.authService.isAuthenticated()) {
        const token = await this.authService.getValidAccessToken()
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/apis/${apiId}/swagger`, {
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        throw new Error(`Failed to get API swagger: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error getting API swagger:", error)
      throw error
    }
  }

  /**
   * Get API thumbnail
   * @param apiId - API ID
   * @returns Promise with thumbnail as Blob
   */
  async getApiThumbnail(apiId: string): Promise<Blob> {
    try {
      const headers: Record<string, string> = {}

      // Add authorization header if we have an auth service and it's authenticated
      if (this.authService && this.authService.isAuthenticated()) {
        const token = await this.authService.getValidAccessToken()
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/apis/${apiId}/thumbnail`, {
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        throw new Error(`Failed to get API thumbnail: ${response.statusText}`)
      }

      return await response.blob()
    } catch (error) {
      console.error("Error getting API thumbnail:", error)
      throw error
    }
  }

  /**
   * Get API documents
   * @param apiId - API ID
   * @param limit - Maximum number of documents to return
   * @param offset - Starting point within the complete list of items
   * @returns Promise with document list
   */
  async getApiDocuments(apiId: string, limit = 25, offset = 0): Promise<any> {
    try {
      const headers: Record<string, string> = {
        Accept: "application/json",
      }

      // Add authorization header if we have an auth service and it's authenticated
      if (this.authService && this.authService.isAuthenticated()) {
        const token = await this.authService.getValidAccessToken()
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/apis/${apiId}/documents?limit=${limit}&offset=${offset}`,
        {
          method: "GET",
          headers: headers,
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to get API documents: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error getting API documents:", error)
      throw error
    }
  }

  /**
   * Get API document content
   * @param apiId - API ID
   * @param documentId - Document ID
   * @returns Promise with document content
   */
  async getApiDocumentContent(apiId: string, documentId: string): Promise<any> {
    try {
      const headers: Record<string, string> = {
        Accept: "application/json",
      }

      // Add authorization header if we have an auth service and it's authenticated
      if (this.authService && this.authService.isAuthenticated()) {
        const token = await this.authService.getValidAccessToken()
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/apis/${apiId}/documents/${documentId}/content`,
        {
          method: "GET",
          headers: headers,
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to get API document content: ${response.statusText}`)
      }

      return await response.text()
    } catch (error) {
      console.error("Error getting API document content:", error)
      throw error
    }
  }
}
