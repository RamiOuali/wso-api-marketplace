"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Palette, Layout, Users, Settings, Database, BarChart3, FileText, Menu, X } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Themes",
      href: "/admin/themes",
      icon: <Palette className="h-5 w-5" />,
    },
    {
      title: "Layout",
      href: "/admin/layout",
      icon: <Layout className="h-5 w-5" />,
    },
    {
      title: "APIs",
      href: "/admin/apis",
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Content",
      href: "/admin/content",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]
  
  // Function to check if a nav item is active
  const isActiveRoute = (href: string) => {
    // Special case for the dashboard - only exact match
    if (href === "/admin") {
      return pathname === "/admin"
    }
    
    // For other routes, check if pathname starts with href
    return pathname === href || pathname.startsWith(`${href}/`)
  }
  
  return (
    <>
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {/* Overlay - fixed z-index to ensure it appears below sidebar but above content */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-200 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform overflow-y-auto bg-white shadow-lg transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-center border-b px-4">
          <Link href="/admin" className="flex items-center space-x-2">
            <span className="text-xl font-bold">API Admin</span>
          </Link>
        </div>
        <nav className="space-y-1 p-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActiveRoute(item.href)
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
