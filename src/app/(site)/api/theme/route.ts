import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/theme - Get active theme
export async function GET() {
  try {
    const theme = await prisma.siteTheme.findFirst({
      where: { isActive: true },
      include: {
        navItems: true,
        languages: true,
        contentSections: true,
        banners: true,
        socialLinks: true,
        contactInfo: true,
      },
    })

    if (!theme) {
      // Return default theme if no active theme exists
      return NextResponse.json({
        name: "Default Theme",
        isActive: true,
        siteTitle: "WSO2 API Marketplace",
        siteDescription: "Discover and connect with our APIs",
        siteLogo: "/images/logo.png",
        favicon: "/images/favicon.ico",
        primaryColor: "#0070f3",
        secondaryColor: "#6c757d",
        accentColor: "#f97316",
        backgroundColor: "#ffffff",
        textColor: "#333333",
        linkColor: "#0070f3",
        // Hero section defaults
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
        // Other default properties...
      })
    }

    // Ensure all hero properties have fallback values
    const enhancedTheme = {
      ...theme,
      // Provide fallbacks for hero section properties
      heroBackground: theme.heroBackground || "#121826",
      heroBackgroundImage: theme.heroBackgroundImage || "/images/hero-background.jpg",
      heroTextColor: theme.heroTextColor || "#ffffff",
      heroTitle: theme.heroTitle || "Welcome to our API Marketplace",
      heroSubtitle: theme.heroSubtitle || "Discover, connect, and integrate with our APIs",
      heroButtonText: theme.heroButtonText || "Browse APIs",
      heroButtonLink: theme.heroButtonLink || "/apis",
      heroButtonColor: theme.heroButtonColor || "#0070f3",
      heroOverlayColor: theme.heroOverlayColor || "rgba(0,0,0,0.5)",
      heroOverlayOpacity: theme.heroOverlayOpacity || 0.6,
    }

    return NextResponse.json(enhancedTheme)
  } catch (error) {
    console.error("Error fetching theme:", error)
    return NextResponse.json({ error: "Failed to fetch theme" }, { status: 500 })
  }
}
// POST /api/theme - Create new theme
export async function POST(request: Request) {
  try {
    const data = await request.json()

    const theme = await prisma.siteTheme.create({
      data: {
        name: data.name,
        isActive: data.isActive || false,
        siteTitle: data.siteTitle,
        siteDescription: data.siteDescription,
        siteLogo: data.siteLogo,
        favicon: data.favicon,
        primaryColor: data.primaryColor,
        secondaryColor: data.secondaryColor,
        accentColor: data.accentColor,
        backgroundColor: data.backgroundColor,
        textColor: data.textColor,
        linkColor: data.linkColor,
        bodyFont: data.bodyFont,
        headingFont: data.headingFont,
        baseFontSize: data.baseFontSize,
        headingFontSize: data.headingFontSize,
        containerWidth: data.containerWidth,
        contentWidth: data.contentWidth,
        sidebarWidth: data.sidebarWidth,
        navbarBackground: data.navbarBackground,
        navbarTextColor: data.navbarTextColor,
        navbarLogo: data.navbarLogo,
        navbarHeight: data.navbarHeight,
        navbarPosition: data.navbarPosition,
        navbarShowSearch: data.navbarShowSearch,
        navbarShowLanguage: data.navbarShowLanguage,
        navbarShowUserMenu: data.navbarShowUserMenu,
        navbarShowNotifications: data.navbarShowNotifications,
        footerBackground: data.footerBackground,
        footerTextColor: data.footerTextColor,
        footerLogo: data.footerLogo,
        footerCopyright: data.footerCopyright,
        footerShowSocial: data.footerShowSocial,
        footerShowNewsletter: data.footerShowNewsletter,
        footerColumns: data.footerColumns,
        heroBackground: data.heroBackground,
        heroBackgroundImage: data.heroBackgroundImage,
        heroTextColor: data.heroTextColor,
        heroTitle: data.heroTitle,
        heroSubtitle: data.heroSubtitle,
        heroButtonText: data.heroButtonText,
        heroButtonLink: data.heroButtonLink,
        heroButtonColor: data.heroButtonColor,
        heroOverlayColor: data.heroOverlayColor,
        heroOverlayOpacity: data.heroOverlayOpacity,
        buttonPrimaryColor: data.buttonPrimaryColor,
        buttonSecondaryColor: data.buttonSecondaryColor,
        buttonTextColor: data.buttonTextColor,
        buttonBorderRadius: data.buttonBorderRadius,
        buttonPadding: data.buttonPadding,
        inputBackground: data.inputBackground,
        inputBorderColor: data.inputBorderColor,
        inputTextColor: data.inputTextColor,
        inputFocusColor: data.inputFocusColor,
        inputBorderRadius: data.inputBorderRadius,
        cardBackground: data.cardBackground,
        cardBorderColor: data.cardBorderColor,
        cardBorderRadius: data.cardBorderRadius,
        cardShadow: data.cardShadow,
        cardPadding: data.cardPadding,
        successColor: data.successColor,
        warningColor: data.warningColor,
        errorColor: data.errorColor,
        infoColor: data.infoColor,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        googleAnalyticsId: data.googleAnalyticsId,
        googleTagManagerId: data.googleTagManagerId,
        facebookPixelId: data.facebookPixelId,
      },
    })

    return NextResponse.json(theme)
  } catch (error) {
    console.error("Error creating theme:", error)
    return NextResponse.json({ error: "Failed to create theme" }, { status: 500 })
  }
}

// PUT /api/theme - Update theme
export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const { id: idString, ...updateData } = data
    const id = Number.parseInt(idString, 10)

    if (!idString || isNaN(id)) {
      return NextResponse.json({ error: "Valid Theme ID is required" }, { status: 400 })
    }

    const theme = await prisma.siteTheme.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(theme)
  } catch (error) {
    console.error("Error updating theme:", error)
    return NextResponse.json({ error: "Failed to update theme" }, { status: 500 })
  }
}

// DELETE /api/theme - Delete theme
export async function DELETE(request: Request) {
  try {
    const { id: idString } = await request.json()
    const id = Number.parseInt(idString, 10)

    if (!idString || isNaN(id)) {
      return NextResponse.json({ error: "Valid Theme ID is required" }, { status: 400 })
    }

    await prisma.siteTheme.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Theme deleted successfully" })
  } catch (error) {
    console.error("Error deleting theme:", error)
    return NextResponse.json({ error: "Failed to delete theme" }, { status: 500 })
  }
}
