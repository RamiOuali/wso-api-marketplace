
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface NavbarTheme {
  logo: string
  primaryColor: string
  textColor: string
  fontFamily: string
  showAboutUs: boolean
  showInternationalization: boolean
  navItems: {
    title: string
    href: string
    disabled?: boolean
    isExternal?: boolean
    icon?: string
  }[]
  languages: {
    name: string
    code: string
  }[]
}

export async function getNavbarTheme(): Promise<NavbarTheme> {
  // Get active theme
  const activeTheme = await prisma.siteTheme.findFirst({
    where: { isActive: true },
  })

  // If no active theme, return default values
  if (!activeTheme) {
    return {
      logo: 'https://devportal.choreo.dev/themes/default/images/logo-black.svg',
      primaryColor: '#303f9f',
      textColor: '#000000',
      fontFamily: 'Geist, sans-serif',
      showAboutUs: true,
      showInternationalization: true,
      navItems: [
        { title: 'Documentation', href: '/docs' },
        { title: 'API List', href: '/apis' },
        { title: 'About Us', href: '/about' },
      ],
      languages: [
        { name: 'English', code: 'en' },
        { name: 'Español', code: 'es' },
      ],
    }
  }

  // Get active navigation items
  const navItems = await prisma.navItem.findMany({
    where: { isActive: true },
    orderBy: { order: 'asc' },
  })

  // Get active languages
  const languages = await prisma.language.findMany({
    where: { isActive: true },
    select: { name: true, code: true },
  })

  // Return theme with active navItems and languages
  return {
    logo: activeTheme.navbarLogo,
    primaryColor: activeTheme.navbarPrimaryColor,
    textColor: activeTheme.navbarTextColor,
    fontFamily: activeTheme.navbarFont,
    showAboutUs: activeTheme.navbarShowAboutUs,
    showInternationalization: activeTheme.navbarShowLanguage,
    navItems: navItems.map(item => ({
      title: item.title,
      href: item.href,
      isExternal: item.isExternal,
      icon: item.icon,
    })),
    languages,
  }
}

export async function updateNavbarTheme(themeId: number, updates: Partial<NavbarTheme>) {
  return prisma.siteTheme.update({
    where: { id: themeId },
    data: {
      navbarLogo: updates.logo,
      navbarPrimaryColor: updates.primaryColor,
      navbarTextColor: updates.textColor,
      navbarFont: updates.fontFamily,
      navbarShowAboutUs: updates.showAboutUs,
      navbarShowLanguage: updates.showInternationalization,
    },
  })
}
