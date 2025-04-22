"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Globe, ChevronDown } from "lucide-react";

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
import { hover } from "framer-motion";

export function Navbar() {
  const { theme } = useThemeContext();
  const pathname = usePathname();

  if (!theme) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div>Loading...</div>
        </div>
      </header>
    );
  }

  const navItems = theme.navItems || [
    { title: 'Home', href: '/', isExternal: false },
    { title: 'APIs', href: '/apis', isExternal: false },
    { title: 'Documentation', href: '/docs', isExternal: false },
  ];

  const filteredNavItems = theme.navbarShowUserMenu
    ? navItems
    : navItems.filter((item) => item.title !== 'About Us');

  const languages = theme.languages || [];
  const logoPath = theme.navbarLogo || '/images/logo.png';

  return (
    <header
      className="top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{
        height: theme.navbarHeight,
        backgroundColor: theme.navbarBackground,
        color: theme.navbarTextColor,
        fontFamily: theme.bodyFont,
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-4"
        style={{ maxWidth: theme.containerWidth, height: theme.navbarHeight }}
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
                style={{ color: theme.navbarTextColor }}
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
                      ? theme.primaryColor
                      : theme.navbarTextColor,
                }}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center gap-2">
          {theme.navbarShowLanguage && languages.length > 0 && (
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

          {theme.navbarShowUserMenu && (
            <>
<Button
  variant="ghost"
  size="sm"
  className="custom-signin-btn"
  style={{
    '--navbar-text-color': theme.navbarTextColor,
    '--navbar-hover-color': theme.primaryColor,
    borderRadius: theme.buttonBorderRadius,
  } as React.CSSProperties}
>
  Sign In
</Button>
              <Button
                size="sm"
                style={{
                  backgroundColor: theme.primaryColor,
                  color: theme.buttonTextColor,
                  borderRadius: theme.buttonBorderRadius,
                }}
              >
                Sign Up
              </Button>
            </>
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
                    style={{ color: theme.textColor }}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium"
                    style={{ color: theme.textColor }}
                  >
                    {item.title}
                  </Link>
                )
              )}
              {theme.navbarShowUserMenu && (
                <>
                  <Button variant="outline">Sign In</Button>
                  <Button style={{ backgroundColor: theme.primaryColor }}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
