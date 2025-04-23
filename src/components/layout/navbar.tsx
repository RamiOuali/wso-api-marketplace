"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Globe, ChevronDown, LogIn, UserPlus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useThemeContext } from "@/providers/ThemeProvider";

export function Navbar() {
  const { theme } = useThemeContext() || { theme: null };
  const pathname = usePathname();

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

  // Default values for the theme
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

  const navItems = mergedTheme.navItems;
  
  const filteredNavItems = mergedTheme.navbarShowUserMenu
    ? navItems
    : navItems.filter((item) => item.title !== 'About Us');

  const languages = mergedTheme.languages || [];
  const logoPath = mergedTheme.navbarLogo;

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

          {mergedTheme.navbarShowUserMenu && (
            <div className="flex items-center gap-3">
              {/* Creative Sign In Button */}
              <Button
                variant="ghost"
                className="group relative overflow-hidden px-5 py-2 transition-all duration-300 hover:bg-transparent"
                style={{
                  color: mergedTheme.navbarTextColor,
                  borderRadius: mergedTheme.buttonBorderRadius,
                }}
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
              {mergedTheme.navbarShowUserMenu && (
                <div className="flex flex-col gap-3 mt-4">
                  {/* Mobile Sign In Button */}
                  <Button 
                    variant="outline"
                    className="flex items-center justify-center gap-2 transition-all"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </Button>
                  
                  {/* Mobile Sign Up Button */}
                  <Button 
                    className="flex items-center justify-center gap-2"
                    style={{ backgroundColor: mergedTheme.primaryColor }}
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
