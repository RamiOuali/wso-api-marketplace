// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a default theme if it doesn't exist
  const theme = await prisma.siteTheme.upsert({
    where: { name: 'Default Theme2' },
    update: {},
    create: {
      name: 'Default Theme',
      isActive: true,
      siteTitle: 'API Marketplace',
      siteDescription: 'Discover and manage your APIs',
      siteLogo: '/logo.png',
      favicon: '/favicon.ico',
      primaryColor: '#2563eb',
      secondaryColor: '#1e40af',
      accentColor: '#3b82f6',
      backgroundColor: '#ffffff',
      textColor: '#1f2937',
      linkColor: '#2563eb',
      bodyFont: 'Inter',
      headingFont: 'Inter',
      baseFontSize: '16px',
      headingFontSize: '24px',
      containerWidth: '1200px',
      contentWidth: '800px',
      sidebarWidth: '300px',
      navbarBackground: '#ffffff',
      navbarTextColor: '#1f2937',
      navbarLogo: '/logo.png',
      navbarHeight: '64px',
      navbarPosition: 'fixed',
      navbarShowSearch: true,
      navbarShowLanguage: true,
      navbarShowUserMenu: true,
      navbarShowNotifications: true,
      footerBackground: '#f3f4f6',
      footerTextColor: '#1f2937',
      footerLogo: '/logo.png',
      footerCopyright: '© 2024 API Marketplace. All rights reserved.',
      footerShowSocial: true,
      footerShowNewsletter: true,
      footerColumns: 4,
      heroDesign:"Hero",
      heroBackground: '#2563eb',
      heroBackgroundImage: '/hero-bg.jpg',
      heroTextColor: '#ffffff',
      heroTitle: 'Welcome to API Marketplace',
      heroSubtitle: 'Discover, manage, and monetize your APIs with ease',
      heroButtonText: 'Get Started',
      heroButtonLink: '/signup',
      heroButtonColor: '#ffffff',
      heroOverlayColor: '#000000',
      heroOverlayOpacity: 0.5,
      buttonPrimaryColor: '#0070f3',
      buttonSecondaryColor: '#7928ca',
      buttonTextColor: '#ffffff',
      buttonBorderRadius: '4px',
      buttonPadding: '8px 16px',
      inputBackground: '#ffffff',
      inputBorderColor: '#e2e8f0',
      inputTextColor: '#111111',
      inputFocusColor: '#0070f3',
      inputBorderRadius: '4px',
      cardBackground: '#ffffff',
      cardBorderColor: '#e2e8f0',
      cardBorderRadius: '8px',
      cardShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      cardPadding: '16px',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#3b82f6',
      metaTitle: 'API Marketplace',
      metaDescription: 'Discover and integrate powerful APIs',
      metaKeywords: 'API, marketplace, integration, development',
    },
  })

  // Create navigation items
  await prisma.navItem.createMany({
    data: [
      {
        title: 'Home',
        href: '/',
        order: 1,
        isActive: true,
        isExternal: false,
        themeId: theme.id,
      },
      {
        title: 'APIs',
        href: '/apis',
        order: 2,
        isActive: true,
        isExternal: false,
        themeId: theme.id,
      },
      {
        title: 'Documentation',
        href: '/docs',
        order: 3,
        isActive: true,
        isExternal: false,
        themeId: theme.id,
      },
      {
        title: 'Pricing',
        href: '/pricing',
        order: 4,
        isActive: true,
        isExternal: false,
        themeId: theme.id,
      },
    ],
    skipDuplicates: true,
  })

  // Create languages
  await prisma.language.createMany({
    data: [
      {
        name: 'English',
        code: 'en',
        isActive: true,
        isDefault: true,
        themeId: theme.id,
      },
      {
        name: 'French',
        code: 'fr',
        isActive: true,
        isDefault: false,
        themeId: theme.id,
      },
    ],
    skipDuplicates: true,
  })

  // Create content sections
  await prisma.contentSection.createMany({
    data: [
      {
        name: 'hero',
        type: 'hero',
        title: 'Welcome to API Marketplace',
        subtitle: 'Discover and integrate powerful APIs',
        content: {
          description: 'A platform for discovering and integrating powerful APIs',
          features: ['Easy Integration', 'Secure Access', 'Real-time Support'],
        },
        isActive: true,
        order: 1,
        themeId: theme.id,
      },
      {
        name: 'features',
        type: 'features',
        title: 'Why Choose Us',
        subtitle: 'Discover the benefits of our platform',
        content: {
          items: [
            {
              title: 'Easy Integration',
              description: 'Simple and straightforward API integration process',
            },
            {
              title: 'Secure Access',
              description: 'Enterprise-grade security for your API needs',
            },
            {
              title: 'Real-time Support',
              description: '24/7 support for all your integration needs',
            },
          ],
        },
        isActive: true,
        order: 2,
        themeId: theme.id,
      },
    ],
    skipDuplicates: true,
  })

  // Create banners
  await prisma.banner.createMany({
    data: [
      {
        title: 'Welcome Banner',
        content: 'Welcome to our API Marketplace! Explore our collection of APIs.',
        type: 'info',
        backgroundColor: '#e6f7ff',
        textColor: '#0052cc',
        isActive: true,
        position: 'top',
        themeId: theme.id,
      },
      {
        title: 'New Features',
        content: 'Check out our latest API integrations and features!',
        type: 'success',
        backgroundColor: '#e6fff2',
        textColor: '#00875a',
        isActive: true,
        position: 'bottom',
        themeId: theme.id,
      },
    ],
    skipDuplicates: true,
  })

  // Create social links
  await prisma.socialLink.createMany({
    data: [
      {
        platform: 'Twitter',
        url: 'https://twitter.com/apimarketplace',
        icon: 'twitter',
        isActive: true,
        themeId: theme.id,
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/company/apimarketplace',
        icon: 'linkedin',
        isActive: true,
        themeId: theme.id,
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/apimarketplace',
        icon: 'github',
        isActive: true,
        themeId: theme.id,
      },
    ],
    skipDuplicates: true,
  })

  // Create contact information
  await prisma.contactInfo.create({
    data: {
      email: 'contact@apimarketplace.com',
      phone: '+1 (555) 123-4567',
      address: '123 API Street, Tech City, TC 12345',
      workingHours: 'Monday - Friday, 9:00 AM - 5:00 PM',
      themeId: theme.id,
    },
  })

  console.log('Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
