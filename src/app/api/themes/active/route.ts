import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const activeTheme = await prisma.siteTheme.findFirst({
      where: { isActive: true }
    })
    
    if (!activeTheme) {
      // Fall back to first theme if no active theme exists
      const fallbackTheme = await prisma.siteTheme.findFirst()
      return NextResponse.json(fallbackTheme)
    }
    
    return NextResponse.json(activeTheme)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch active theme" }, { status: 500 })
  }
}

// app/api/themes/[id]/route.ts
