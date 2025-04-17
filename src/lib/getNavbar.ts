// src/lib/getNavbarData.ts
import prisma from './prisma'

export async function getNavbarData() {
  try {
    // Get active theme
    const theme = await prisma.siteTheme.findFirst({
      where: { isActive: true }
    }) || await prisma.siteTheme.findFirst() // Fallback to any theme
    
    // Get active nav items
    const navItems = await prisma.navItem.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    
    // Get active languages
    const languages = await prisma.language.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    })
    
    return {
      logo: theme?.navbarLogo || "https://devportal.choreo.dev/themes/default/images/logo-black.svg",
      primaryColor: theme?.navbarPrimaryColor || "#303f9f",
      textColor: theme?.navbarTextColor || "#000000",
      fontFamily: theme?.navbarFont || "Geist, sans-serif",
      showAboutUs: theme?.navbarShowAboutUs ?? true,
      showInternationalization: theme?.navbarShowLanguage ?? true,
      navItems: navItems.map(item => ({
        title: item.title,
        href: item.href,
        disabled: false,
        isExternal: item.isExternal,
        icon: item.icon
      })),
      languages: languages.map(lang => ({
        name: lang.name,
        code: lang.code
      }))
    }
  } catch (error) {
    console.error("Failed to fetch navbar data:", error)
    // Return defaults
    return {
      logo: "https://devportal.choreo.dev/themes/default/images/logo-black.svg",
      primaryColor: "#303f9f",
      textColor: "#000000",
      fontFamily: "Geist, sans-serif",
      showAboutUs: true,
      showInternationalization: true,
      navItems: [
        { title: "Documentation", href: "/docs" },
        { title: "API List", href: "/apis" },
        { title: "About Us", href: "/about" }
      ],
      languages: [
        { name: "English", code: "en" },
        { name: "Español", code: "es" }
      ]
    }
  }
}
