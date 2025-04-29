"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Globe, ChevronDown, LogIn, UserPlus, User, LogOut, Settings, HelpCircle, Code } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useThemeContext } from "@/providers/ThemeProvider";
import { AuthService } from "@/lib/auth-service";

export function Navbar() {
  const { theme } = useThemeContext() || { theme: null };
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [userInfo, setUserInfo] = React.useState(null);
  const authService = React.useRef<AuthService>(new AuthService());

  React.useEffect(() => {
    const initAuth = async () => {
      try {
        const isAuth = await authService.current.isAuthenticated();
        if (isAuth) {
          const userName = await authService.current.getUsername();
          const userInfo = await authService.current.fetchUserInfo();
          setUserInfo(userInfo);
          console.log("Fetched user info:", userInfo); // Debug: Log the user info
          setIsAuthenticated(true);
          setUsername(userName);
        }
      } catch (err) {
        console.error("Error initializing auth:", err);
      }
    };

    initAuth();
  }, []);

  const handleLogin = async () => {
    try {
      const isAvailable = await authService.current.isAvailable();
      if (!isAvailable) {
        alert("WSO2 Identity Server is not available. Please ensure the server is running.");
        return;
      }
      await authService.current.login(pathname);
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check the console for more details.");
    }
  };

  const handleLogout = async () => {
    try {
      await authService.current.logout();
      setIsAuthenticated(false);
      setUsername("");
      setUserInfo(null);
    } catch (err) {
      console.error("Logout error:", err);
      router.push("/");
    }
  };

  const navigateToApiConsole = () => {
    router.push("/wso2");
  };

  // Handle loading state
  if (!theme) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div>Loading...</div>
        </div>
      </header>
    );
  }

  // Default theme values
  const defaultTheme = {
    navItems: [
      { title: "Home", href: "/", isExternal: false },
      { title: "APIs", href: "/wso2", isExternal: false },
      { title: "Documentation", href: "/docs", isExternal: false },
    ],
    navbarShowUserMenu: true,
    languages: [],
    navbarLogo: "/images/logo.png",
    navbarPosition: "sticky",
    navbarHeight: "64px",
    navbarBackground: "transparent",
    navbarTextColor: "inherit",
    bodyFont: "inherit",
    containerWidth: "100%",
    primaryColor: "#007bff",
    buttonBorderRadius: "0.375rem",
    buttonTextColor: "white",
    textColor: "inherit",
    navbarShowLanguage: false,
  };

  const mergedTheme = { ...defaultTheme, ...theme };
  const navItems = mergedTheme.navItems || defaultTheme.navItems;
  const filteredNavItems = mergedTheme.navbarShowUserMenu
    ? navItems
    : navItems.filter((item) => item.title !== "About Us");
  const languages = mergedTheme.languages || [];
  const logoPath = mergedTheme.navbarLogo;

  const defaultUserMenuItems = [
    { title: "Profile", href: "/profile", icon: User },
    { title: "API Console", href: "/wso2", icon: Code },
    { title: "Settings", href: "/settings", icon: Settings },
    { title: "Help", href: "/help", icon: HelpCircle },
    { title: "Sign out", href: "#", icon: LogOut, action: handleLogout },
  ];

  // Function to render user avatar
  const renderUserAvatar = () => {
    // Check if userInfo exists and has a picture property
    if (userInfo && userInfo.picture) {
      return (
     <div className="h-8 w-8 rounded-full overflow-hidden">
        <img
          src={userInfo.picture}
          alt={username || "User"}
          className="w-full h-full object-cover"
        />
      </div>
      );
    }
    
    // Display first letter of username or default user icon
    return (
      <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
        {username ? (
          <span className="text-sm font-medium">{username.charAt(0).toUpperCase()}</span>
        ) : (
          <User className="h-4 w-4" />
        )}
      </div>
    );
  };

  // Function to render mobile user avatar
  const renderMobileUserAvatar = () => {
    if (userInfo && userInfo.picture) {
      return (
        <div className="h-9 w-9 rounded-full overflow-hidden">
        <img
          src={userInfo.picture}
          alt={username || "User"}
          className="w-full h-full object-cover"
        />
      </div>
      );
    }
    
    return (
      <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center">
        {username ? (
          <span className="text-sm font-medium">{username.charAt(0).toUpperCase()}</span>
        ) : (
          <User className="h-5 w-5" />
        )}
      </div>
    );
  };

  // Helper function to get user's email or group info for display
  const getUserSubtitle = () => {
    if (userInfo) {
      if (userInfo.email) return userInfo.email;
      if (userInfo.groups && userInfo.groups.length > 0) return `Group: ${userInfo.groups[0]}`;
    }
    return "WSO2 Identity";
  };

  return (
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
            src={logoPath || "/placeholder.svg"}
            alt="Logo"
            width={107}
            height={24}
            className="object-contain"
            style={{ maxHeight: "32px" }}
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
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
                style={{
                  color: pathname === item.href ? mergedTheme.primaryColor : mergedTheme.navbarTextColor,
                }}
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center gap-4">
          {mergedTheme.navbarShowLanguage && languages.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
                  <Globe className="h-4 w-4" />
                  <span>{languages[0].code.toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>{lang.name}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* User menu or Sign in/up buttons */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="group relative overflow-hidden px-5 py-2 transition-all duration-300 hover:bg-transparent"
                  style={{ color: mergedTheme.navbarTextColor }}
                >
                  <span className="relative z-10 flex items-center gap-2 font-medium">
                    {renderUserAvatar()}
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
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>{username}</span>
                    {userInfo && userInfo.email && (
                      <span className="text-xs text-muted-foreground">{userInfo.email}</span>
                    )}
                    {userInfo && userInfo.groups && userInfo.groups.length > 0 && (
                      <span className="text-xs text-muted-foreground mt-1">Group: {userInfo.groups.join(", ")}</span>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {defaultUserMenuItems.map((item) => (
                    <DropdownMenuItem
                      key={item.href}
                      onClick={item.action ? item.action : item.href !== "#" ? () => router.push(item.href) : undefined}
                      className="cursor-pointer"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="group relative overflow-hidden px-5 py-2 transition-all duration-300 hover:bg-transparent"
                style={{
                  color: mergedTheme.navbarTextColor,
                  borderRadius: mergedTheme.buttonBorderRadius,
                }}
                onClick={handleLogin}
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

              <Button
                className="group relative overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: mergedTheme.primaryColor,
                  color: mergedTheme.buttonTextColor,
                  borderRadius: mergedTheme.buttonBorderRadius,
                }}
                onClick={handleLogin}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <UserPlus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Sign Up
                </span>
                <span className="absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
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
                ),
              )}

              {mergedTheme.navbarShowLanguage && languages.length > 0 && (
                <div className="py-2">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Language</p>
                  <div className="grid grid-cols-2 gap-1">
                    {languages.map((lang) => (
                      <Button key={lang.code} variant="outline" size="sm" className="justify-start">
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
                      {renderMobileUserAvatar()}
                      <div className="ml-2">
                        <p className="font-medium text-sm">{username}</p>
                        <p className="text-xs opacity-70">{getUserSubtitle()}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {defaultUserMenuItems.map((item) => (
                        <Button
                          key={item.href}
                          variant="ghost"
                          className="flex items-center justify-start w-full"
                          onClick={
                            item.action ? item.action : item.href !== "#" ? () => router.push(item.href) : undefined
                          }
                        >
                          <item.icon className="h-4 w-4 mr-2" />
                          <span>{item.title}</span>
                        </Button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="flex items-center justify-center gap-2 transition-all"
                      onClick={handleLogin}
                    >
                      <LogIn className="h-4 w-4" />
                      <span>Sign In</span>
                    </Button>
                    <Button
                      className="flex items-center justify-center gap-2"
                      style={{ backgroundColor: mergedTheme.primaryColor }}
                      onClick={handleLogin}
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
  );
}
