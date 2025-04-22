import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/nav-items - Get all navigation items
export async function GET() {
  try {
    const navItems = await prisma.navItem.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(navItems);
  } catch (error) {
    console.error('Error fetching navigation items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch navigation items' },
      { status: 500 }
    );
  }
}

// POST /api/nav-items - Create new navigation item
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const navItem = await prisma.navItem.create({
      data: {
        title: data.title,
        href: data.href,
        order: data.order,
        isActive: data.isActive || true,
        isExternal: data.isExternal || false,
        icon: data.icon,
        themeId: data.themeId,
      },
    });

    return NextResponse.json(navItem);
  } catch (error) {
    console.error('Error creating navigation item:', error);
    return NextResponse.json(
      { error: 'Failed to create navigation item' },
      { status: 500 }
    );
  }
}

// PUT /api/nav-items - Update navigation item
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json(
        { error: 'Navigation item ID is required' },
        { status: 400 }
      );
    }

    const navItem = await prisma.navItem.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(navItem);
  } catch (error) {
    console.error('Error updating navigation item:', error);
    return NextResponse.json(
      { error: 'Failed to update navigation item' },
      { status: 500 }
    );
  }
}

// DELETE /api/nav-items - Delete navigation item
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Navigation item ID is required' },
        { status: 400 }
      );
    }

    await prisma.navItem.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Navigation item deleted successfully' });
  } catch (error) {
    console.error('Error deleting navigation item:', error);
    return NextResponse.json(
      { error: 'Failed to delete navigation item' },
      { status: 500 }
    );
  }
} 