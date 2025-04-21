"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pencil, Trash2, MoreVertical, Check, Plus, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
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
import { getAllThemes, activateTheme, deleteTheme, type Theme } from "@/lib/theme-service"

export function ThemesList() {
  const [themes, setThemes] = useState<Theme[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [themeToDelete, setThemeToDelete] = useState<string | null>(null)
  const [actionInProgress, setActionInProgress] = useState(false)

  useEffect(() => {
    fetchThemes()
  }, [])

  const fetchThemes = async () => {
    try {
      setLoading(true)
      const data = await getAllThemes()
      setThemes(data)
    } catch (error) {
      toast.error("Failed to load themes", {
        description: "There was an error loading the themes. Please try again.",
      })
      console.error("Error fetching themes:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleActivate = async (id: string) => {
    try {
      setActionInProgress(true)
      await activateTheme(id)

      // Update local state
      setThemes(
        themes.map((theme) => ({
          ...theme,
          isActive: theme.id === id,
        })),
      )

      toast.success("Theme activated", {
        description: "The theme has been set as active.",
      })
    } catch (error) {
      toast.error("Failed to activate theme", {
        description: "There was an error activating the theme. Please try again.",
      })
      console.error("Error activating theme:", error)
    } finally {
      setActionInProgress(false)
    }
  }

  const confirmDelete = (id: string) => {
    setThemeToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDelete = async () => {
    if (!themeToDelete) return

    try {
      setActionInProgress(true)
      await deleteTheme(themeToDelete)

      // Update local state
      setThemes(themes.filter((theme) => theme.id !== themeToDelete))

      toast.success("Theme deleted", {
        description: "The theme has been permanently deleted.",
      })
    } catch (error) {
      toast.error("Failed to delete theme", {
        description: "There was an error deleting the theme. Please try again.",
      })
      console.error("Error deleting theme:", error)
    } finally {
      setActionInProgress(false)
      setDeleteDialogOpen(false)
      setThemeToDelete(null)
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Themes</h2>
          <p className="text-muted-foreground">Manage and customize your marketplace themes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchThemes} disabled={loading || actionInProgress}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Refresh
          </Button>
          <Link href="/admin/themes/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Theme
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : themes.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-3 p-4 text-center">
              <div className="text-lg font-medium">No themes found</div>
              <p className="text-sm text-muted-foreground">Get started by creating a new theme for your marketplace.</p>
              <Link href="/admin/themes/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Theme
                </Button>
              </Link>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {themes.map((theme) => (
                  <TableRow key={theme.id}>
                    <TableCell className="font-medium">{theme.name}</TableCell>
                    <TableCell>
                      {theme.isActive ? (
                        <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                      ) : (
                        <Badge variant="outline">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>{formatDate(theme.createdAt)}</TableCell>
                    <TableCell>{formatDate(theme.updatedAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" disabled={actionInProgress}>
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/themes/${theme.id}`}>
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          {!theme.isActive && (
                            <DropdownMenuItem onClick={() => handleActivate(theme.id)}>
                              <Check className="mr-2 h-4 w-4" />
                              Set as Active
                            </DropdownMenuItem>
                          )}
                          {!theme.isActive && (
                            <DropdownMenuItem className="text-red-500" onClick={() => confirmDelete(theme.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the theme and all its data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={actionInProgress}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={actionInProgress}
              className="bg-red-500 hover:bg-red-600"
            >
              {actionInProgress ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
