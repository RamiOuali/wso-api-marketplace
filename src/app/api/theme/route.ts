import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const theme = await prisma.siteTheme.findFirst({
      where: { isActive: true },
      include: {
        navItems: {
          where: { isActive: true },
          orderBy: { order: 'asc' },
        },
        languages: {
          where: { isActive: true },
        },
      },
    });

    if (!theme) {
      return NextResponse.json(
        { error: 'No active theme found' },
        { status: 404 }
      );
    }

    return NextResponse.json(theme);
  } catch (error) {
    console.error('Error fetching theme:', error);
    return NextResponse.json(
      { error: 'Failed to fetch theme' },
      { status: 500 }
    );
  }
} 