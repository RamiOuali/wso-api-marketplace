import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export interface NavbarSettings {
  logo: string;
  primaryColor: string;
  textColor: string;
  fontFamily: string;
  showAboutUs: boolean;
  showLanguage: boolean;
  navItems: {
    title: string;
    href: string;
    isExternal?: boolean;
    icon?: string | null;
  }[];
  languages: {
    name: string;
    code: string;
  }[];
}

export async function getNavbarSettings(): Promise<NavbarSettings> {
  try {
    // Get active theme
    const activeTheme = await prisma.siteTheme.findFirst({
      where: { isActive: true },
    });

    // Get active nav items
    const navItems = await prisma.navItem.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });

    // Get active languages
    const languages = await prisma.language.findMany({
      where: { isActive: true },
    });

    return {
      logo: activeTheme?.navbarLogo || 'https://devportal.choreo.dev/themes/default/images/logo-black.svg',
      primaryColor: activeTheme?.navbarPrimaryColor || '#303f9f',
      textColor: activeTheme?.navbarTextColor || '#000000',
      fontFamily: activeTheme?.navbarFont || 'Geist, sans-serif',
      showAboutUs: activeTheme?.navbarShowAboutUs ?? true,
      showLanguage: activeTheme?.navbarShowLanguage ?? true,
      navItems: navItems.map(item => ({
        title: item.title,
        href: item.href,
        isExternal: item.isExternal,
        icon: item.icon,
      })),
      languages: languages.map(lang => ({
        name: lang.name,
        code: lang.code,
      })),
    };
  } catch (error) {
    console.error('Error fetching navbar settings:', error);
    // Return default settings if database query fails
    return {
      logo: 'https://devportal.choreo.dev/themes/default/images/logo-black.svg',
      primaryColor: '#303f9f',
      textColor: '#000000',
      fontFamily: 'Geist, sans-serif',
      showAboutUs: true,
      showLanguage: true,
      navItems: [
        { title: 'Documentation', href: '/docs' },
        { title: 'API List', href: '/apis' },
        { title: 'About Us', href: '/about' },
      ],
      languages: [
        { name: 'English', code: 'en' },
        { name: 'Español', code: 'es' },
      ],
    };
  }
} 