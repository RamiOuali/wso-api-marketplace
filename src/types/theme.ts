export interface Theme {
  id: number;
  name: string;
  isActive: boolean;
  navbarLogo: string;
  navbarPrimaryColor: string;
  navbarTextColor: string;
  navbarFont: string;
  navbarShowAboutUs: boolean;
  navbarShowLanguage: boolean;
  siteTitle?: string | null;
  siteDescription?: string | null;
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  primaryBgColor?: string | null;
  secondaryBgColor?: string | null;
  footerLogo?: string | null;
  footerText?: string | null;
  termsUrl?: string | null;
  privacyUrl?: string | null;
  supportUrl?: string | null;
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