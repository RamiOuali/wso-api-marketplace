import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/banners - Get all active banners
export async function GET() {
  try {
    const banners = await prisma.banner.findMany({
      where: { 
        isActive: true,
        theme: {
          isActive: true
        }
      },
      include: {
        theme: true
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!banners || banners.length === 0) {
      return NextResponse.json([]);
    }

    return NextResponse.json(banners);
  } catch (error) {
    console.error('Error fetching banners:', error);
    return NextResponse.json(
      { error: 'Failed to fetch banners', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// POST /api/banners - Create new banner
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const banner = await prisma.banner.create({
      data: {
        title: data.title,
        content: data.content,
        type: data.type,
        backgroundColor: data.backgroundColor,
        textColor: data.textColor,
        isActive: data.isActive || true,
        startDate: data.startDate,
        endDate: data.endDate,
        link: data.link,
        linkText: data.linkText,
        position: data.position || 'top',
        themeId: data.themeId,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.error('Error creating banner:', error);
    return NextResponse.json(
      { error: 'Failed to create banner' },
      { status: 500 }
    );
  }
}

// PUT /api/banners - Update banner
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json(
        { error: 'Banner ID is required' },
        { status: 400 }
      );
    }

    const banner = await prisma.banner.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.error('Error updating banner:', error);
    return NextResponse.json(
      { error: 'Failed to update banner' },
      { status: 500 }
    );
  }
}

// DELETE /api/banners - Delete banner
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Banner ID is required' },
        { status: 400 }
      );
    }

    await prisma.banner.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Banner deleted successfully' });
  } catch (error) {
    console.error('Error deleting banner:', error);
    return NextResponse.json(
      { error: 'Failed to delete banner' },
      { status: 500 }
    );
  }
} 