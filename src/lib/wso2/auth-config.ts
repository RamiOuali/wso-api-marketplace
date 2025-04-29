// WSO2 Identity Server 7 specific configuration
export const WSO2_AUTH_CONFIG = {
  // IS7 specific endpoints
  apiManagerUrl: "https://localhost:9443", // API Manager URL
  authority: "https://localhost:9444", // Identity Server 7 URL
  clientId: "zRIqsAoN_z1hekewdbuB52Ptx9Ea", // Update with your registered client ID
  redirectUri: "http://localhost:3000/auth/callback",
  postLogoutRedirectUri: "http://localhost:3000/auth/logout-callback",
  // IS7 has improved scope handling - include both identity and API Manager scopes
  scope: "openid profile email roles internal_login apim:api_view apim:api_key apim:subscribe apim:app_manage",
  responseType: "code",
};
