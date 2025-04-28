// Modify your auth-config.ts to specify endpoints directly
export const WSO2_AUTH_CONFIG = {
  // Don't rely on discovery
  apiManagerUrl: "https://localhost:9444",
  authority: "https://localhost:9444",
  clientId: "zRIqsAoN_z1hekewdbuB52Ptx9Ea",
  redirectUri: "http://localhost:3000/auth/callback",
  postLogoutRedirectUri: "http://localhost:3000/auth/logout-callback", // Use a dedicated logout callback
  scope: "openid address email groups phone profile roles",
  responseType: "code",

};
