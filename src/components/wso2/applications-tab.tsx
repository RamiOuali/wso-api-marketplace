import { useEffect, useState } from "react"
import { AlertCircle, Check, Key, Trash2 } from "lucide-react"
import { WSO2AuthService } from "@/lib/wso2/auth-service"
import { WSO2ApplicationService, Application } from "@/lib/wso2/application-service"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"

interface ApplicationsTabProps {
  baseUrl: string
  authService: WSO2AuthService
  onApplicationSelect: (applicationId: string) => void
  selectedApplicationId?: string
}

export function ApplicationsTab({
  baseUrl,
  authService,
  onApplicationSelect,
  selectedApplicationId,
}: ApplicationsTabProps) {
  const [applications, setApplications] = useState<Application[]>([])
  const [selectedAppId, setSelectedAppId] = useState<string | undefined>(selectedApplicationId)
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)
  const [subscriptions, setSubscriptions] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'application' | 'subscription', id: string } | null>(null)

  const applicationService = new WSO2ApplicationService(baseUrl, authService)

  const loadApplications = async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await applicationService.getApplications()
      setApplications(result.list)

      // If there's a selectedApplicationId, select that application
      if (selectedApplicationId) {
        const selected = result.list.find((app: Application) => app.applicationId === selectedApplicationId)
        if (selected) {
          setSelectedAppId(selected.applicationId)
          setSelectedApp(selected)
          loadSubscriptions(selected.applicationId)
        }
      }
    } catch (err) {
      setError("Failed to load applications. Please try again.")
      console.error("Error loading applications:", err)
    } finally {
      setLoading(false)
    }
  }

  const loadSubscriptions = async (applicationId: string) => {
    try {
      setLoading(true)
      setError(null)
      const result = await applicationService.getApplicationSubscriptions(applicationId)
      setSubscriptions(result.list || [])
    } catch (err) {
      console.error("Error loading subscriptions:", err)
      setError("Failed to load subscriptions. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleApplicationChange = (applicationId: string) => {
    const selected = applications.find(app => app.applicationId === applicationId)
    if (selected) {
      setSelectedAppId(applicationId)
      setSelectedApp(selected)
      onApplicationSelect(applicationId)
      loadSubscriptions(applicationId)
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return

    try {
      setLoading(true)
      setError(null)

      if (deleteTarget.type === 'application') {
        await applicationService.deleteApplication(deleteTarget.id)
        await loadApplications()
        setSelectedApp(null)
        setSubscriptions([])
      } else {
        await applicationService.deleteSubscription(deleteTarget.id)
        if (selectedApp) {
          await loadSubscriptions(selectedApp.applicationId)
        }
      }
    } catch (err) {
      console.error("Error deleting:", err)
      setError(`Failed to delete ${deleteTarget.type}. Please try again.`)
    } finally {
      setLoading(false)
      setDeleteDialogOpen(false)
      setDeleteTarget(null)
    }
  }

  useEffect(() => {
    loadApplications()
  }, [])

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Select
            value={selectedAppId}
            onValueChange={handleApplicationChange}
          >
            <SelectTrigger className="w-[300px]">
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

          {selectedApp && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                setDeleteTarget({ type: 'application', id: selectedApp.applicationId })
                setDeleteDialogOpen(true)
              }}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Application
            </Button>
          )}
        </div>

        {selectedApp && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Application Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Name:</span> {selectedApp.name}
              </div>
              <div>
                <span className="font-medium">Throttling Tier:</span>{" "}
                {selectedApp.throttlingPolicy}
              </div>
              {selectedApp.description && (
                <div className="col-span-2">
                  <span className="font-medium">Description:</span>{" "}
                  {selectedApp.description}
                </div>
              )}
            </div>
          </Card>
        )}

        {selectedApp && subscriptions.length > 0 && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">API Subscriptions</h3>
            <ScrollArea className="h-[300px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>API</TableHead>
                    <TableHead>Throttling Policy</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscriptions.map((sub) => (
                    <TableRow key={sub.subscriptionId}>
                      <TableCell>{sub.apiInfo.name} v{sub.apiInfo.version}</TableCell>
                      <TableCell>{sub.throttlingPolicy}</TableCell>
                      <TableCell>
                        {sub.status === "ACTIVE" ? (
                          <span className="flex items-center text-green-600">
                            <Check className="h-4 w-4 mr-1" />
                            Active
                          </span>
                        ) : (
                          sub.status
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setDeleteTarget({ type: 'subscription', id: sub.subscriptionId })
                            setDeleteDialogOpen(true)
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </Card>
        )}
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the{" "}
              {deleteTarget?.type}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}