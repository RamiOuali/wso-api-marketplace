"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { Loader2, Save, ArrowLeft, Eye } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ColorPicker } from "@/components/admin/themes/color-picker"
import { getThemeById, createTheme, updateTheme, type Theme } from "@/lib/theme-service"

interface ThemeEditorProps {
  themeId?: string
  isNew?: boolean
}

const defaultTheme: Omit<Theme, "id"> = {
  name: "",
  isActive: false,
  siteTitle: "",
  siteDescription: "",
  siteLogo: "",
  favicon: "",
  primaryColor: "#0070f3",
  secondaryColor: "#6c757d",
  accentColor: "#f97316",
  backgroundColor: "#ffffff",
  textColor: "#333333",
  linkColor: "#0070f3",
  bodyFont: "Inter, sans-serif",
  headingFont: "Inter, sans-serif",
  baseFontSize: "16px",
  headingFontSize: "3rem",
  containerWidth: "1200px",
  contentWidth: "800px",
  sidebarWidth: "300px",
  navbarBackground: "#ffffff",
  navbarTextColor: "#333333",
  navbarLogo: "/images/logo.png",
  navbarHeight: "80px",
  navbarPosition: "sticky",
  navbarShowSearch: false,
  navbarShowLanguage: false,
  navbarShowUserMenu: true,
  navbarShowNotifications: false,
  footerBackground: "#121826",
  footerTextColor: "#ffffff",
  footerLogo: "/images/logo-white.png",
  footerCopyright: `© ${new Date().getFullYear()} API Marketplace. All rights reserved.`,
  footerShowSocial: true,
  footerShowNewsletter: false,
  heroBackground: "#121826",
  heroBackgroundImage: "/images/hero-background.jpg",
  heroTextColor: "#ffffff",
  heroTitle: "Welcome to our API Marketplace",
  heroSubtitle: "Discover, connect, and integrate with our extensive API collection",
  heroButtonText: "Browse APIs",
  heroButtonLink: "/apis",
  heroButtonColor: "#0070f3",
  heroOverlayColor: "rgba(0,0,0,0.5)",
  heroOverlayOpacity: 0.6,
  buttonPrimaryColor: "#0070f3",
  buttonSecondaryColor: "#6c757d",
  buttonTextColor: "#ffffff",
  buttonBorderRadius: "0.375rem",
  buttonPadding: "0.5rem 1rem",
  inputBackground: "#ffffff",
  inputBorderColor: "#d1d5db",
  inputTextColor: "#333333",
  inputFocusColor: "#0070f3",
  inputBorderRadius: "0.375rem",
  cardBackground: "#ffffff",
  cardBorderColor: "#e5e7eb",
  cardBorderRadius: "0.5rem",
  cardShadow: "0 2px 4px rgba(0,0,0,0.1)",
  cardPadding: "1rem",
  successColor: "#10b981",
  warningColor: "#f59e0b",
  errorColor: "#ef4444",
  infoColor: "#3b82f6",
  metaTitle: "API Marketplace",
  metaDescription: "Discover and connect with our APIs",
  metaKeywords: "api, marketplace, integration",
}

// Tab persistence key for localStorage
const TAB_STORAGE_KEY = "theme-editor-active-tab"

export function ThemeEditor({ themeId, isNew = false }: ThemeEditorProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [theme, setTheme] = useState<Theme | Omit<Theme, "id">>(defaultTheme)
  const fontOptions = [
    { value: "Arial, sans-serif", label: "Arial", category: "System" },
    { value: "Verdana, sans-serif", label: "Verdana", category: "System" },
    { value: "Helvetica, sans-serif", label: "Helvetica", category: "System" },
    { value: "Tahoma, sans-serif", label: "Tahoma", category: "System" },
    { value: "Trebuchet MS, sans-serif", label: "Trebuchet MS", category: "System" },
    { value: "Times New Roman, serif", label: "Times New Roman", category: "System" },
    { value: "Georgia, serif", label: "Georgia", category: "System" },
    { value: "Garamond, serif", label: "Garamond", category: "System" },
    { value: "Courier New, monospace", label: "Courier New", category: "System" },
    { value: "Monaco, monospace", label: "Monaco", category: "System" },
    { value: "Inter, sans-serif", label: "Inter", category: "Google" },
    { value: "Roboto, sans-serif", label: "Roboto", category: "Google" },
    { value: "Open Sans, sans-serif", label: "Open Sans", category: "Google" },
    { value: "Lato, sans-serif", label: "Lato", category: "Google" },
    { value: "Montserrat, sans-serif", label: "Montserrat", category: "Google" },
    { value: "Poppins, sans-serif", label: "Poppins", category: "Google" },
    { value: "Playfair Display, serif", label: "Playfair Display", category: "Google" },
    { value: "Merriweather, serif", label: "Merriweather", category: "Google" },
    { value: "Source Code Pro, monospace", label: "Source Code Pro", category: "Google" },
    { value: "JetBrains Mono, monospace", label: "JetBrains Mono", category: "Google" },
  ];
  // Add state for the active tab
  const [activeTab, setActiveTab] = useState<string>("general")

  // Load the active tab from localStorage on component mount
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined") {
      const savedTab = localStorage.getItem(TAB_STORAGE_KEY)
      if (savedTab) {
        setActiveTab(savedTab)
      }
    }
  }, [])

  // Save the active tab to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(TAB_STORAGE_KEY, activeTab)
    }
  }, [activeTab])

  useEffect(() => {
    if (isNew) {
      setLoading(false)
      return
    }

    const fetchTheme = async () => {
      try {
        setLoading(true)
        if (themeId) {
          const data = await getThemeById(themeId)
          setTheme(data)
        }
      } catch (error) {
        toast.error("Failed to load theme", {
          description: "There was an error loading the theme. Please try again.",
        })
        console.error("Error fetching theme:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTheme()
  }, [themeId, isNew])

  // Update the handleChange function to ensure we never set null values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTheme({ ...theme, [name]: value })
  }

  // Add a helper function to safely get string values
  const safeString = (value: any): string => {
    if (value === null || value === undefined) return ""
    return String(value)
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setTheme({ ...theme, [name]: checked })
  }

  const handleColorChange = (name: string, value: string) => {
    setTheme({ ...theme, [name]: value })
  }

  const handleSave = async () => {
    setSaving(true)

    try {
      if (isNew) {
        await createTheme(theme as Omit<Theme, "id">)
        toast.success("Theme created", {
          description: "Your new theme has been created successfully.",
        })
        router.push("/admin/themes")
      } else {
        await updateTheme(theme as Theme)
        toast.success("Theme updated", {
          description: "Your theme changes have been saved.",
        })
      }
    } catch (error) {
      toast.error(isNew ? "Failed to create theme" : "Failed to update theme", {
        description: "There was an error saving the theme. Please try again.",
      })
      console.error("Error saving theme:", error)
    } finally {
      setSaving(false)
    }
  }

  const handlePreview = () => {
    // In a real app, you would implement a preview functionality
    toast.info("Preview mode", {
      description: "This would show a preview of your theme.",
    })
  }

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  const groupedFontOptions = fontOptions.reduce((acc, font) => {
    const category = font.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(font);
    return acc;
  }, {} as Record<string, typeof fontOptions>);
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => router.push("/admin/themes")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {isNew ? "Create New Theme" : `Edit Theme: ${theme.name}`}
            </h2>
            <p className="text-muted-foreground">
              {isNew ? "Create a new theme for your marketplace" : "Modify theme settings and appearance"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Theme
              </>
            )}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-gray-400">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>

        {/* General Tab */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Theme Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={safeString(theme.name)}
                      onChange={handleChange}
                      placeholder="Enter theme name"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isActive"
                      checked={theme.isActive}
                      onCheckedChange={(checked) => handleSwitchChange("isActive", checked)}
                    />
                    <Label htmlFor="isActive">Set as active theme</Label>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="siteTitle">Site Title</Label>
                  <Input
                    id="siteTitle"
                    name="siteTitle"
                    value={safeString(theme.siteTitle)}
                    onChange={handleChange}
                    placeholder="Enter site title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea
                    id="siteDescription"
                    name="siteDescription"
                    value={safeString(theme.siteDescription)}
                    onChange={handleChange}
                    placeholder="Enter site description"
                    rows={3}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="siteLogo">Site Logo URL</Label>
                    <Input
                      id="siteLogo"
                      name="siteLogo"
                      value={safeString(theme.siteLogo)}
                      onChange={handleChange}
                      placeholder="/images/logo.png"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="favicon">Favicon URL</Label>
                    <Input
                      id="favicon"
                      name="favicon"
                      value={safeString(theme.favicon)}
                      onChange={handleChange}
                      placeholder="/images/favicon.ico"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    name="metaTitle"
                    value={safeString(theme.metaTitle)}
                    onChange={handleChange}
                    placeholder="Enter meta title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    name="metaDescription"
                    value={safeString(theme.metaDescription)}
                    onChange={handleChange}
                    placeholder="Enter meta description"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaKeywords">Meta Keywords</Label>
                  <Input
                    id="metaKeywords"
                    name="metaKeywords"
                    value={safeString(theme.metaKeywords)}
                    onChange={handleChange}
                    placeholder="api, marketplace, integration"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rest of the tabs remain unchanged */}
        {/* Layout Tab */}
        <TabsContent value="layout" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <Accordion type="multiple" className="w-full">
                {/* Navbar Section */}
                <AccordionItem value="navbar">
                  <AccordionTrigger>Navbar Settings</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="navbarBackground">Navbar Background</Label>
                        <ColorPicker
                          id="navbarBackground"
                          value={theme.navbarBackground}
                          onChange={(value) => handleColorChange("navbarBackground", value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="navbarTextColor">Navbar Text Color</Label>
                        <ColorPicker
                          id="navbarTextColor"
                          value={theme.navbarTextColor}
                          onChange={(value) => handleColorChange("navbarTextColor", value)}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="navbarLogo">Navbar Logo URL</Label>
                        <Input
                          id="navbarLogo"
                          name="navbarLogo"
                          value={safeString(theme.navbarLogo)}
                          onChange={handleChange}
                          placeholder="/images/logo.png"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="navbarHeight">Navbar Height</Label>
                        <Input
                          id="navbarHeight"
                          name="navbarHeight"
                          value={safeString(theme.navbarHeight)}
                          onChange={handleChange}
                          placeholder="80px"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="navbarPosition">Navbar Position</Label>
                      <select
                        id="navbarPosition"
                        name="navbarPosition"
                        value={safeString(theme.navbarPosition)}
                        onChange={handleChange as any}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="sticky">Sticky</option>
                        <option value="fixed">Fixed</option>
                        <option value="static">Static</option>
                      </select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="navbarShowSearch"
                          checked={theme.navbarShowSearch}
                          onCheckedChange={(checked) => handleSwitchChange("navbarShowSearch", checked)}
                        />
                        <Label htmlFor="navbarShowSearch">Show Search</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="navbarShowLanguage"
                          checked={theme.navbarShowLanguage}
                          onCheckedChange={(checked) => handleSwitchChange("navbarShowLanguage", checked)}
                        />
                        <Label htmlFor="navbarShowLanguage">Show Language Selector</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="navbarShowUserMenu"
                          checked={theme.navbarShowUserMenu}
                          onCheckedChange={(checked) => handleSwitchChange("navbarShowUserMenu", checked)}
                        />
                        <Label htmlFor="navbarShowUserMenu">Show User Menu</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="navbarShowNotifications"
                          checked={theme.navbarShowNotifications}
                          onCheckedChange={(checked) => handleSwitchChange("navbarShowNotifications", checked)}
                        />
                        <Label htmlFor="navbarShowNotifications">Show Notifications</Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Rest of the accordion items remain the same */}
                {/* Footer Section */}
                <AccordionItem value="footer">
                  <AccordionTrigger>Footer Settings</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                         <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="footerBackground">Footer Background</Label>
                        <ColorPicker
                          id="footerBackground"
                          value={theme.footerBackground}
                          onChange={(value) => handleColorChange("footerBackground", value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="footerTextColor">Footer Text Color</Label>
                        <ColorPicker
                          id="footerTextColor"
                          value={theme.footerTextColor}
                          onChange={(value) => handleColorChange("footerTextColor", value)}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="footerLogo">Footer Logo URL</Label>
                        <Input
                          id="footerLogo"
                          name="footerLogo"
                          value={safeString(theme.footerLogo)}
                          onChange={handleChange}
                          placeholder="/images/logo-white.png"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="footerCopyright">Copyright Text</Label>
                        <Input
                          id="footerCopyright"
                          name="footerCopyright"
                          value={safeString(theme.footerCopyright)}
                          onChange={handleChange}
                          placeholder="© 2023 API Marketplace. All rights reserved."
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="footerShowSocial"
                          checked={theme.footerShowSocial}
                          onCheckedChange={(checked) => handleSwitchChange("footerShowSocial", checked)}
                        />
                        <Label htmlFor="footerShowSocial">Show Social Links</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="footerShowNewsletter"
                          checked={theme.footerShowNewsletter}
                          onCheckedChange={(checked) => handleSwitchChange("footerShowNewsletter", checked)}
                        />
                        <Label htmlFor="footerShowNewsletter">Show Newsletter</Label>
                      </div>
                    </div>                  </AccordionContent>
                </AccordionItem>

                {/* Hero Section */}
                <AccordionItem value="hero">
                  <AccordionTrigger>Hero Section</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="heroBackground">Hero Background Color</Label>
                        <ColorPicker
                          id="heroBackground"
                          value={theme.heroBackground}
                          onChange={(value) => handleColorChange("heroBackground", value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="heroTextColor">Hero Text Color</Label>
                        <ColorPicker
                          id="heroTextColor"
                          value={theme.heroTextColor}
                          onChange={(value) => handleColorChange("heroTextColor", value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="heroBackgroundImage">Hero Background Image URL</Label>
                      <Input
                        id="heroBackgroundImage"
                        name="heroBackgroundImage"
                        value={safeString(theme.heroBackgroundImage)}
                        onChange={handleChange}
                        placeholder="/images/hero-background.jpg"
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="heroOverlayColor">Overlay Color</Label>
                        <ColorPicker
                          id="heroOverlayColor"
                          value={theme.heroOverlayColor}
                          onChange={(value) => handleColorChange("heroOverlayColor", value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="heroOverlayOpacity">Overlay Opacity</Label>
                        <Input
                          id="heroOverlayOpacity"
                          name="heroOverlayOpacity"
                          type="number"
                          min="0"
                          max="1"
                          step="0.1"
                          value={theme.heroOverlayOpacity !== null ? theme.heroOverlayOpacity : ""}
                          onChange={handleChange}
                          placeholder="0.6"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="heroTitle">Hero Title</Label>
                      <Input
                        id="heroTitle"
                        name="heroTitle"
                        value={safeString(theme.heroTitle)}
                        onChange={handleChange}
                        placeholder="Welcome to our API Marketplace"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                      <Textarea
                        id="heroSubtitle"
                        name="heroSubtitle"
                        value={safeString(theme.heroSubtitle)}
                        onChange={handleChange}
                        placeholder="Discover, connect, and integrate with our extensive API collection"
                        rows={2}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="heroButtonText">Button Text</Label>
                        <Input
                          id="heroButtonText"
                          name="heroButtonText"
                          value={safeString(theme.heroButtonText)}
                          onChange={handleChange}
                          placeholder="Browse APIs"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="heroButtonLink">Button Link</Label>
                        <Input
                          id="heroButtonLink"
                          name="heroButtonLink"
                          value={safeString(theme.heroButtonLink)}
                          onChange={handleChange}
                          placeholder="/apis"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="heroButtonColor">Button Color</Label>
                        <ColorPicker
                          id="heroButtonColor"
                          value={theme.heroButtonColor}
                          onChange={(value) => handleColorChange("heroButtonColor", value)}
                        />
                      </div>
                    </div>
                          </AccordionContent>
            </AccordionItem>

            {/* Layout Dimensions */}
            <AccordionItem value="dimensions">
              <AccordionTrigger>Layout Dimensions</AccordionTrigger>
              <AccordionContent className="space-y-4">
             <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="containerWidth">Container Width</Label>
                        <Input
                          id="containerWidth"
                          name="containerWidth"
                          value={safeString(theme.containerWidth)}
                          onChange={handleChange}
                          placeholder="1200px"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contentWidth">Content Width</Label>
                        <Input
                          id="contentWidth"
                          name="contentWidth"
                          value={safeString(theme.contentWidth)}
                          onChange={handleChange}
                          placeholder="800px"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sidebarWidth">Sidebar Width</Label>
                        <Input
                          id="sidebarWidth"
                          name="sidebarWidth"
                          value={safeString(theme.sidebarWidth)}
                          onChange={handleChange}
                          placeholder="300px"
                        />
                      </div>
                    </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </TabsContent>
        {/* Colors Tab */ }
        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Brand Colors</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <ColorPicker
                      id="primaryColor"
                      value={theme.primaryColor}
                      onChange={(value) => handleColorChange("primaryColor", value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <ColorPicker
                      id="secondaryColor"
                      value={theme.secondaryColor}
                      onChange={(value) => handleColorChange("secondaryColor", value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <ColorPicker
                      id="accentColor"
                      value={theme.accentColor}
                      onChange={(value) => handleColorChange("accentColor", value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkColor">Link Color</Label>
                    <ColorPicker
                      id="linkColor"
                      value={theme.linkColor}
                      onChange={(value) => handleColorChange("linkColor", value)}
                    />
                  </div>
                </div>

                <Separator />

                <h3 className="text-lg font-medium">Background & Text</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="backgroundColor">Background Color</Label>
                    <ColorPicker
                      id="backgroundColor"
                      value={theme.backgroundColor}
                      onChange={(value) => handleColorChange("backgroundColor", value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="textColor">Text Color</Label>
                    <ColorPicker
                      id="textColor"
                      value={theme.textColor}
                      onChange={(value) => handleColorChange("textColor", value)}
                    />
                  </div>
                </div>

                <Separator />

                <h3 className="text-lg font-medium">Status Colors</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="successColor">Success Color</Label>
                    <ColorPicker
                      id="successColor"
                      value={theme.successColor}
                      onChange={(value) => handleColorChange("successColor", value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="warningColor">Warning Color</Label>
                    <ColorPicker
                      id="warningColor"
                      value={theme.warningColor}
                      onChange={(value) => handleColorChange("warningColor", value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="errorColor">Error Color</Label>
                    <ColorPicker
                      id="errorColor"
                      value={theme.errorColor}
                      onChange={(value) => handleColorChange("errorColor", value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="infoColor">Info Color</Label>
                    <ColorPicker
                      id="infoColor"
                      value={theme.infoColor}
                      onChange={(value) => handleColorChange("infoColor", value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

     <TabsContent value="typography" className="space-y-6">
  <Card>
    <CardContent className="pt-6">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="bodyFont">Body Font</Label>
            <select
              id="bodyFont"
              name="bodyFont"
              value={safeString(theme.bodyFont)}
              onChange={handleChange as any}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <optgroup label="System Fonts">
                {groupedFontOptions['System']?.map((font) => (
                  <option key={font.value} value={font.value}>{font.label}</option>
                ))}
              </optgroup>
              <optgroup label="Google Fonts">
                {groupedFontOptions['Google']?.map((font) => (
                  <option key={font.value} value={font.value}>{font.label}</option>
                ))}
              </optgroup>
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              System fonts work instantly. Google fonts may require adding a link tag to your HTML.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="headingFont">Heading Font</Label>
            <select
              id="headingFont"
              name="headingFont"
              value={safeString(theme.headingFont)}
              onChange={handleChange as any}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <optgroup label="System Fonts">
                {groupedFontOptions['System']?.map((font) => (
                  <option key={font.value} value={font.value}>{font.label}</option>
                ))}
              </optgroup>
              <optgroup label="Google Fonts">
                {groupedFontOptions['Google']?.map((font) => (
                  <option key={font.value} value={font.value}>{font.label}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="baseFontSize">Base Font Size</Label>
            <Input
              id="baseFontSize"
              name="baseFontSize"
              value={safeString(theme.baseFontSize)}
              onChange={handleChange}
              placeholder="16px"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="headingFontSize">Heading Font Size</Label>
            <Input
              id="headingFontSize"
              name="headingFontSize"
              value={safeString(theme.headingFontSize)}
              onChange={handleChange}
              placeholder="3rem"
            />
          </div>
        </div>
        
        {/* Font Preview Section */}
        <div className="mt-6 p-4 border rounded-md">
          <h3 className="text-sm font-medium mb-2">Font Preview</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Body Font</p>
              <div style={{ fontFamily: theme.bodyFont }}>
                <p>The quick brown fox jumps over the lazy dog.</p>
                <p style={{ fontSize: "0.875rem" }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p style={{ fontSize: "0.875rem" }}>abcdefghijklmnopqrstuvwxyz</p>
                <p style={{ fontSize: "0.875rem" }}>0123456789</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Heading Font</p>
              <div style={{ fontFamily: theme.headingFont }}>
                <p className="text-xl font-bold">The quick brown fox jumps over the lazy dog.</p>
                <p className="font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="font-bold">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-bold">0123456789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Font Import Helper */}
        <div className="bg-muted/50 p-4 rounded-md">
          <h3 className="text-sm font-medium mb-2">Font Import Code</h3>
          <p className="text-xs text-muted-foreground mb-3">
            If you're using Google Fonts, add this code to your HTML head section:
          </p>
          <div className="bg-muted p-3 rounded border text-sm font-mono overflow-x-auto">
            {theme.bodyFont.includes('Inter') || theme.headingFont.includes('Inter') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Roboto') || theme.headingFont.includes('Roboto') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Open Sans') || theme.headingFont.includes('Open Sans') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Lato') || theme.headingFont.includes('Lato') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Montserrat') || theme.headingFont.includes('Montserrat') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Poppins') || theme.headingFont.includes('Poppins') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Playfair Display') || theme.headingFont.includes('Playfair Display') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Merriweather') || theme.headingFont.includes('Merriweather') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('Source Code Pro') || theme.headingFont.includes('Source Code Pro') ? 
              '<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">\n' : ''}
            {theme.bodyFont.includes('JetBrains Mono') || theme.headingFont.includes('JetBrains Mono') ? 
              '<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">' : ''}
            {!theme.bodyFont.includes('Google') && !theme.headingFont.includes('Google') && 
             !(theme.bodyFont.includes('Inter') || theme.headingFont.includes('Inter') ||
               theme.bodyFont.includes('Roboto') || theme.headingFont.includes('Roboto') ||
               theme.bodyFont.includes('Open Sans') || theme.headingFont.includes('Open Sans') ||
               theme.bodyFont.includes('Lato') || theme.headingFont.includes('Lato') ||
               theme.bodyFont.includes('Montserrat') || theme.headingFont.includes('Montserrat') ||
               theme.bodyFont.includes('Poppins') || theme.headingFont.includes('Poppins') ||
               theme.bodyFont.includes('Playfair Display') || theme.headingFont.includes('Playfair Display') ||
               theme.bodyFont.includes('Merriweather') || theme.headingFont.includes('Merriweather') ||
               theme.bodyFont.includes('Source Code Pro') || theme.headingFont.includes('Source Code Pro') ||
               theme.bodyFont.includes('JetBrains Mono') || theme.headingFont.includes('JetBrains Mono')) ? 
              '/* No Google Fonts selected - system fonts work without imports */' : ''}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            System fonts don't need to be imported as they're already available on users' devices.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>
  {/* Components Tab */ }
  <TabsContent value="components" className="space-y-6">
    <Card>
      <CardContent className="pt-6">
        <Accordion type="multiple" className="w-full">
          {/* Buttons */}
          <AccordionItem value="buttons">
            <AccordionTrigger>Buttons</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="buttonPrimaryColor">Primary Button Color</Label>
                  <ColorPicker
                    id="buttonPrimaryColor"
                    value={theme.buttonPrimaryColor}
                    onChange={(value) => handleColorChange("buttonPrimaryColor", value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buttonSecondaryColor">Secondary Button Color</Label>
                  <ColorPicker
                    id="buttonSecondaryColor"
                    value={theme.buttonSecondaryColor}
                    onChange={(value) => handleColorChange("buttonSecondaryColor", value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="buttonTextColor">Button Text Color</Label>
                  <ColorPicker
                    id="buttonTextColor"
                    value={theme.buttonTextColor}
                    onChange={(value) => handleColorChange("buttonTextColor", value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buttonBorderRadius">Button Border Radius</Label>
                  <Input
                    id="buttonBorderRadius"
                    name="buttonBorderRadius"
                    value={safeString(theme.buttonBorderRadius)}
                    onChange={handleChange}
                    placeholder="0.375rem"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="buttonPadding">Button Padding</Label>
                <Input
                  id="buttonPadding"
                  name="buttonPadding"
                  value={safeString(theme.buttonPadding)}
                  onChange={handleChange}
                  placeholder="0.5rem 1rem"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Form Inputs */}
          <AccordionItem value="inputs">
            <AccordionTrigger>Form Inputs</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="inputBackground">Input Background</Label>
                  <ColorPicker
                    id="inputBackground"
                    value={theme.inputBackground}
                    onChange={(value) => handleColorChange("inputBackground", value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inputBorderColor">Input Border Color</Label>
                  <ColorPicker
                    id="inputBorderColor"
                    value={theme.inputBorderColor}
                    onChange={(value) => handleColorChange("inputBorderColor", value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="inputTextColor">Input Text Color</Label>
                  <ColorPicker
                    id="inputTextColor"
                    value={theme.inputTextColor}
                    onChange={(value) => handleColorChange("inputTextColor", value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inputFocusColor">Input Focus Color</Label>
                  <ColorPicker
                    id="inputFocusColor"
                    value={theme.inputFocusColor}
                    onChange={(value) => handleColorChange("inputFocusColor", value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="inputBorderRadius">Input Border Radius</Label>
                <Input
                  id="inputBorderRadius"
                  name="inputBorderRadius"
                  value={safeString(theme.inputBorderRadius)}
                  onChange={handleChange}
                  placeholder="0.375rem"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Cards */}
          <AccordionItem value="cards">
            <AccordionTrigger>Cards</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cardBackground">Card Background</Label>
                  <ColorPicker
                    id="cardBackground"
                    value={theme.cardBackground}
                    onChange={(value) => handleColorChange("cardBackground", value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardBorderColor">Card Border Color</Label>
                  <ColorPicker
                    id="cardBorderColor"
                    value={theme.cardBorderColor}
                    onChange={(value) => handleColorChange("cardBorderColor", value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cardBorderRadius">Card Border Radius</Label>
                  <Input
                    id="cardBorderRadius"
                    name="cardBorderRadius"
                    value={safeString(theme.cardBorderRadius)}
                    onChange={handleChange}
                    placeholder="0.5rem"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardShadow">Card Shadow</Label>
                  <Input
                    id="cardShadow"
                    name="cardShadow"
                    value={safeString(theme.cardShadow)}
                    onChange={handleChange}
                    placeholder="0 2px 4px rgba(0,0,0,0.1)"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardPadding">Card Padding</Label>
                <Input
                  id="cardPadding"
                  name="cardPadding"
                  value={safeString(theme.cardPadding)}
                  onChange={handleChange}
                  placeholder="1rem"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  </TabsContent>
      </Tabs >
    </div >
  )
}
