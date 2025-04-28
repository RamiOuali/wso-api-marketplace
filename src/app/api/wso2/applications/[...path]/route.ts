import { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")
  const baseUrl = process.env.WSO2_API_URL || "https://localhost:9443"
  const url = `${baseUrl}/api/am/devportal/v3/applications/${path}`

  const headers = new Headers(request.headers)
  headers.delete("host") // Remove host header to avoid conflicts

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    })

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch (error) {
    console.error("Error proxying request:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")
  const baseUrl = process.env.WSO2_API_URL || "https://localhost:9443"
  const url = `${baseUrl}/api/am/devportal/v3/applications/${path}`

  const headers = new Headers(request.headers)
  headers.delete("host")

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    })

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch (error) {
    console.error("Error proxying request:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}