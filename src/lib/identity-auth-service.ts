/**
 * WSO2 Identity Server Authentication Service
 * Handles authentication with WSO2 Identity Server using OAuth2/OpenID Connect
 */
export class WSO2IdentityAuthService {
  private baseUrl: string;
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;
  private accessToken: string | null = null;
  private idToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenExpiry = 0;
  private userInfo: any = null;
  private scope = "openid profile";
  private state = "";

  constructor(baseUrl: string, clientId: string, clientSecret: string, redirectUri: string) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
  }

  /**
   * Initialize the authentication service with stored tokens if available
   * @returns True if valid tokens were found and loaded
   */
  initFromStorage(): boolean {
    try {
      const accessToken = localStorage.getItem("wso2_identity_accessToken");
      const idToken = localStorage.getItem("wso2_identity_idToken");
      const refreshToken = localStorage.getItem("wso2_identity_refreshToken");
      const tokenExpiry = localStorage.getItem("wso2_identity_tokenExpiry");
      const userInfoStr = localStorage.getItem("wso2_identity_userInfo");

      if (accessToken && idToken && refreshToken && tokenExpiry) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.refreshToken = refreshToken;
        this.tokenExpiry = Number.parseInt(tokenExpiry, 10);

        if (userInfoStr) {
          try {
            this.userInfo = JSON.parse(userInfoStr);
          } catch (e) {
            console.error("Failed to parse stored user info:", e);
          }
        }

        return this.isAuthenticated();
      }
      return false;
    } catch (error) {
      console.error("Error initializing from storage:", error);
      return false;
    }
  }

  /**
   * Start the OAuth2 authorization code flow
   * Redirects the user to the WSO2 Identity Server login page
   */
  login(): void {
    // Generate a random state parameter to prevent CSRF
    this.state = this.generateRandomString(32);

    // Store the state in localStorage to verify when the user returns
    localStorage.setItem("wso2_identity_state", this.state);

    // Build the authorization URL
    const authUrl = new URL(`${this.baseUrl}/oauth2/authorize`);
    authUrl.searchParams.append("client_id", this.clientId);
    authUrl.searchParams.append("redirect_uri", this.redirectUri);
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append("scope", this.scope);
    authUrl.searchParams.append("state", this.state);

    // Redirect the user to the authorization URL
    window.location.href = authUrl.toString();
  }

  /**
   * Handle the OAuth2 callback
   * @param code The authorization code from the callback
   * @param state The state parameter from the callback
   * @returns Promise resolving to true if authentication was successful
   */
  async handleCallback(code: string, state: string): Promise<boolean> {
    // Verify the state parameter to prevent CSRF attacks
    const storedState = localStorage.getItem("wso2_identity_state");
    if (!storedState || storedState !== state) {
      throw new Error("Invalid state parameter");
    }

    // Clear the stored state
    localStorage.removeItem("wso2_identity_state");

    try {
      // Exchange the authorization code for tokens
      const tokenResponse = await this.exchangeCodeForTokens(code);

      // Store the tokens
      this.accessToken = tokenResponse.access_token;
      this.idToken = tokenResponse.id_token;
      this.refreshToken = tokenResponse.refresh_token;
      this.tokenExpiry = Date.now() + tokenResponse.expires_in * 1000;

      // Store tokens in localStorage
      localStorage.setItem("wso2_identity_accessToken", this.accessToken);
      localStorage.setItem("wso2_identity_idToken", this.idToken);
      localStorage.setItem("wso2_identity_refreshToken", this.refreshToken);
      localStorage.setItem("wso2_identity_tokenExpiry", this.tokenExpiry.toString());

      // Fetch user info
      await this.fetchUserInfo();

      return true;
    } catch (error) {
      console.error("Error handling callback:", error);
      throw error;
    }
  }

  /**
   * Exchange the authorization code for tokens
   * @param code The authorization code
   * @returns Promise resolving to the token response
   */
  private async exchangeCodeForTokens(code: string): Promise<any> {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", this.redirectUri);
    params.append("client_id", this.clientId);
    params.append("client_secret", this.clientSecret);

    try {
      const response = await fetch(`${this.baseUrl}/oauth2/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Token exchange failed: ${response.status} - ${errorData.error_description || response.statusText}`,
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Token exchange error:", error);
      throw error;
    }
  }

  /**
   * Fetch user information using the access token
   */
  async fetchUserInfo(): Promise<any> {
    if (!this.accessToken) {
      throw new Error("No access token available");
    }

    try {
      const response = await fetch(`${this.baseUrl}/oauth2/userinfo`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user info: ${response.status} ${response.statusText}`);
      }

      this.userInfo = await response.json();

      // Store user info in localStorage
      localStorage.setItem("wso2_identity_userInfo", JSON.stringify(this.userInfo));
      localStorage.setItem("wso2_identity_username", this.getUsername());

      return this.userInfo;
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  }

  /**
   * Refresh the access token using refresh token
   * @returns Promise with new access token
   */
  async refreshAccessToken(): Promise<string> {
    if (!this.clientId || !this.clientSecret || !this.refreshToken) {
      throw new Error("Client credentials and refresh token required");
    }

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", this.refreshToken);
    params.append("client_id", this.clientId);
    params.append("client_secret", this.clientSecret);

    try {
      const response = await fetch(`${this.baseUrl}/oauth2/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to refresh token: ${response.status} - ${errorData.error_description || response.statusText}`,
        );
      }

      const data = await response.json();
      this.accessToken = data.access_token;
      this.idToken = data.id_token || this.idToken;
      this.refreshToken = data.refresh_token || this.refreshToken;
      this.tokenExpiry = Date.now() + data.expires_in * 1000;

      // Update tokens in localStorage
      localStorage.setItem("wso2_identity_accessToken", this.accessToken);
      if (data.id_token) localStorage.setItem("wso2_identity_idToken", this.idToken!);
      if (data.refresh_token) localStorage.setItem("wso2_identity_refreshToken", this.refreshToken!);
      localStorage.setItem("wso2_identity_tokenExpiry", this.tokenExpiry.toString());

      return this.accessToken;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }

  /**
   * Get a valid access token, refreshing if necessary
   * @returns Promise with access token
   */
  async getValidAccessToken(): Promise<string | null> {
    if (!this.accessToken) {
      return null;
    }

    // If token is expired or about to expire in the next minute, refresh it
    if (Date.now() > this.tokenExpiry - 60000) {
      try {
        return await this.refreshAccessToken();
      } catch (error) {
        console.error("Error refreshing token:", error);
        return null;
      }
    }

    return this.accessToken;
  }

  /**
   * Check if user is authenticated
   * @returns Boolean indicating if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.accessToken && Date.now() < this.tokenExpiry;
  }

  /**
   * Get user information
   * @returns User information object
   */
  getUserInfo(): any {
    return this.userInfo;
  }

  /**
   * Get username from user info
   * @returns Username or display name
   */
  getUsername(): string {
    if (!this.userInfo) return "";
    return this.userInfo.preferred_username || this.userInfo.sub || "";
  }

  /**
   * Logout the user
   * Clears local tokens and redirects to the WSO2 logout endpoint
   * @param redirectAfterLogout URL to redirect to after logout
   */
  logout(redirectAfterLogout?: string): void {
    // Clear tokens from memory
    this.accessToken = null;
    this.idToken = null;
    this.refreshToken = null;
    this.tokenExpiry = 0;
    this.userInfo = null;

    // Clear tokens from localStorage
    localStorage.removeItem("wso2_identity_accessToken");
    localStorage.removeItem("wso2_identity_idToken");
    localStorage.removeItem("wso2_identity_refreshToken");
    localStorage.removeItem("wso2_identity_tokenExpiry");
    localStorage.removeItem("wso2_identity_userInfo");
    localStorage.removeItem("wso2_identity_username");

    // If we have an ID token, use the OIDC logout endpoint
    if (this.idToken) {
      const logoutUrl = new URL(`${this.baseUrl}/oidc/logout`);
      logoutUrl.searchParams.append("id_token_hint", this.idToken);

      if (redirectAfterLogout) {
        logoutUrl.searchParams.append("post_logout_redirect_uri", redirectAfterLogout);
      }

      window.location.href = logoutUrl.toString();
    } else if (redirectAfterLogout) {
      // If no ID token but we have a redirect URL, just redirect
      window.location.href = redirectAfterLogout;
    }
  }

  /**
   * Generate a random string for state parameter
   * @param length Length of the random string
   * @returns Random string
   */
  private generateRandomString(length: number): string {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const values = new Uint8Array(length);
    window.crypto.getRandomValues(values);
    for (let i = 0; i < length; i++) {
      result += charset[values[i] % charset.length];
    }
    return result;
  }

  /**
   * Static method to check if there's a valid authentication in localStorage
   * @returns Boolean indicating if there's a valid authentication
   */
  static checkAuthentication(): boolean {
    try {
      const accessToken = localStorage.getItem("wso2_identity_accessToken");
      const tokenExpiry = localStorage.getItem("wso2_identity_tokenExpiry");

      if (!accessToken || !tokenExpiry) {
        return false;
      }

      // Check if token is expired
      const expiryTime = Number.parseInt(tokenExpiry, 10);
      if (Date.now() > expiryTime) {
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error checking authentication:", error);
      return false;
    }
  }
}
