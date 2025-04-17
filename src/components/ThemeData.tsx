import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function getThemeData() {
  try {
    const theme = await prisma.siteTheme.findFirst({
      where: {
        isActive: true,
      },
      include: {
        navItems: true,
        languages: true,
      },
    });

    if (!theme) {
      console.error('No active theme found');
      return null;
    }

    return {
      id: theme.id,
      name: theme.name,
      isActive: theme.isActive,
      navbarLogo: theme.navbarLogo || '/default-logo.png',
      navbarPrimaryColor: theme.navbarPrimaryColor || '#000000',
      navbarTextColor: theme.navbarTextColor || '#ffffff',
      navbarFont: theme.navbarFont || 'Inter',
      navbarShowAboutUs: theme.navbarShowAboutUs,
      navbarShowLanguage: theme.navbarShowLanguage,
      siteTitle: theme.siteTitle,
      siteDescription: theme.siteDescription,
      heroTitle: theme.heroTitle,
      heroSubtitle: theme.heroSubtitle,
      primaryBgColor: theme.primaryBgColor,
      secondaryBgColor: theme.secondaryBgColor,
      footerLogo: theme.footerLogo,
      footerText: theme.footerText,
      termsUrl: theme.termsUrl,
      privacyUrl: theme.privacyUrl,
      supportUrl: theme.supportUrl,
      navItems: theme.navItems.map(item => ({
        title: item.title,
        href: item.href,
        isExternal: item.isExternal,
        icon: item.icon,
      })),
      languages: theme.languages.map(lang => ({
        name: lang.name,
        code: lang.code,
      })),
    };
  } catch (error) {
    console.error('Error fetching theme data:', error);
    return null;
  }
} 