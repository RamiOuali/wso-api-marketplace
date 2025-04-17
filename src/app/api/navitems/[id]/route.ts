
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const navItem = await prisma.navItem.findUnique({
      where: { id }
    })
    
    if (!navItem) {
      return NextResponse.json({ error: "Nav item not found" }, { status: 404 })
    }
    
    return NextResponse.json(navItem)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch nav item" }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const data = await request.json()
    
    const navItem = await prisma.navItem.update({
      where: { id },
      data
    })
    
    return NextResponse.json(navItem)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update nav item" }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    await prisma.navItem.delete({
      where: { id }
    })
    
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete nav item" }, { status: 500 })
  }
}
