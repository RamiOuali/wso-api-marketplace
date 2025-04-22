"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Trash2, MoreVertical, Check, Plus, Loader2, Edit, Eye } from "lucide-react"
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

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : themes.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center space-y-3 p-4 text-center border rounded-lg">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              onActivate={handleActivate}
              onDelete={confirmDelete}
              actionInProgress={actionInProgress}
              formatDate={formatDate}
            />
          ))}
        </div>
      )}

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

interface ThemeCardProps {
  theme: Theme
  onActivate: (id: string) => void
  onDelete: (id: string) => void
  actionInProgress: boolean
  formatDate: (date?: string) => string
}

function ThemeCard({ theme, onActivate, onDelete, actionInProgress, formatDate }: ThemeCardProps) {
  const heroImage = theme.siteLogo || "/placeholder.svg?height=200&width=400"
  const primaryColor = theme.primaryColor || "#0070f3"

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="relative">
        {/* Theme preview image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={heroImage || "/placeholder.svg"}
            alt={`${theme.name} preview`}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Color overlay using theme's primary color */}
          <div className="absolute inset-0 opacity-30" style={{ backgroundColor: primaryColor }} />
        </div>

        {/* Status badge */}
        {theme.isActive && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 hover:bg-green-600 px-3 py-1 text-white">Active</Badge>
          </div>
        )}

        {/* Theme color palette */}
        <div className="absolute -bottom-3 left-4 flex space-x-1">
          <div
            className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: theme.primaryColor || "#0070f3" }}
          />
          <div
            className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: theme.secondaryColor || "#6c757d" }}
          />
          <div
            className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: theme.accentColor || "#f97316" }}
          />
        </div>
      </div>

      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{theme.name}</h3>

        <div className="text-sm text-muted-foreground mb-4">
          <p className="mb-1">Created: {formatDate(theme.createdAt)}</p>
          <p>Last updated: {formatDate(theme.updatedAt)}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {theme.siteTitle && (
            <Badge variant="outline" className="text-xs">
              {theme.siteTitle}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="border-t bg-slate-50 pt-3 pb-3 flex justify-between">
        <Link href={`/admin/themes/${theme.id}`}>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </Link>

        <div className="flex gap-2">
          {!theme.isActive && (
            <Button variant="secondary" size="sm" onClick={() => onActivate(theme.id)} disabled={actionInProgress}>
              <Check className="h-4 w-4 mr-1" />
              Activate
            </Button>
          )}

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
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/`}>
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Link>
              </DropdownMenuItem>
              {!theme.isActive && (
                <DropdownMenuItem onClick={() => onActivate(theme.id)}>
                  <Check className="mr-2 h-4 w-4" />
                  Set as Active
                </DropdownMenuItem>
              )}
              {!theme.isActive && (
                <DropdownMenuItem className="text-red-500" onClick={() => onDelete(theme.id)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  )
}
