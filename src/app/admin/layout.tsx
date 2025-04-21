
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Dashboard - API Marketplace",
  description: "Admin dashboard for API Marketplace",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-slate-100 ${inter.className}`}>
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <AdminHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  )
}
