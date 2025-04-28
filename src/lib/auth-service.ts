import { User, UserManager, WebStorageStateStore } from "oidc-client-ts";
import { WSO2_AUTH_CONFIG } from "@/lib/wso2/auth-config";
import { WSO2ApiManagerService } from "./wso2/api-manager-service";
import { WSO2DevPortalService } from "./wso2/api-service";

/**
 * Authentication Service for WSO2 Identity Server using oidc-client-ts
 * with integration to WSO2 API Manager
 */
export class AuthService {
  private userManager: UserManager;
  private apiManagerService: WSO2ApiManagerService | null = null;
  private devPortalService: WSO2DevPortalService | null = null;
  
  // API Manager credentials - could be moved to config
  private apiManagerClientId = 'HyoXELEpE6MIspK9nm_gRfDzR4Ea';
  private apiManagerClientSecret = 'vZT7AR0qzpGi7Mwo5KqhDnMS96wa';

  constructor() {
    this.userManager = new UserManager({
      client_id: WSO2_AUTH_CONFIG.clientId,
      redirect_uri: WSO2_AUTH_CONFIG.redirectUri,
      post_logout_redirect_uri: WSO2_AUTH_CONFIG.postLogoutRedirectUri,
      response_type: WSO2_AUTH_CONFIG.responseType,
      scope: WSO2_AUTH_CONFIG.scope,
      userStore:
        typeof window !== "undefined"
          ? new WebStorageStateStore({ store: window.localStorage })
          : undefined,
      automaticSilentRenew: true,
      authority: WSO2_AUTH_CONFIG.authority,
      metadataUrl: `${WSO2_AUTH_CONFIG.authority}/oauth2/token/.well-known/openid-configuration`,
      loadUserInfo: true,
    });
    
    // Initialize API Manager and DevPortal services if we're in a browser environment
    if (typeof window !== "undefined") {
      const apiManagerBaseUrl = "https://localhost:9443"; // Consider moving to config
      this.apiManagerService = new WSO2ApiManagerService(
        apiManagerBaseUrl,
        this.apiManagerClientId,
        this.apiManagerClientSecret
      );
      this.devPortalService = new WSO2DevPortalService(apiManagerBaseUrl, this.apiManagerService);
    }
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(`${WSO2_AUTH_CONFIG.authority}/oauth2/authorize`, {
        method: "HEAD",
        mode: "no-cors",
      });
      return true;
    } catch (error) {
      console.error("WSO2 server check failed:", error);
      return false;
    }
  }

  async login(redirectPath?: string): Promise<void> {
    try {
      if (redirectPath) {
        localStorage.setItem("wso2_identity_redirectAfterLogin", redirectPath);
      }
      await this.userManager.signinRedirect();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async handleCallback(): Promise<User | null> {
    try {
      const user = await this.userManager.signinRedirectCallback();
      
      // After successful Identity Server login, initialize API Manager connection
      try {
        await this.initializeApiManagerConnection();
        console.log("Successfully connected to WSO2 API Manager");
      } catch (apiError) {
        console.error("Failed to connect to API Manager:", apiError);
        // Continue even if API Manager connection fails
        // You might want to show a warning to the user
      }
      
      return user;
    } catch (error) {
      console.error("Callback error:", error);
      throw error;
    }
  }  
  
  async logout(): Promise<void> {
    if (typeof window === "undefined") return;

    try {
      const user = await this.getUser();
      await this.userManager.removeUser();

      // Clear API Manager credentials
      if (this.apiManagerService) {
        this.apiManagerService.clearCredentials();
      }

      if (user && user.id_token) {
        const logoutUrl = new URL(`${WSO2_AUTH_CONFIG.authority}/oidc/logout`);
        logoutUrl.searchParams.append("id_token_hint", user.id_token);
        logoutUrl.searchParams.append("post_logout_redirect_uri", WSO2_AUTH_CONFIG.postLogoutRedirectUri);
        window.location.href = logoutUrl.toString();
      } else {
        window.location.href = WSO2_AUTH_CONFIG.postLogoutRedirectUri || "/";
      }
    } catch (error) {
      console.error("Logout error:", error);
      window.location.href = WSO2_AUTH_CONFIG.postLogoutRedirectUri || "/";
    }
  }

  async getUser(): Promise<User | null> {
    try {
      return await this.userManager.getUser();
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  async isAuthenticated(): Promise<boolean> {
    const user = await this.getUser();
    return !!user && !user.expired;
  }

  /**
   * Fetch user info from the userinfo endpoint
   * @returns User profile or null
   */
  async fetchUserInfo(): Promise<any> {
    const user = await this.getUser();
    if (!user || !user.access_token) return null;

    try {
      const response = await fetch(`${WSO2_AUTH_CONFIG.authority}/oauth2/userinfo`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Userinfo request failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching userinfo:", error);
      return null;
    }
  }

  /**
   * Get the username from user profile or userinfo endpoint
   * @returns Username or empty string
   */
  async getUsername(): Promise<string> {
    // First, try fetching from userinfo endpoint
    const userInfo = await this.fetchUserInfo();
    if (userInfo) {
      console.log("Userinfo response:", userInfo); // Debug: Log available claims
      // Prioritize username, email, or preferred_username
      return (
        userInfo.username || // WSO2-specific claim
        userInfo.preferred_username ||
        userInfo.email ||
        userInfo.name ||
        userInfo.sub ||
        ""
      );
    }

    // Fallback to user.profile if userinfo fails
    const user = await this.getUser();
    if (!user || !user.profile) return "";
    console.log("User profile:", user.profile); // Debug: Log available claims
    return (
      user.profile.preferred_username ||
      user.profile.email ||
      user.profile.name ||
      user.profile.sub ||
      ""
    );
  }

  async getUserInfo(): Promise<any> {
    const userInfo = await this.fetchUserInfo();
    return userInfo || (await this.getUser())?.profile || null;
  }

  async getAccessToken(): Promise<string | null> {
    const user = await this.getUser();
    return user?.access_token || null;
  }

  /**
   * Initialize connection to API Manager using client credentials
   * This doesn't require admin username/password anymore since we're using
   * pre-registered client credentials
   */
  async initializeApiManagerConnection() {
    if (!this.apiManagerService) {
      throw new Error("API Manager service not initialized");
    }
    
    try {
      // Get an access token using client credentials
      const accessToken = await this.apiManagerService.getAccessToken();
      
      // Notify components that WSO2 API Manager authentication is available
      if (typeof document !== "undefined") {
        document.dispatchEvent(new Event("wso2ApiManagerReady"));
      }
      
      return true;
    } catch (error) {
      console.error("Failed to initialize API Manager connection:", error);
      throw error;
    }
  }
  
  /**
   * Get the API Manager service
   * @returns WSO2ApiManagerService instance
   */
  getApiManagerService(): WSO2ApiManagerService | null {
    return this.apiManagerService;
  }
  
  /**
   * Get the DevPortal service
   * @returns WSO2DevPortalService instance
   */
  getDevPortalService(): WSO2DevPortalService | null {
    return this.devPortalService;
  }
}
