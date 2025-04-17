
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all nav items
export async function GET() {
  try {
    const navItems = await prisma.navItem.findMany({
      orderBy: {
        order: 'asc'
      }
    })
    return NextResponse.json(navItems)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch nav items" }, { status: 500 })
  }
}

// POST create a new nav item
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const navItem = await prisma.navItem.create({
      data
    })
    return NextResponse.json(navItem, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create nav item" }, { status: 500 })
  }
}
