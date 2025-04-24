"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Globe, ChevronDown, LogIn, UserPlus, User, LogOut, Settings, HelpCircle, Code } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useThemeContext } from "@/providers/ThemeProvider"
import { WSO2AuthModal } from "@/components/wso2/auth-modal"
import { WSO2AuthService } from "@/lib/wso2/auth-service"

export function Navbar() {
  const { theme } = useThemeContext() || { theme: null }
  const pathname = usePathname()
  const router = useRouter()
  const [authModalOpen, setAuthModalOpen] = React.useState(false)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [isPublicMode, setIsPublicMode] = React.useState(false)
  const [username, setUsername] = React.useState("")
  const [authService, setAuthService] = React.useState(null)

  React.useEffect(() => {
    // Listen for custom event to open auth modal from other components
    const handleOpenAuthModal = () => {
      setAuthModalOpen(true)
    }

    document.addEventListener("openWso2AuthModal", handleOpenAuthModal)

    // Clean up event listener
    return () => {
      document.removeEventListener("openWso2AuthModal", handleOpenAuthModal)
    }
  }, [])

  // Check for existing authentication on component mount
  React.useEffect(() => {
    try {
      const storedBaseUrl = localStorage.getItem("wso2_baseUrl")
      const storedUsername = localStorage.getItem("wso2_username")
      const accessToken = localStorage.getItem("wso2_accessToken")
      const publicMode = localStorage.getItem("wso2_publicMode") === "true"

      if (storedBaseUrl) {
        if (storedUsername && accessToken) {
          setUsername(storedUsername)
          setIsAuthenticated(true)

          // Create auth service with stored credentials
          const auth = new WSO2AuthService(storedBaseUrl)

          // Set auth service properties
          const clientId = localStorage.getItem("wso2_clientId")
          const clientSecret = localStorage.getItem("wso2_clientSecret")  
          const refreshToken = localStorage.getItem("wso2_refreshToken")
          const tokenExpiry = localStorage.getItem("wso2_tokenExpiry")

          if (clientId && clientSecret && accessToken && refreshToken && tokenExpiry) {
            Object.assign(auth, {
              clientId,
              clientSecret,
              accessToken,
              refreshToken,
              tokenExpiry: Number.parseInt(tokenExpiry, 10),
            })

            setAuthService(auth)
          }
        } else if (publicMode) {
          setIsPublicMode(true)
          const auth = new WSO2AuthService(storedBaseUrl)
          setAuthService(auth)
        }
      }
    } catch (err) {
      console.error("Error accessing localStorage:", err)
    }
  }, [])

  const handleAuthSuccess = (auth, publicMode, user) => {
    setAuthService(auth)

    if (publicMode) {
      setIsPublicMode(true)
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
      setIsPublicMode(false)
      if (user) {
        setUsername(user)
      }
    }
  }

  const handleLogout = () => {
    // Clear auth-related localStorage items
    localStorage.removeItem("wso2_username")
    localStorage.removeItem("wso2_clientId")
    localStorage.removeItem("wso2_clientSecret")
    localStorage.removeItem("wso2_accessToken")
    localStorage.removeItem("wso2_refreshToken")
    localStorage.removeItem("wso2_tokenExpiry")
    localStorage.removeItem("wso2_publicMode")

    // Reset state
    setIsAuthenticated(false)
    setIsPublicMode(false)
    setAuthService(null)
    setUsername("")
  }

  const navigateToApiConsole = () => {
    router.push("/wso2")
  }

  // Handle loading state and provide fallback
  if (!theme) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div>Loading...</div>
        </div>
      </header>
    );
  }

  // Default values for the theme (resembling the old navbar styles)
  const defaultTheme = {
    navItems: [
      { title: 'Home', href: '/', isExternal: false },
      { title: 'APIs', href: '/apis', isExternal: false },
      { title: 'Documentation', href: '/docs', isExternal: false },
    ],
    navbarShowUserMenu: true,
    languages: [],
    navbarLogo: '/images/logo.png',
    navbarPosition: 'sticky',
    navbarHeight: '64px',
    navbarBackground: 'transparent',
    navbarTextColor: 'inherit',
    bodyFont: 'inherit',
    containerWidth: '100%',
    primaryColor: '#007bff',
    buttonBorderRadius: '0.375rem',
    buttonTextColor: 'white',
    textColor: 'inherit',
    navbarShowLanguage: false,
  };

  // Merge default theme with provided theme values
  const mergedTheme = { ...defaultTheme, ...theme };

  // Safely access navItems with fallback
  const navItems = mergedTheme.navItems || defaultTheme.navItems;
  
  const filteredNavItems = mergedTheme.navbarShowUserMenu
    ? navItems
    : navItems.filter((item) => item.title !== 'About Us');

  const languages = mergedTheme.languages || [];
  const logoPath = mergedTheme.navbarLogo;

  // Create default user menu items
  const defaultUserMenuItems = [
    { title: "Profile", href: "/profile", icon: User },
    { title: "API Console", href: "/wso2", icon: Code },
    { title: "Settings", href: "/settings", icon: Settings },
    { title: "Help", href: "/help", icon: HelpCircle },
    { title: "Sign out", href: "#", icon: LogOut, action: handleLogout },
  ]

  return (
    <>
      <header
        className="top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
        style={{
          position: mergedTheme.navbarPosition,
          height: mergedTheme.navbarHeight,
          backgroundColor: mergedTheme.navbarBackground,
          color: mergedTheme.navbarTextColor,
          fontFamily: mergedTheme.bodyFont,
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-4"
          style={{ maxWidth: mergedTheme.containerWidth, height: mergedTheme.navbarHeight }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoPath}
              alt="Logo"
              width={107}
              height={24}
              className="object-contain"
              style={{ maxHeight: '32px' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {filteredNavItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:underline"
                  style={{ color: mergedTheme.navbarTextColor }}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:underline",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  style={{
                    color:
                      pathname === item.href
                        ? mergedTheme.primaryColor
                        : mergedTheme.navbarTextColor,
                  }}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            {mergedTheme.navbarShowLanguage && languages.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 h-8 px-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{languages[0].code.toUpperCase()}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code}>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* User menu or Sign in/up buttons */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="group relative overflow-hidden px-5 py-2 transition-all duration-300 hover:bg-transparent" style={{ color: mergedTheme.navbarTextColor }}>
                    <span className="relative z-10 flex items-center gap-2 font-medium">
                      <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <span>{username}</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </span>
                    <span 
                      className="absolute bottom-0 left-0 h-0.5 w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      style={{ backgroundColor: mergedTheme.primaryColor }}
                    ></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {defaultUserMenuItems.map((item) => (
                      <DropdownMenuItem
                        key={item.href}
                        onClick={
                          item.action ? item.action : item.href !== "#" ? () => router.push(item.href) : undefined
                        }
                        className="cursor-pointer"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : isPublicMode ? (
              <div className="flex items-center gap-3">
                {/* API Console Button */}
                <Button
                  variant="ghost"
                  className="group relative overflow-hidden px-5 py-2 transition-all duration-300 hover:bg-transparent"
                  style={{
                    color: mergedTheme.navbarTextColor,
                    borderRadius: mergedTheme.buttonBorderRadius,
                  }}
                  onClick={navigateToApiConsole}
                >
                  <span className="relative z-10 flex items-center gap-2 font-medium">
                    <Code className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    API Console
                  </span>
                  <span 
                    className="absolute bottom-0 left-0 h-0.5 w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: mergedTheme.primaryColor }}
                  ></span>
                </Button>
                
                {/* Sign In Button with animation */}
                <Button
                  className="group relative overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: mergedTheme.primaryColor,
                    color: mergedTheme.buttonTextColor,
                    borderRadius: mergedTheme.buttonBorderRadius,
                  }}
                  onClick={() => setAuthModalOpen(true)}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <LogIn className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    Sign In
                  </span>
                  <span 
                    className="absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  ></span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {/* Creative Sign In Button */}
                <Button
                  variant="ghost"
                  className="group relative overflow-hidden px-5 py-2 transition-all duration-300 hover:bg-transparent"
                  style={{
                    color: mergedTheme.navbarTextColor,
                    borderRadius: mergedTheme.buttonBorderRadius,
                  }}
                  onClick={() => setAuthModalOpen(true)}
                >
                  <span className="relative z-10 flex items-center gap-2 font-medium">
                    <LogIn className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Sign In
                  </span>
                  <span 
                    className="absolute bottom-0 left-0 h-0.5 w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: mergedTheme.primaryColor }}
                  ></span>
                </Button>
                
                {/* Creative Sign Up Button with animation */}
                <Button
                  className="group relative overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: mergedTheme.primaryColor,
                    color: mergedTheme.buttonTextColor,
                    borderRadius: mergedTheme.buttonBorderRadius,
                  }}
                  onClick={() => setAuthModalOpen(true)}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <UserPlus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    Sign Up
                  </span>
                  <span 
                    className="absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  ></span>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 sm:w-80">
              <div className="flex flex-col space-y-4 mt-6">
                {filteredNavItems.map((item) =>
                  item.isExternal ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium"
                      style={{ color: mergedTheme.textColor }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium"
                      style={{ color: mergedTheme.textColor }}
                    >
                      {item.title}
                    </Link>
                  )
                )}
                
                {mergedTheme.navbarShowLanguage && languages.length > 0 && (
                  <div className="py-2">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Language</p>
                    <div className="grid grid-cols-2 gap-1">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant="outline"
                          size="sm"
                          className="justify-start"
                        >
                          {lang.name || lang.code}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col gap-3 mt-4">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center">
                        <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center mr-2">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{username}</p>
                          <p className="text-xs opacity-70">WSO2 API Manager</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {defaultUserMenuItems.map((item) => (
                          <Button
                            key={item.href}
                            variant="ghost"
                            className="flex items-center justify-start w-full"
                            onClick={item.action ? item.action : item.href !== "#" ? () => router.push(item.href) : undefined}
                          >
                            <item.icon className="h-4 w-4 mr-2" />
                            <span>{item.title}</span>
                          </Button>
                        ))}
                      </div>
                    </>
                  ) : isPublicMode ? (
                    <>
                      {/* Mobile API Console Button */}
                      <Button 
                        variant="outline"
                        className="flex items-center justify-center gap-2 transition-all"
                        onClick={navigateToApiConsole}
                      >
                        <Code className="h-4 w-4" />
                        <span>API Console</span>
                      </Button>
                      
                      {/* Mobile Sign In Button */}
                      <Button 
                        className="flex items-center justify-center gap-2"
                        style={{ backgroundColor: mergedTheme.primaryColor }}
                        onClick={() => setAuthModalOpen(true)}
                      >
                        <LogIn className="h-4 w-4" />
                        <span>Sign In</span>
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* Mobile Sign In Button */}
                      <Button 
                        variant="outline"
                        className="flex items-center justify-center gap-2 transition-all"
                        onClick={() => setAuthModalOpen(true)}
                      >
                        <LogIn className="h-4 w-4" />
                        <span>Sign In</span>
                      </Button>
                      
                      {/* Mobile Sign Up Button */}
                      <Button 
                        className="flex items-center justify-center gap-2"
                        style={{ backgroundColor: mergedTheme.primaryColor }}
                        onClick={() => setAuthModalOpen(true)}
                      >
                        <UserPlus className="h-4 w-4" />
                        <span>Sign Up</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* WSO2 Auth Modal */}
      <WSO2AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} onAuthSuccess={handleAuthSuccess} />
    </>
  );
}
