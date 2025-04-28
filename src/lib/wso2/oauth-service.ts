import { WSO2AuthService } from "./auth-service";

/**
 * WSO2 OAuth Service
 * Handles OAuth key generation and token management
 */
export class WSO2OAuthService {
  private baseUrl: string;
  private authService: WSO2AuthService;

  constructor(baseUrl: string, authService: WSO2AuthService) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    this.authService = authService;
  }

  /**
   * Get OAuth keys for an application
   * @param applicationId - Application ID
   * @returns Promise with OAuth keys
   */
  async getOAuthKeys(applicationId: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to get OAuth keys: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error getting OAuth keys:", error);
      throw error;
    }
  }

  /**
   * Generate OAuth keys for an application
   * @param applicationId - Application ID
   * @returns Promise with generated OAuth keys
   */
  async generateOAuthKeys(applicationId: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      // First, create key mapping
      const keyMappingPayload = {
        keyType: "PRODUCTION",
        keyManager: "Resident Key Manager",
        grantTypesToBeSupported: [
          "password",
          "client_credentials",
          "authorization_code",
          "refresh_token"
        ],
        callbackUrl: ["http://localhost:3000/callback"],
        additionalProperties: {},
        keySecurityType: "DIRECT",
        mode: "CREATED"
      };

      const mappingResponse = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(keyMappingPayload),
        }
      );

      if (!mappingResponse.ok) {
        throw new Error(`Failed to create OAuth key mapping: ${mappingResponse.statusText}`);
      }

      const mapping = await mappingResponse.json();

      // Then, generate keys using the mapping
      const generatePayload = {
        keyType: "PRODUCTION",
        grantTypesToBeSupported: [
          "password",
          "client_credentials",
          "authorization_code",
          "refresh_token"
        ],
        callbackUrl: ["http://localhost:3000/callback"],
        additionalProperties: {},
        keyManager: "Resident Key Manager",
        validityTime: 3600,
        scopes: ["default"]
      };

      const generateResponse = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys/${mapping.keyMappingId}/generate-token`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(generatePayload),
        }
      );

      if (!generateResponse.ok) {
        throw new Error(`Failed to generate OAuth token: ${generateResponse.statusText}`);
      }

      return await generateResponse.json();
    } catch (error) {
      console.error("Error generating OAuth keys:", error);
      throw error;
    }
  }

  /**
   * Regenerate OAuth token
   * @param applicationId - Application ID
   * @param keyMappingId - Key mapping ID
   * @returns Promise with regenerated OAuth token
   */
  async regenerateOAuthToken(applicationId: string, keyMappingId: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      const payload = {
        validityTime: 3600,
        scopes: ["default"],
        revokeToken: false
      };

      const response = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys/${keyMappingId}/generate-token`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to regenerate OAuth token: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error regenerating OAuth token:", error);
      throw error;
    }
  }
}