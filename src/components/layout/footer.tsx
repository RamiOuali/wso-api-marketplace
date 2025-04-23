"use client"
import Link from "next/link"
import Image from "next/image"
import { Mail, ArrowRight, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useThemeContext } from "@/providers/ThemeProvider"

export function Footer() {
  const context = useThemeContext()
  const theme = context?.theme || null

  // Get current year
  const currentYear = new Date().getFullYear()

  // Fallback footer when theme is unavailable
  if (!theme) {
    return (
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-sm">© {currentYear} API Marketplace</p>
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

  // Enhanced social links
  const defaultSocialLinks = [
    { name: "Twitter", url: "https://twitter.com",},
    { name: "LinkedIn", url: "https://linkedin.com", },
    { name: "GitHub", url: "https://github.com",},
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Discord", url: "https://discord.com"},
  ]

  const socialLinks = theme.socialLinks || defaultSocialLinks

  // Enhanced footer columns with more informative links
  const defaultFooterColumns = {
    products: {
      title: "Products",
      links: [
        { title: "All APIs", href: "/apis" },
        { title: "API Documentation", href: "/docs" },
        { title: "Pricing Plans", href: "/pricing" },
        { title: "API Console", href: "/console" },
        { title: "SDKs & Libraries", href: "/sdks" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { title: "Developer Blog", href: "/blog" },
        { title: "Technical Support", href: "/support" },
        { title: "API Tutorials", href: "/tutorials" },
        { title: "Knowledge Base", href: "/knowledge-base" },
        { title: "Community Forum", href: "/forum" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { title: "About Us", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Contact Us", href: "/contact" },
        { title: "Partners", href: "/partners" },
        { title: "Press Kit", href: "/press" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Cookie Policy", href: "/cookies" },
        { title: "Data Processing", href: "/data-processing" },
        { title: "Security", href: "/security" },
      ],
    },
  }

  const footerColumns = theme.footerColumns || defaultFooterColumns
  const logoPath = theme.footerLogo || "/images/logo-white.png"

  return (
    <footer
      className="border-t relative"
      style={{
        fontFamily: theme.bodyFont,
        backgroundColor: theme.footerBackground,
        color: theme.footerTextColor,
      }}
    >
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-6"
          style={{ fill: theme.primaryColor || '#6366f1', opacity: 0.15 }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-auto mb-6">
                <Image
                  src={logoPath}
                  alt={theme.siteTitle || "API Marketplace"}
                  width={150}
                  height={40}
                  className="object-contain"
                  style={{ maxHeight: "40px" }}
                />
              </div>
            </Link>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed opacity-90"
              style={{ fontSize: `calc(${theme.baseFontSize || '16px'} * 0.875)` }}
            >
              {theme.siteDescription || 
                "Discover and connect with our extensive API collection to build powerful integrations and unleash your application's potential. Join thousands of developers who trust our platform for reliable API solutions."}
            </p>
            
            {/* Contact information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <a 
                  href="mailto:support@apimarketplace.com"
                  className="text-sm hover:underline"
                  style={{ opacity: 0.9 }}
                >
                  support@apimarketplace.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm" style={{ opacity: 0.9 }}>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 opacity-80 mt-1" />
                <span className="text-sm" style={{ opacity: 0.9 }}>
                  123 API Street, Suite 200<br />
                  San Francisco, CA 94107
                </span>
              </div>
            </div>

            {/* Social Links */}
            {theme.footerShowSocial !== false && (
              <div className="mt-8 flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-full p-2 transition-all hover:scale-110"
                    style={{ 
                      backgroundColor: `${theme.primaryColor}20`,
                      border: `1px solid ${theme.primaryColor}40`
                    }}
                    aria-label={link.name}
                  >
                    <div className="relative h-5 w-5">
                      <Image
                        src={link.icon || "/placeholder.svg"}
                        alt={link.name}
                        width={20}
                        height={20}
                        className="object-contain opacity-80 transition-opacity group-hover:opacity-100"
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
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: theme.footerTextColor, opacity: 0.95 }}
                >
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="flex items-center text-sm transition-all hover:translate-x-1"
                        style={{
                          color: theme.footerTextColor,
                          opacity: 0.85,
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = theme.linkColor || theme.primaryColor;
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = theme.footerTextColor;
                          e.currentTarget.style.opacity = "0.85";
                        }}
                      >
                        <span>{link.title}</span>
                        <ArrowRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          {/* Newsletter Section */}
          {theme.footerShowNewsletter !== false && (
            <div className="lg:col-span-2 space-y-6">
              <h4
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: theme.footerTextColor }}
              >
                Subscribe to Our Newsletter
              </h4>
              <p
                className="text-sm opacity-90"
                style={{ fontSize: `calc(${theme.baseFontSize || '16px'} * 0.875)` }}
              >
                Get the latest API updates, tech news, and exclusive offers delivered directly to your inbox.
              </p>
              <div className="flex max-w-md flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow border-opacity-30 bg-opacity-10"
                  style={{
                    backgroundColor: `${theme.inputBackground || '#ffffff'}20`,
                    borderColor: `${theme.inputBorderColor || '#ffffff'}40`,
                    color: theme.footerTextColor,
                    borderRadius: theme.inputBorderRadius || '0.375rem',
                  }}
                />
                <Button
                  type="submit"
                  className="transition-all hover:scale-105"
                  style={{
                    backgroundColor: theme.buttonPrimaryColor || theme.primaryColor,
                    color: theme.buttonTextColor || '#ffffff',
                    borderRadius: theme.buttonBorderRadius || '0.375rem',
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs opacity-70 mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          )}
        </div>

        {/* Awards and Certifications */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-sm font-medium mb-4" style={{ opacity: 0.9 }}>
              Trusted by Developers Worldwide
            </h5>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/icons/award-shield.svg"
                    alt="Security Certified"
                    width={40}
                    height={40}
                    className="object-contain opacity-80"
                  />
                </div>
                <span className="text-xs font-medium" style={{ opacity: 0.8 }}>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/icons/award-star.svg"
                    alt="Top Rated"
                    width={40}
                    height={40}
                    className="object-contain opacity-80"
                  />
                </div>
                <span className="text-xs font-medium" style={{ opacity: 0.8 }}>Top Rated 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/icons/award-check.svg"
                    alt="GDPR Compliant"
                    width={40}
                    height={40}
                    className="object-contain opacity-80"
                  />
                </div>
                <span className="text-xs font-medium" style={{ opacity: 0.8 }}>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/icons/award-uptime.svg"
                    alt="99.9% Uptime"
                    width={40}
                    height={40}
                    className="object-contain opacity-80"
                  />
                </div>
                <span className="text-xs font-medium" style={{ opacity: 0.8 }}>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p
              className="text-sm opacity-90"
              style={{ fontSize: `calc(${theme.baseFontSize || '16px'} * 0.875)` }}
            >
              {theme.footerCopyright || `© ${currentYear} API Marketplace. All rights reserved.`}
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <Link
                href="/privacy"
                className="text-sm transition-all hover:translate-x-1"
                style={{ color: theme.footerTextColor, opacity: 0.85 }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = theme.linkColor || theme.primaryColor;
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = theme.footerTextColor;
                  e.currentTarget.style.opacity = "0.85";
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm transition-all hover:translate-x-1"
                style={{ color: theme.footerTextColor, opacity: 0.85 }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = theme.linkColor || theme.primaryColor;
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = theme.footerTextColor;
                  e.currentTarget.style.opacity = "0.85";
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm transition-all hover:translate-x-1"
                style={{ color: theme.footerTextColor, opacity: 0.85 }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = theme.linkColor || theme.primaryColor;
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = theme.footerTextColor;
                  e.currentTarget.style.opacity = "0.85";
                }}
              >
                Cookie Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-sm transition-all hover:translate-x-1"
                style={{ color: theme.footerTextColor, opacity: 0.85 }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = theme.linkColor || theme.primaryColor;
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = theme.footerTextColor;
                  e.currentTarget.style.opacity = "0.85";
                }}
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
