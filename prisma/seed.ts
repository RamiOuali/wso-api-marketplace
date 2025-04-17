// prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create default theme if it doesn't exist
  const defaultTheme = await prisma.siteTheme.upsert({
    where: { name: 'Default Theme' },
    update: {},
    create: {
      name: 'Default Theme',
      isActive: true,
      navbarLogo: '/default-logo.png',
      navbarPrimaryColor: '#000000',
      navbarTextColor: '#ffffff',
      navbarFont: 'Inter',
      navbarShowAboutUs: true,
      navbarShowLanguage: true,
      navItems: {
        create: [
          {
            title: 'Home',
            href: '/',
            isExternal: false,
            icon: '🏠',
            order: 1,
          },
          {
            title: 'About Us',
            href: '/about',
            isExternal: false,
            icon: 'ℹ️',
            order: 2,
          },
        ],
      },
      languages: {
        create: [
          {
            name: 'English',
            code: 'en',
            isDefault: true,
          },
          {
            name: 'French',
            code: 'fr',
          },
        ],
      },
    },
  })

  console.log('Default theme created:', defaultTheme)

  // Create default languages
  const defaultLanguages = [
    { name: 'English', code: 'en', isDefault: true, themeId: defaultTheme.id },
    { name: 'Español', code: 'es', themeId: defaultTheme.id },
    { name: 'Français', code: 'fr', themeId: defaultTheme.id },
    { name: 'Deutsch', code: 'de', themeId: defaultTheme.id },
  ]

  for (const lang of defaultLanguages) {
    await prisma.language.upsert({
      where: { code: lang.code },
      update: {},
      create: {
        ...lang,
        isActive: true,
      },
    })
  }

  console.log(`Created default languages`)

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN'
    }
  })

  console.log(`Created admin user: ${admin.email}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
