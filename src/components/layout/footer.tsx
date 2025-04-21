"use client"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useThemeContext } from "@/providers/ThemeProvider"

export function Footer() {
  const context = useThemeContext()
  const theme = context?.theme || null

  // Fallback footer when theme is unavailable
  if (!theme) {
    return (
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-sm">© {new Date().getFullYear()} API Marketplace</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Default social links
  const defaultSocialLinks = [
    { name: "Twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
    { name: "GitHub", url: "https://github.com", icon: "/icons/github.svg" },
  ]

  const socialLinks = theme.socialLinks || defaultSocialLinks

  // Default footer columns
  const defaultFooterColumns = {
    products: {
      title: "Products",
      links: [
        { title: "APIs", href: "/apis" },
        { title: "Documentation", href: "/docs" },
        { title: "Pricing", href: "/pricing" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { title: "Blog", href: "/blog" },
        { title: "Support", href: "/support" },
        { title: "FAQ", href: "/faq" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { title: "About", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Contact", href: "/contact" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Cookie Policy", href: "/cookies" },
      ],
    },
  }

  const footerColumns = theme.footerColumns || defaultFooterColumns
  const logoPath = theme.footerLogo || "/images/logo-white.png"

  return (
    <footer
      className="border-t"
      style={{
        fontFamily: theme.bodyFont,
        backgroundColor: theme.footerBackground,
        color: theme.footerTextColor,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-auto mb-6">
                <Image
                  src={logoPath}
                  alt={theme.siteTitle || "API Marketplace"}
                  width={120}
                  height={32}
                  className="object-contain"
                  style={{ maxHeight: "32px" }}
                />
              </div>
            </Link>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed opacity-90"
              style={{ fontSize: `calc(${theme.baseFontSize} * 0.875)` }}
            >
              {theme.siteDescription || "Discover and connect with our APIs to build powerful integrations."}
            </p>
            {/* Social Links */}
            {theme.footerShowSocial && (
              <div className="mt-8 flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-full p-2 transition-all hover:bg-white/10"
                    aria-label={link.name}
                  >
                    <div className="relative h-6 w-6">
                      <Image
                        src={link.icon || "/placeholder.svg"}
                        alt={link.name}
                        width={24}
                        height={24}
                        className="object-contain opacity-80 transition-opacity group-hover:opacity-100"
                        style={{ filter: "grayscale(20%)" }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Columns */}
          {Object.keys(footerColumns).map((key) => {
            const column = footerColumns[key]
            return (
              <div key={key} className="space-y-4">
                <h4
                  className="text-sm font-medium uppercase tracking-widest"
                  style={{ color: theme.footerTextColor, opacity: 0.95 }}
                >
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm transition-all hover:translate-x-1"
                        style={{
                          color: theme.footerTextColor,
                          opacity: 0.85,
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = theme.linkColor)}
                        onMouseOut={(e) => (e.currentTarget.style.color = theme.footerTextColor)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          {/* Newsletter Section */}
          {theme.footerShowNewsletter && (
            <div className="lg:col-span-2 space-y-6">
              <h4
                className="text-sm font-medium uppercase tracking-widest"
                style={{ color: theme.footerTextColor }}
              >
                Stay Updated
              </h4>
              <p
                className="text-sm opacity-90"
                style={{ fontSize: `calc(${theme.baseFontSize} * 0.875)` }}
              >
                Subscribe to our newsletter for the latest API updates and features.
              </p>
              <div className="flex max-w-md space-x-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="border-opacity-30 bg-opacity-10"
                  style={{
                    backgroundColor: `${theme.inputBackground}20`,
                    borderColor: `${theme.inputBorderColor}40`,
                    color: theme.footerTextColor,
                    borderRadius: theme.inputBorderRadius,
                  }}
                />
                <Button
                  type="submit"
                  className="transition-all hover:scale-105"
                  style={{
                    backgroundColor: theme.buttonPrimaryColor,
                    color: theme.buttonTextColor,
                    borderRadius: theme.buttonBorderRadius,
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p
              className="text-sm opacity-90"
              style={{ fontSize: `calc(${theme.baseFontSize} * 0.875)` }}
            >
              {theme.footerCopyright || `© ${new Date().getFullYear()} API Marketplace. All rights reserved.`}
            </p>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-sm transition-all hover:translate-x-1"
                style={{ color: theme.footerTextColor, opacity: 0.85 }}
                onMouseOver={(e) => (e.currentTarget.style.color = theme.linkColor)}
                onMouseOut={(e) => (e.currentTarget.style.color = theme.footerTextColor)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm transition-all hover:translate-x-1"
                style={{ color: theme.footerTextColor, opacity: 0.85 }}
                onMouseOver={(e) => (e.currentTarget.style.color = theme.linkColor)}
                onMouseOut={(e) => (e.currentTarget.style.color = theme.footerTextColor)}
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm transition-all hover:translate-x-1"
                style={{ color: theme.footerTextColor, opacity: 0.85 }}
                onMouseOver={(e) => (e.currentTarget.style.color = theme.linkColor)}
                onMouseOut={(e) => (e.currentTarget.style.color = theme.footerTextColor)}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
