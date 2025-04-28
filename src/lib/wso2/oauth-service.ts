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
   * @param keyType - Key type (PRODUCTION or SANDBOX)
   * @returns Promise with generated OAuth keys and token
   */
  async generateOAuthKeys(applicationId: string, keyType: "PRODUCTION" | "SANDBOX" = "PRODUCTION"): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      // First check if keys already exist
      console.log('Checking for existing OAuth keys...');
      const existingKeysResponse = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );

      if (existingKeysResponse.ok) {
        const existingKeys = await existingKeysResponse.json();
        if (existingKeys.list && existingKeys.list.length > 0) {
          const existingKey = existingKeys.list.find((key: any) => key.keyType === keyType);
          if (existingKey) {
            // For DefaultApplication, we should always use existing keys
            if (existingKey.consumerKey && existingKey.consumerSecret) {
              console.log('Using existing OAuth keys for DefaultApplication...');
              // Generate new token using existing keys
              const generateTokenPayload = {
                consumerKey: existingKey.consumerKey,
                consumerSecret: existingKey.consumerSecret,
                validityPeriod: 3600,
                scopes: ["default"],
                grantType: "client_credentials"
              };

              const tokenResponse = await fetch(
                `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys/${existingKey.keyMappingId}/generate-token`,
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(generateTokenPayload),
                }
              );

              if (!tokenResponse.ok) {
                const errorText = await tokenResponse.text();
                throw new Error(
                  `Failed to generate token: ${tokenResponse.status} ${tokenResponse.statusText}\n` +
                  `Details: ${errorText}`
                );
              }

              const tokenResult = await tokenResponse.json();
              return {
                ...existingKey,
                token: tokenResult
              };
            }
          }
        }
      }

      // Only try to generate new keys if we couldn't find or use existing ones
      console.log('Generating new OAuth keys...');
      const generateKeysPayload = {
        keyType: keyType,
        keyManager: "Resident Key Manager",
        grantTypesToBeSupported: [
          "password",
          "client_credentials"
        ],
        callbackUrl: "http://sample.com/callback/url",
        scopes: [
          "am_application_scope",
          "default"
        ],
        validityTime: "3600",
        additionalProperties: {}
      };

      const keysResponse = await fetch(
        `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/generate-keys`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(generateKeysPayload),
        }
      );

      if (!keysResponse.ok) {
        const errorText = await keysResponse.text();
        let errorDetails;
        try {
          errorDetails = JSON.parse(errorText);
        } catch {
          errorDetails = errorText;
        }

        // If we get an error about the application already being registered,
        // we need to fetch the existing keys again and use those
        if (errorDetails?.description?.includes("Application 'DefaultApplication' is already registered") || 
            keysResponse.status === 409) {
          console.log('Application already registered, fetching existing keys...');
          const retryResponse = await fetch(
            `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              }
            }
          );

          if (retryResponse.ok) {
            const existingKeys = await retryResponse.json();
            if (existingKeys.list && existingKeys.list.length > 0) {
              const existingKey = existingKeys.list.find((key: any) => key.keyType === keyType);
              if (existingKey) {
                // Generate new token using existing keys
                const generateTokenPayload = {
                  consumerKey: existingKey.consumerKey,
                  consumerSecret: existingKey.consumerSecret,
                  validityPeriod: 3600,
                  scopes: ["default"],
                  grantType: "client_credentials"
                };

                const tokenResponse = await fetch(
                  `${this.baseUrl}/api/am/devportal/v3/applications/${applicationId}/oauth-keys/${existingKey.keyMappingId}/generate-token`,
                  {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(generateTokenPayload),
                  }
                );

                if (!tokenResponse.ok) {
                  throw new Error(`Failed to generate token: ${tokenResponse.statusText}`);
                }

                const tokenResult = await tokenResponse.json();
                return {
                  ...existingKey,
                  token: tokenResult
                };
              }
            }
          }
        }
        
        console.error('OAuth key generation failed:', {
          status: keysResponse.status,
          statusText: keysResponse.statusText,
          error: errorDetails
        });
        
        throw new Error(
          `Failed to generate OAuth keys: ${keysResponse.status} ${keysResponse.statusText}\n` +
          `Details: ${JSON.stringify(errorDetails, null, 2)}`
        );
      }

      const result = await keysResponse.json();
      return result;
      
    } catch (error) {
      console.error("Error in OAuth key generation process:", error);
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
        validityPeriod: 3600,
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