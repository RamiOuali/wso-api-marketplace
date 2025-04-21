
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Layout, Database, Users } from 'lucide-react'
import Link from "next/link"

export function AdminDashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back, Admin</h2>
          <p className="text-muted-foreground">
            Here&apos;s an overview of your API marketplace administration
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/admin/themes/new">
            <Button>Create New Theme</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Theme</CardTitle>
            <Palette className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Default Theme</div>
            <p className="text-xs text-muted-foreground">
              Last updated 2 days ago
            </p>
            <Button variant="link" className="mt-2 px-0" asChild>
              <Link href="/admin/themes">
                Manage Themes <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total APIs</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              4 new APIs this month
            </p>
            <Button variant="link" className="mt-2 px-0" asChild>
              <Link href="/admin/apis">
                Manage APIs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +32 from last month
            </p>
            <Button variant="link" className="mt-2 px-0" asChild>
              <Link href="/admin/users">
                Manage Users <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Layout Components</CardTitle>
            <Layout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Header, Footer, Hero, etc.
            </p>
            <Button variant="link" className="mt-2 px-0" asChild>
              <Link href="/admin/layout">
                Manage Layout <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest actions in your marketplace</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-slate-100 p-2">
                  <Palette className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Theme Updated</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-slate-100 p-2">
                  <Database className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New API Added</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-slate-100 p-2">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New User Registered</p>
                  <p className="text-xs text-muted-foreground">5 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                <Palette className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-sm font-medium">Create Theme</div>
                  <div className="text-xs text-muted-foreground">Add a new theme</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                <Database className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-sm font-medium">Add API</div>
                  <div className="text-xs text-muted-foreground">Register new API</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                <Layout className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-sm font-medium">Edit Layout</div>
                  <div className="text-xs text-muted-foreground">Modify page layouts</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                <Users className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-sm font-medium">Manage Users</div>
                  <div className="text-xs text-muted-foreground">User administration</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
