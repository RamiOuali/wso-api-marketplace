-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "SiteTheme" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "siteTitle" TEXT,
    "siteDescription" TEXT,
    "siteLogo" TEXT,
    "favicon" TEXT,
    "primaryColor" TEXT DEFAULT '#0070f3',
    "secondaryColor" TEXT DEFAULT '#7928ca',
    "accentColor" TEXT DEFAULT '#0070f3',
    "backgroundColor" TEXT DEFAULT '#ffffff',
    "textColor" TEXT DEFAULT '#111111',
    "linkColor" TEXT DEFAULT '#0070f3',
    "bodyFont" TEXT DEFAULT 'Inter, sans-serif',
    "headingFont" TEXT DEFAULT 'Inter, sans-serif',
    "baseFontSize" TEXT DEFAULT '16px',
    "headingFontSize" TEXT DEFAULT '24px',
    "containerWidth" TEXT DEFAULT '1200px',
    "contentWidth" TEXT DEFAULT '800px',
    "sidebarWidth" TEXT DEFAULT '300px',
    "navbarBackground" TEXT DEFAULT '#ffffff',
    "navbarTextColor" TEXT DEFAULT '#111111',
    "navbarLogo" TEXT,
    "navbarHeight" TEXT DEFAULT '64px',
    "navbarPosition" TEXT DEFAULT 'sticky',
    "navbarShowSearch" BOOLEAN NOT NULL DEFAULT true,
    "navbarShowLanguage" BOOLEAN NOT NULL DEFAULT true,
    "navbarShowUserMenu" BOOLEAN NOT NULL DEFAULT true,
    "navbarShowNotifications" BOOLEAN NOT NULL DEFAULT true,
    "footerBackground" TEXT DEFAULT '#f8f9fa',
    "footerTextColor" TEXT DEFAULT '#111111',
    "footerLogo" TEXT,
    "footerCopyright" TEXT,
    "footerShowSocial" BOOLEAN NOT NULL DEFAULT true,
    "footerShowNewsletter" BOOLEAN NOT NULL DEFAULT true,
    "footerColumns" JSONB,
    "heroBackground" TEXT,
    "heroBackgroundImage" TEXT,
    "heroTextColor" TEXT,
    "heroTitle" TEXT,
    "heroSubtitle" TEXT,
    "heroButtonText" TEXT,
    "heroButtonLink" TEXT,
    "heroButtonColor" TEXT,
    "heroOverlayColor" TEXT,
    "heroOverlayOpacity" DOUBLE PRECISION DEFAULT 0.5,
    "buttonPrimaryColor" TEXT DEFAULT '#0070f3',
    "buttonSecondaryColor" TEXT DEFAULT '#7928ca',
    "buttonTextColor" TEXT DEFAULT '#ffffff',
    "buttonBorderRadius" TEXT DEFAULT '4px',
    "buttonPadding" TEXT DEFAULT '8px 16px',
    "inputBackground" TEXT DEFAULT '#ffffff',
    "inputBorderColor" TEXT DEFAULT '#e2e8f0',
    "inputTextColor" TEXT DEFAULT '#111111',
    "inputFocusColor" TEXT DEFAULT '#0070f3',
    "inputBorderRadius" TEXT DEFAULT '4px',
    "cardBackground" TEXT DEFAULT '#ffffff',
    "cardBorderColor" TEXT DEFAULT '#e2e8f0',
    "cardBorderRadius" TEXT DEFAULT '8px',
    "cardShadow" TEXT DEFAULT '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    "cardPadding" TEXT DEFAULT '16px',
    "successColor" TEXT DEFAULT '#10b981',
    "warningColor" TEXT DEFAULT '#f59e0b',
    "errorColor" TEXT DEFAULT '#ef4444',
    "infoColor" TEXT DEFAULT '#3b82f6',
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "googleAnalyticsId" TEXT,
    "googleTagManagerId" TEXT,
    "facebookPixelId" TEXT,

    CONSTRAINT "SiteTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NavItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 99,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isExternal" BOOLEAN NOT NULL DEFAULT false,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "themeId" INTEGER NOT NULL,

    CONSTRAINT "NavItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "themeId" INTEGER NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentSection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "content" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "themeId" INTEGER NOT NULL,

    CONSTRAINT "ContentSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'info',
    "backgroundColor" TEXT NOT NULL,
    "textColor" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "link" TEXT,
    "linkText" TEXT,
    "position" TEXT NOT NULL DEFAULT 'top',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "themeId" INTEGER NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" SERIAL NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "themeId" INTEGER NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "workingHours" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "themeId" INTEGER NOT NULL,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SiteTheme_name_key" ON "SiteTheme"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Language_code_key" ON "Language"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ContactInfo_themeId_key" ON "ContactInfo"("themeId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "NavItem" ADD CONSTRAINT "NavItem_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "SiteTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "SiteTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSection" ADD CONSTRAINT "ContentSection_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "SiteTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Banner" ADD CONSTRAINT "Banner_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "SiteTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "SiteTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactInfo" ADD CONSTRAINT "ContactInfo_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "SiteTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
