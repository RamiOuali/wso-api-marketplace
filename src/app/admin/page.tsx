"use client"

import { AdminDashboardOverview } from "@/components/admin/admin-dashboard-overview"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <Breadcrumb
          segments={[
            { name: "API Marketplace", href: "/" },
            { name: "Admin" }
          ]}
          className="mb-4"
        />
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the API Marketplace admin dashboard
        </p>
      </div>
      
      <AdminDashboardOverview />
    </div>
  )
}
