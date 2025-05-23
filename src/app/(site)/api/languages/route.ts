import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/languages - Get all languages
export async function GET() {
  try {
    const languages = await prisma.language.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(languages);
  } catch (error) {
    console.error('Error fetching languages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch languages' },
      { status: 500 }
    );
  }
}

// POST /api/languages - Create new language
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const language = await prisma.language.create({
      data: {
        code: data.code,
        name: data.name,
        isActive: data.isActive || true,
        isDefault: data.isDefault || false,
        order: data.order,
        themeId: data.themeId,
      },
    });

    return NextResponse.json(language);
  } catch (error) {
    console.error('Error creating language:', error);
    return NextResponse.json(
      { error: 'Failed to create language' },
      { status: 500 }
    );
  }
}

// PUT /api/languages - Update language
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json(
        { error: 'Language ID is required' },
        { status: 400 }
      );
    }

    const language = await prisma.language.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(language);
  } catch (error) {
    console.error('Error updating language:', error);
    return NextResponse.json(
      { error: 'Failed to update language' },
      { status: 500 }
    );
  }
}

// DELETE /api/languages - Delete language
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Language ID is required' },
        { status: 400 }
      );
    }

    await prisma.language.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Language deleted successfully' });
  } catch (error) {
    console.error('Error deleting language:', error);
    return NextResponse.json(
      { error: 'Failed to delete language' },
      { status: 500 }
    );
  }
} 