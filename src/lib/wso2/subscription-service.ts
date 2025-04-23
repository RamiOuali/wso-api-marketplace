import { WSO2AuthService } from "./auth-service";

/**
 * WSO2 Subscription Service
 * Handles API subscriptions
 */
export class WSO2SubscriptionService {
  private baseUrl: string;
  private authService: WSO2AuthService;

  constructor(baseUrl: string, authService: WSO2AuthService) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    this.authService = authService;
  }

  /**
   * Get all subscriptions
   * @param applicationId - Optional application ID to filter subscriptions
   * @param apiId - Optional API ID to filter subscriptions
   * @returns Promise with subscriptions list
   */
  async getSubscriptions(applicationId?: string, apiId?: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      let url = `${this.baseUrl}/api/am/devportal/v3/subscriptions`;
      const queryParams = [];
      
      if (applicationId) {
        queryParams.push(`applicationId=${applicationId}`);
      }
      
      if (apiId) {
        queryParams.push(`apiId=${apiId}`);
      }
      
      if (queryParams.length > 0) {
        url += `?${queryParams.join("&")}`;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get subscriptions: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error getting subscriptions:", error);
      throw error;
    }
  }

  /**
   * Subscribe to an API
   * @param apiId - API ID
   * @param applicationId - Application ID
   * @param throttlingPolicy - Throttling policy
   * @returns Promise with subscription details
   */
  async subscribeToApi(apiId: string, applicationId: string, throttlingPolicy: string): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      const payload = {
        apiId,
        applicationId,
        throttlingPolicy,
      };

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/subscriptions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to subscribe to API: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error subscribing to API:", error);
      throw error;
    }
  }

  /**
   * Unsubscribe from an API
   * @param subscriptionId - Subscription ID
   * @returns Promise with success status
   */
  async unsubscribeFromApi(subscriptionId: string): Promise<boolean> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/subscriptions/${subscriptionId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to unsubscribe from API: ${response.statusText}`);
      }

      return true;
    } catch (error) {
      console.error("Error unsubscribing from API:", error);
      throw error;
    }
  }

  /**
   * Get subscription throttling policies
   * @returns Promise with throttling policies
   */
  async getSubscriptionThrottlingPolicies(): Promise<any> {
    try {
      const token = await this.authService.getValidAccessToken();
      if (!token) {
        throw new Error("No valid access token available");
      }

      const response = await fetch(`${this.baseUrl}/api/am/devportal/v3/throttling-policies/subscription`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get throttling policies: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error getting throttling policies:", error);
      throw error;
    }
  }
}
