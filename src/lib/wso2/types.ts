/**
 * WSO2 API Manager DevPortal API Types
 * Based on the WSO2 API Manager DevPortal v3 API specification
 */

// API List response
export interface APIListResponse {
  count: number
  list: APIInfo[]
  pagination: Pagination
}

// API Info object with basic API details
export interface APIInfo {
  id: string
  name: string
  description?: string
  context?: string
  version?: string
  type?: string
  createdTime?: string
  provider?: string
  lifeCycleStatus?: string
  thumbnailUri?: string
  avgRating?: string
  throttlingPolicies?: string[]
  advertiseInfo?: AdvertiseInfo
  businessInformation?: APIBusinessInformation
  isSubscriptionAvailable?: boolean
  monetizationLabel?: string
  gatewayVendor?: string
  additionalProperties?: AdditionalProperty[]
  monetizedInfo?: boolean
  egress?: boolean
  subtype?: string
}

// Detailed API object
export interface API extends APIInfo {
  apiDefinition?: string
  wsdlUri?: string
  isDefaultVersion?: boolean
  transport?: string[]
  operations?: APIOperation[]
  authorizationHeader?: string
  apiKeyHeader?: string
  securityScheme?: string[]
  tags?: string[]
  tiers?: Tier[]
  hasThumbnail?: boolean
  monetization?: APIMonetizationInfo
  endpointURLs?: EndpointURL[]
  environmentList?: string[]
  scopes?: ScopeInfo[]
  subscriptions?: number
  categories?: string[]
  keyManagers?: any
  lastUpdatedTime?: string
  asyncTransportProtocols?: string[]
}

// API Operation
export interface APIOperation {
  id?: string
  target?: string
  verb?: string
}

// API Business Information
export interface APIBusinessInformation {
  businessOwner?: string
  businessOwnerEmail?: string
  technicalOwner?: string
  technicalOwnerEmail?: string
}

// API Monetization Info
export interface APIMonetizationInfo {
  enabled: boolean
}

// Advertise Info
export interface AdvertiseInfo {
  advertised: boolean
  apiExternalProductionEndpoint?: string
  apiExternalSandboxEndpoint?: string
  originalDevPortalUrl?: string
  apiOwner?: string
  vendor?: string
}

// Additional Property
export interface AdditionalProperty {
  name: string
  value: string
  display?: boolean
}

// Tier
export interface Tier {
  tierName?: string
  tierPlan?: string
  monetizationAttributes?: MonetizationAttributes
}

// Monetization Attributes
export interface MonetizationAttributes {
  fixedPrice?: string
  pricePerRequest?: string
  currencyType?: string
  billingCycle?: string
}

// Endpoint URL
export interface EndpointURL {
  environmentName?: string
  environmentDisplayName?: string
  environmentType?: string
  URLs?: {
    http?: string
    https?: string
    ws?: string
    wss?: string
  }
  defaultVersionURLs?: {
    http?: string
    https?: string
    ws?: string
    wss?: string
  }
}

// Scope Info
export interface ScopeInfo {
  key?: string
  name?: string
  roles?: string[]
  description?: string
}

// Pagination
export interface Pagination {
  offset?: number
  limit?: number
  total?: number
  next?: string
  previous?: string
}

// Error response
export interface ErrorResponse {
  code: number
  message: string
  description?: string
  moreInfo?: string
  error?: ErrorListItem[]
}

// Error List Item
export interface ErrorListItem {
  code: string
  message: string
}

// Authentication response
export interface AuthResponse {
  access_token: string
  refresh_token: string
  scope: string
  token_type: string
  expires_in: number
}

// DCR response
export interface DCRResponse {
  clientId: string
  clientName: string
  callBackURL: string
  clientSecret: string
  isSaasApplication: boolean
  appOwner: string
  jsonString: string
  jsonAppAttribute: string
  tokenType: string | null
}

// Add a constant for default WSO2 client credentials
export const DEFAULT_CLIENT_ID = "PRODUCTION_CLIENT_ID"
export const DEFAULT_CLIENT_SECRET = "PRODUCTION_CLIENT_SECRET"

export interface AuthState {
  type: "oauth2" | "apikey"
  token?: string
  apiKey?: string
  keyType: "PRODUCTION" | "SANDBOX"
  oauthKeys?: {
    consumerKey: string
    consumerSecret: string
    keyMappingId: string
  }
}

export interface AuthConfig {
  grantTypes: string[]
  scopes: string[]
  validityPeriod: number
}

export interface WSO2Config {
  apiManagerUrl: string
  authority: string
  clientId: string
  clientSecret: string
  redirectUri: string
  postLogoutRedirectUri: string
  scope: string
  responseType: string
  homeUrl: string
  baseUrl: string
}
