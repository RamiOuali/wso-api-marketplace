import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// POST /api/theme/activate - Activate a theme
export async function POST(request: Request) {
  try {
    const { id: idString } = await request.json()
    const id = Number.parseInt(idString, 10)

    if (!idString || isNaN(id)) {
      return NextResponse.json({ error: "Valid Theme ID is required" }, { status: 400 })
    }

    // First, deactivate all themes
    await prisma.siteTheme.updateMany({
      where: {
        isActive: true,
      },
      data: {
        isActive: false,
      },
    })

    // Then, activate the selected theme
    const theme = await prisma.siteTheme.update({
      where: { id },
      data: {
        isActive: true,
      },
    })

    return NextResponse.json(theme)
  } catch (error) {
    console.error("Error activating theme:", error)
    return NextResponse.json({ error: "Failed to activate theme" }, { status: 500 })
  }
}
