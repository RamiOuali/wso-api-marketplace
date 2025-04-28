
/**
 * WSO2 Application Management Types
 * Based on the WSO2 API Manager DevPortal v3 API specification
 */

// Application List response
export interface ApplicationList {
  count: number
  list: Application[]
  pagination: Pagination
}

// Application object
export interface Application {
  applicationId?: string
  name: string
  throttlingPolicy: string
  description?: string
  tokenType?: string
  status?: string
  groups?: string[]
  subscriptionCount?: number
  attributes?: Record<string, string>
  owner?: string
  createdTime?: string
}

// Application Info (used in import/export)
export interface ApplicationInfo {
  applicationId: string
  name: string
  owner: string
  status: string
}

// Application Key Generation Request
export interface ApplicationKeyGenerateRequest {
  keyType: 'PRODUCTION' | 'SANDBOX'
  keyManager?: string
  grantTypesToBeSupported: string[]
  callbackUrl?: string
  scopes?: string[]
  validityTime?: number
  clientId?: string
  clientSecret?: string
  additionalProperties?: Record<string, string>
}

// Application Key Mapping Request
export interface ApplicationKeyMappingRequest {
  keyType: 'PRODUCTION' | 'SANDBOX'
  keyManager?: string
  consumerKey: string
  consumerSecret: string
  supportedGrantTypes?: string[]
  callbackUrl?: string
  keyManagerMeta?: Record<string, string>
}

// Application Key
export interface ApplicationKey {
  keyMappingId?: string
  keyType: 'PRODUCTION' | 'SANDBOX'
  keyManager?: string
  consumerKey?: string
  consumerSecret?: string
  supportedGrantTypes?: string[]
  callbackUrl?: string
  keyState?: string
  keyManagerMeta?: Record<string, string>
  additionalProperties?: Record<string, string>
}

// Application Key List
export interface ApplicationKeyList {
  count: number
  list: ApplicationKey[]
  pagination: Pagination
}

// Application Key Regenerate Response
export interface ApplicationKeyReGenerateResponse {
  consumerSecret: string
}

// Application Token Generate Request
export interface ApplicationTokenGenerateRequest {
  consumerSecret?: string
  validityPeriod?: number
  scopes?: string[]
  revokeToken?: string
  grantType?: string
  additionalProperties?: Record<string, string>
}

// Application Token
export interface ApplicationToken {
  accessToken?: string
  tokenScopes?: string[]
  validityTime?: number
}

// API Key Generate Request
export interface APIKeyGenerateRequest {
  validityPeriod?: number
  additionalProperties?: Record<string, string>
}

// API Key
export interface APIKey {
  apikey?: string
  validityTime?: number
  additionalProperties?: Record<string, string>
}

// API Key Revoke Request
export interface APIKeyRevokeRequest {
  apikey: string
}

// Workflow Response
export interface WorkflowResponse {
  workflowStatus: string
  jsonPayload?: string
}

// Pagination
export interface Pagination {
  offset?: number
  limit?: number
  total?: number
  next?: string
  previous?: string
}
