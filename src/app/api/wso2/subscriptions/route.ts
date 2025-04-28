import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const baseUrl = process.env.WSO2_API_URL || "https://localhost:9443"
  const { searchParams } = new URL(request.url)
  const applicationId = searchParams.get("applicationId")

  // Construct the URL with query parameters
  const url = new URL(`${baseUrl}/api/am/devportal/v3/subscriptions`)
  if (applicationId) {
    url.searchParams.append("applicationId", applicationId)
  }
  
  const headers = new Headers(request.headers)
  headers.delete("host") // Remove host header to avoid conflicts

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers,
    })

    const data = await response.text()
    let parsedData
    try {
      parsedData = JSON.parse(data)
    } catch (error) {
      console.error("Error parsing response:", error)
      return new Response(
        JSON.stringify({ error: "Invalid response from WSO2 API" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
    }

    return new Response(JSON.stringify(parsedData), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch (error) {
    console.error("Error proxying request:", error)
    return new Response(
      JSON.stringify({ error: "Failed to fetch subscriptions" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
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