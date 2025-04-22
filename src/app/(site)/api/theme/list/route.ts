
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/theme/list - Get all themes
export async function GET() {
  try {
    const themes = await prisma.siteTheme.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    })

    return NextResponse.json(themes)
  } catch (error) {
    console.error("Error fetching themes:", error)
    return NextResponse.json({ error: "Failed to fetch themes" }, { status: 500 })
  }
}
