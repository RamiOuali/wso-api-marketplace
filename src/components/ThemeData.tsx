import { PrismaClient } from '@/generated/prisma';
import { Theme } from '@/types/theme';

const prisma = new PrismaClient();

export async function getThemeData(): Promise<Theme | null> {
  try {
    const theme = await prisma.siteTheme.findFirst({
      where: {
        isActive: true,
      },
      include: {
        navItems: true,
        languages: true,
        contentSections: true,
        banners: true,
        socialLinks: true,
        contactInfo: true,
      },
    });

    if (!theme) {
      console.error('No active theme found');
      return null;
    }

    // Map database theme to Theme interface with fallback values
    const mappedTheme: Theme = {
      id: theme.id,
      name: theme.name,
      isActive: theme.isActive,
      siteTitle: theme.siteTitle || 'API Marketplace',
      siteDescription: theme.siteDescription || 'Discover and connect with our APIs',
      siteLogo: theme.siteLogo || '/images/logo.png',
      favicon: theme.favicon || '/images/favicon.ico',
      primaryColor: theme.primaryColor || '#0070f3',
      secondaryColor: theme.secondaryColor || '#6c757d',
      accentColor: theme.accentColor || '#f97316',
      backgroundColor: theme.backgroundColor || '#ffffff',
      textColor: theme.textColor || '#333333',
      linkColor: theme.linkColor || '#0070f3',
      bodyFont: theme.bodyFont || 'Inter, sans-serif',
      headingFont: theme.headingFont || 'Inter, sans-serif',
      baseFontSize: theme.baseFontSize || '16px',
      headingFontSize: theme.headingFontSize || '3rem',
      containerWidth: theme.containerWidth || '1200px',
      contentWidth: theme.contentWidth || '800px',
      sidebarWidth: theme.sidebarWidth || '300px',
      navbarBackground: theme.navbarBackground || '#ffffff',
      navbarTextColor: theme.navbarTextColor || '#333333',
      navbarLogo: theme.navbarLogo || '/images/logo.png',
      navbarHeight: theme.navbarHeight || '80px',
      navbarPosition: theme.navbarPosition || 'sticky',
      navbarShowSearch: theme.navbarShowSearch || false,
      navbarShowLanguage: theme.navbarShowLanguage || false,
      navbarShowUserMenu: theme.navbarShowUserMenu || true,
      navbarShowNotifications: theme.navbarShowNotifications || false,
      footerBackground: theme.footerBackground || '#121826',
      footerTextColor: theme.footerTextColor || '#ffffff',
      footerLogo: theme.footerLogo || '/images/logo-white.png',
      footerCopyright: theme.footerCopyright || `© ${new Date().getFullYear()} API Marketplace. All rights reserved.`,
      footerShowSocial: theme.footerShowSocial || true,
      footerShowNewsletter: theme.footerShowNewsletter || false,
      footerColumns: theme.footerColumns || {},

      // Hero section - these are the critical ones for your issue
      heroBackground: theme.heroBackground || '#121826',
      heroBackgroundImage: theme.heroBackgroundImage || '/images/hero-background.jpg',
      heroTextColor: theme.heroTextColor || '#ffffff',
      heroTitle: theme.heroTitle || 'Welcome to our API Marketplace',
      heroSubtitle: theme.heroSubtitle || 'Discover, connect, and integrate with our extensive API collection',
      heroButtonText: theme.heroButtonText || 'Browse APIs',
      heroButtonLink: theme.heroButtonLink || '/apis',
      heroButtonColor: theme.heroButtonColor || '#0070f3',
      heroOverlayColor: theme.heroOverlayColor || 'rgba(0,0,0,0.5)',
      heroOverlayOpacity: theme.heroOverlayOpacity || 0.6,

      buttonPrimaryColor: theme.buttonPrimaryColor || '#0070f3',
      buttonSecondaryColor: theme.buttonSecondaryColor || '#6c757d',
      buttonTextColor: theme.buttonTextColor || '#ffffff',
      buttonBorderRadius: theme.buttonBorderRadius || '0.375rem',
      buttonPadding: theme.buttonPadding || '0.5rem 1rem',
      inputBackground: theme.inputBackground || '#ffffff',
      inputBorderColor: theme.inputBorderColor || '#d1d5db',
      inputTextColor: theme.inputTextColor || '#333333',
      inputFocusColor: theme.inputFocusColor || '#0070f3',
      inputBorderRadius: theme.inputBorderRadius || '0.375rem',
      cardBackground: theme.cardBackground || '#ffffff',
      cardBorderColor: theme.cardBorderColor || '#e5e7eb',
      cardBorderRadius: theme.cardBorderRadius || '0.5rem',
      cardShadow: theme.cardShadow || '0 2px 4px rgba(0,0,0,0.1)',
      cardPadding: theme.cardPadding || '1rem',
      successColor: theme.successColor || '#10b981',
      warningColor: theme.warningColor || '#f59e0b',
      errorColor: theme.errorColor || '#ef4444',
      infoColor: theme.infoColor || '#3b82f6',
      metaTitle: theme.metaTitle || 'API Marketplace',
      metaDescription: theme.metaDescription || 'Discover and connect with our APIs',
      metaKeywords: theme.metaKeywords || 'api, marketplace, integration',
      createdAt: theme.createdAt,
      updatedAt: theme.updatedAt,

      // Add any other properties from your theme that are in your Theme interface
    };

    console.log("Mapped theme data with fallbacks:", mappedTheme);
    return mappedTheme;
  } catch (error) {
    console.error('Error fetching theme data:', error);
    return null;
  }
}
