"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

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
  SheetClose,
} from "@/components/ui/sheet";
import { useThemeContext } from '@/providers/ThemeProvider';

export function Navbar() {
  const { theme } = useThemeContext();
  const pathname = usePathname();

  if (!theme) {
    return null;
  }

  const filteredNavItems = theme.navbarShowAboutUs
    ? theme.navItems
    : theme.navItems.filter((item) => item.title !== 'About Us');

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      )}
      style={{
        fontFamily: theme.navbarFont,
        backgroundColor: theme.navbarPrimaryColor,
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
                  src={theme.navbarLogo}
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
            {theme.navbarShowLanguage && theme.languages.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>{theme.languages[0].code.toUpperCase()}</span>
                    <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {theme.languages.map((lang) => (
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
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b px-4 py-2">
                  <div className="relative h-7 w-auto">
                    <Image
                      src={theme.navbarLogo}
                      alt="Logo"
                      width={85}
                      height={20}
                      className="object-contain"
                      style={{ maxHeight: '20px' }}
                      priority
                    />
                  </div>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetTrigger>
                </div>

                <div className="flex flex-col space-y-6 px-4 py-6">
                  <nav className="flex flex-col space-y-4">
                    {filteredNavItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        {item.isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium transition-colors hover:text-primary text-muted-foreground"
                            style={{ color: theme.navbarTextColor }}
                          >
                            {item.icon && <span className="mr-1">{item.icon}</span>}
                            {item.title}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              'text-base font-medium transition-colors hover:text-primary',
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
                      </SheetClose>
                    ))}
                  </nav>

                  {theme.navbarShowLanguage && theme.languages.length > 0 && (
                    <div className="border-t pt-4">
                      <p
                        className="text-sm font-medium mb-2"
                        style={{ color: theme.navbarTextColor }}
                      >
                        Language
                      </p>
                      <div className="space-y-2">
                        {theme.languages.map((lang) => (
                          <button
                            key={lang.code}
                            className="w-full text-left px-2 py-1 text-sm rounded-md hover:bg-accent"
                            style={{ color: theme.navbarTextColor }}
                          >
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t pt-4 space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-medium"
                      style={{ color: theme.navbarTextColor }}
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full"
                      style={{ backgroundColor: theme.navbarPrimaryColor }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
