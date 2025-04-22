import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/theme/[id] - Get theme by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id, 10)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 })
    }

    const theme = await prisma.siteTheme.findUnique({
      where: { id },
      include: {
        navItems: true,
        languages: true,
        contentSections: true,
        banners: true,
        socialLinks: true,
        contactInfo: true,
      },
    })

    if (!theme) {
      return NextResponse.json({ error: "Theme not found" }, { status: 404 })
    }

    return NextResponse.json(theme)
  } catch (error) {
    console.error("Error fetching theme:", error)
    return NextResponse.json({ error: "Failed to fetch theme" }, { status: 500 })
  }
}

// PATCH /api/theme/[id] - Update theme by ID
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id, 10)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 })
    }

    const data = await request.json()

    // Remove nested relations that can't be directly updated
    const { navItems, languages, contentSections, banners, socialLinks, contactInfo, ...updateData } = data

    const theme = await prisma.siteTheme.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(theme)
  } catch (error) {
    console.error("Error updating theme:", error)
    return NextResponse.json({ error: "Failed to update theme" }, { status: 500 })
  }
}

// DELETE /api/theme/[id] - Delete theme by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id, 10)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 })
    }

    await prisma.siteTheme.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Theme deleted successfully" })
  } catch (error) {
    console.error("Error deleting theme:", error)
    return NextResponse.json({ error: "Failed to delete theme" }, { status: 500 })
  }
}
