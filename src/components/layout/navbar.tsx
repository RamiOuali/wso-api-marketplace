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
import { useThemeContext } from '@/providers/ThemeProvider';

export function Navbar() {
  const { theme } = useThemeContext();
  const pathname = usePathname();

  // Add early return with loading indicator
  if (!theme) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div>Loading...</div>
          </div>
        </div>
      </header>
    );
  }

  // Create default nav items as a fallback
  const defaultNavItems = [
    { title: 'Home', href: '/', isExternal: false },
    { title: 'APIs', href: '/apis', isExternal: false },
    { title: 'Documentation', href: '/docs', isExternal: false },
  ];

  // Safely access navItems with fallback
  const navItems = theme.navItems || defaultNavItems;

  const filteredNavItems = theme.navbarShowUserMenu
    ? navItems
    : navItems.filter((item) => item.title !== 'About Us');

  // Get languages with fallback
  const languages = theme.languages || [];

  // Default logo path
  const logoPath = theme.navbarLogo || '/images/logo.png';

  return (
    <header
      className={cn(
        'top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      )}
      style={{
        position: theme.navbarPosition,
        fontFamily: theme.bodyFont,
        backgroundColor: theme.navbarBackground,
        color: theme.navbarTextColor,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-auto">
                <Image
                  src={logoPath}
                  alt="Logo"
                  width={107}
                  height={24}
                  className="object-contain"
                  style={{ maxHeight: '24px' }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex space-x-8">
              {filteredNavItems.map((item) => (
                <li key={item.href}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex items-center text-sm font-medium transition-colors hover:text-primary',
                        'text-muted-foreground'
                      )}
                      style={{ color: theme.navbarTextColor }}
                    >
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center text-sm font-medium transition-colors hover:text-primary',
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                      style={{
                        color:
                          pathname === item.href
                            ? theme.navbarPrimaryColor
                            : theme.navbarTextColor,
                      }}
                    >
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop action buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {theme.navbarShowLanguage && languages.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>{languages[0].code.toUpperCase()}</span>
                    <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code}>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <Button
              variant="ghost"
              className="font-medium"
              size="sm"
              style={{ color: theme.navbarTextColor }}
            >
              Sign In
            </Button>

            <Button
              style={{ backgroundColor: theme.navbarPrimaryColor }}
              className="text-white h-8"
              size="sm"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 sm:w-80">
              {/* Rest of your mobile menu code with the same safety checks */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
