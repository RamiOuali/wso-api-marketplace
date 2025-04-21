import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// app/api/navitems/active/route.ts
export async function GET() {
  try {
    const activeNavItems = await prisma.navItem.findMany({
      where: { isActive: true },
      orderBy: {
        order: 'asc'
      }
    })
    return NextResponse.json(activeNavItems)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch active nav items" }, { status: 500 })
  }
}
