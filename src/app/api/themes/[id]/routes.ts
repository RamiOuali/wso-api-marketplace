import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const theme = await prisma.siteTheme.findUnique({
      where: { id }
    })
    
    if (!theme) {
      return NextResponse.json({ error: "Theme not found" }, { status: 404 })
    }
    
    return NextResponse.json(theme)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch theme" }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const data = await request.json()
    
    const theme = await prisma.siteTheme.update({
      where: { id },
      data
    })
    
    return NextResponse.json(theme)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update theme" }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    await prisma.siteTheme.delete({
      where: { id }
    })
    
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete theme" }, { status: 500 })
  }
}
