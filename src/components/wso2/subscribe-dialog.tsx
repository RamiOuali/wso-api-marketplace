"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Loader2, Check } from "lucide-react"
import type { WSO2AuthService } from "@/lib/wso2/auth-service"
import { WSO2ApplicationService } from "@/lib/wso2/application-service"
import { WSO2SubscriptionService } from "@/lib/wso2/subscription-service"
import type { API } from "@/lib/wso2/types"
import { useThemeContext } from "@/providers/ThemeProvider"

interface SubscribeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  baseUrl: string
  api: API
  authService: WSO2AuthService
}

interface Application {
  applicationId: string
  name: string
  throttlingPolicy: string
  description?: string
}

interface ThrottlingPolicy {
  name: string
  displayName: string
  description?: string
}

export function SubscribeDialog({ open, onOpenChange, baseUrl, api, authService }: SubscribeDialogProps) {
  const [step, setStep] = useState<"select-app" | "create-app" | "select-tier" | "success">("select-app")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [applications, setApplications] = useState<Application[]>([])
  const [throttlingPolicies, setThrottlingPolicies] = useState<ThrottlingPolicy[]>([])
  const [applicationPolicies, setApplicationPolicies] = useState<string[]>([])

  const [selectedAppOption, setSelectedAppOption] = useState<"existing" | "new">("existing")
  const [selectedAppId, setSelectedAppId] = useState<string>("")
  const [selectedTier, setSelectedTier] = useState<string>("")

  const [newAppName, setNewAppName] = useState<string>("")
  const [newAppDescription, setNewAppDescription] = useState<string>("")
  const [newAppPolicy, setNewAppPolicy] = useState<string>("")

  const [createdApp, setCreatedApp] = useState<Application | null>(null)
  const [subscriptionId, setSubscriptionId] = useState<string>("")

  const { theme } = useThemeContext()

  useEffect(() => {
    if (open) {
      fetchApplications()
      fetchThrottlingPolicies()
    }
  }, [open])

  const fetchApplications = async () => {
    try {
      setLoading(true)
      setError(null)

      const appService = new WSO2ApplicationService(baseUrl, authService)
      const response = await appService.getApplications()

      if (response && response.list) {
        setApplications(response.list)
        if (response.list.length > 0) {
          setSelectedAppId(response.list[0].applicationId)
        }
      }
    } catch (err) {
      console.error("Error fetching applications:", err)
      setError("Failed to fetch applications. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const fetchThrottlingPolicies = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch subscription throttling policies
      const subscriptionService = new WSO2SubscriptionService(baseUrl, authService)
      const response = await subscriptionService.getSubscriptionThrottlingPolicies()

      if (response && response.list) {
        setThrottlingPolicies(response.list)
        if (response.list.length > 0) {
          setSelectedTier(response.list[0].name)
        }
      }

      // TODO: Fetch application throttling policies
      // For now, use some common policies
      setApplicationPolicies(["Unlimited", "10PerMin", "20PerMin", "50PerMin"])
      setNewAppPolicy("Unlimited")
    } catch (err) {
      console.error("Error fetching throttling policies:", err)
      setError("Failed to fetch throttling policies. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCreateApplication = async () => {
    try {
      setLoading(true)
      setError(null)

      if (!newAppName.trim()) {
        setError("Application name is required")
        return
      }

      if (!newAppPolicy) {
        setError("Please select a throttling policy")
        return
      }

      const appService = new WSO2ApplicationService(baseUrl, authService)
      const createdApplication = await appService.createApplication(newAppName, newAppPolicy, newAppDescription)

      setCreatedApp(createdApplication)
      setSelectedAppId(createdApplication.applicationId)
      setStep("select-tier")
    } catch (err) {
      console.error("Error creating application:", err)
      setError("Failed to create application. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleSubscribe = async () => {
    try {
      setLoading(true)
      setError(null)

      if (!selectedAppId) {
        setError("Please select an application")
        return
      }

      if (!selectedTier) {
        setError("Please select a throttling policy")
        return
      }

      const subscriptionService = new WSO2SubscriptionService(baseUrl, authService)
      const subscription = await subscriptionService.subscribeToApi(api.id, selectedAppId, selectedTier)

      setSubscriptionId(subscription.subscriptionId)
      setStep("success")
    } catch (err) {
      console.error("Error subscribing to API:", err)
      setError("Failed to subscribe to API. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    // Reset state
    setStep("select-app")
    setSelectedAppOption("existing")
    setSelectedAppId("")
    setSelectedTier("")
    setNewAppName("")
    setNewAppDescription("")
    setNewAppPolicy("")
    setCreatedApp(null)
    setSubscriptionId("")
    setError(null)

    // Close dialog
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[500px]"
        style={{
          backgroundColor: theme?.cardBackground || "#ffffff",
          borderColor: theme?.cardBorderColor || "#e5e7eb",
          borderRadius: theme?.cardBorderRadius || "0.5rem",
        }}
      >
        <DialogHeader>
          <DialogTitle>Subscribe to {api.name}</DialogTitle>
          <DialogDescription>Subscribe to this API to get access to its endpoints</DialogDescription>
        </DialogHeader>

        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        {step === "select-app" && (
          <div className="py-4">
            <RadioGroup
              value={selectedAppOption}
              onValueChange={(value) => setSelectedAppOption(value as "existing" | "new")}
            >
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="existing" id="existing" disabled={applications.length === 0} />
                <Label htmlFor="existing">Use an existing application</Label>
              </div>

              {selectedAppOption === "existing" && (
                <div className="ml-6 mb-4">
                  {applications.length > 0 ? (
                    <div className="space-y-2">
                      <Label htmlFor="application">Select Application</Label>
                      <Select value={selectedAppId} onValueChange={setSelectedAppId}>
                        <SelectTrigger id="application">
                          <SelectValue placeholder="Select an application" />
                        </SelectTrigger>
                        <SelectContent>
                          {applications.map((app) => (
                            <SelectItem key={app.applicationId} value={app.applicationId}>
                              {app.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">No applications found. Please create a new application.</div>
                  )}
                </div>
              )}

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">Create a new application</Label>
              </div>
            </RadioGroup>

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (selectedAppOption === "existing") {
                    if (selectedAppId) {
                      setStep("select-tier")
                    } else {
                      setError("Please select an application")
                    }
                  } else {
                    setStep("create-app")
                  }
                }}
                disabled={selectedAppOption === "existing" && (!selectedAppId || applications.length === 0)}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === "create-app" && (
          <div className="py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">Application Name *</Label>
                <Input
                  id="app-name"
                  value={newAppName}
                  onChange={(e) => setNewAppName(e.target.value)}
                  placeholder="Enter application name"
                  required
                  style={{
                    backgroundColor: theme?.inputBackground || "#ffffff",
                    borderColor: theme?.inputBorderColor || "#d1d5db",
                    color: theme?.inputTextColor || "#333333",
                    borderRadius: theme?.inputBorderRadius || "0.375rem",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-policy">Throttling Tier *</Label>
                <Select value={newAppPolicy} onValueChange={setNewAppPolicy}>
                  <SelectTrigger id="app-policy">
                    <SelectValue placeholder="Select throttling tier" />
                  </SelectTrigger>
                  <SelectContent>
                    {applicationPolicies.map((policy) => (
                      <SelectItem key={policy} value={policy}>
                        {policy}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-description">Description</Label>
                <Input
                  id="app-description"
                  value={newAppDescription}
                  onChange={(e) => setNewAppDescription(e.target.value)}
                  placeholder="Enter application description"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setStep("select-app")}>
                Back
              </Button>
              <Button
                onClick={handleCreateApplication}
                disabled={loading}
                style={{
                  backgroundColor: theme?.buttonPrimaryColor || "#0070f3",
                  color: theme?.buttonTextColor || "#ffffff",
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Application"
                )}
              </Button>
            </div>
          </div>
        )}

        {step === "select-tier" && (
          <div className="py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tier">Subscription Tier *</Label>
                <Select value={selectedTier} onValueChange={setSelectedTier}>
                  <SelectTrigger id="tier">
                    <SelectValue placeholder="Select subscription tier" />
                  </SelectTrigger>
                  <SelectContent>
                    {throttlingPolicies.map((policy) => (
                      <SelectItem key={policy.name} value={policy.name}>
                        {policy.displayName || policy.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">Select a subscription tier for this API</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setStep(createdApp ? "create-app" : "select-app")}>
                Back
              </Button>
              <Button onClick={handleSubscribe} disabled={loading || !selectedTier}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="py-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <Check className="h-6 w-6" style={{ color: theme?.successColor || "#10b981" }} />
              </div>
              <h3 className="text-lg font-medium mb-2">Successfully Subscribed</h3>
              <p className="text-sm text-gray-500 mb-4">
                You have successfully subscribed to {api.name} with {selectedTier} tier.
              </p>

              <div className="w-full mt-4">
                <Button onClick={handleClose} className="w-full">
                  Done
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
