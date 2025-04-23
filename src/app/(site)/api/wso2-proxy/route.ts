import { type NextRequest, NextResponse } from "next/server"
import https from "https"

// Create a custom HTTPS agent that ignores SSL certificate errors
// This is useful for development environments with self-signed certificates
// WARNING: This should NOT be used in production environments
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

export async function GET(request: NextRequest) {
  try {
    // Get the target URL from the query parameter
    const targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400 })
    }

    console.log(`Proxying GET request to: ${targetUrl}`)

    // Prepare headers to forward
    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
      console.log("API key provided")
    }

    // Forward any other headers you might need
    const acceptHeader = request.headers.get("accept")
    if (acceptHeader) {
      headers["accept"] = acceptHeader
    }

    // Make the request to the target URL with the custom HTTPS agent
    const fetchOptions: RequestInit = {
      method: "GET",
      headers,
      // @ts-ignore - The node fetch types don't include the agent property
      agent: targetUrl.startsWith("https:") ? httpsAgent : undefined,
    }

    console.log("Fetch options:", JSON.stringify(fetchOptions, null, 2))

    try {
      const response = await fetch(targetUrl, fetchOptions)
      
      // Get the response data
      const contentType = response.headers.get("content-type")
      console.log(`Response status: ${response.status}, Content-Type: ${contentType}`)
      
      let data

      if (contentType && contentType.includes("application/json")) {
        data = await response.json()
        return NextResponse.json(data, { status: response.status })
      } else {
        data = await response.text()
        return new NextResponse(data, {
          status: response.status,
          headers: {
            "Content-Type": contentType || "text/plain",
          },
        })
      }
    } catch (fetchError) {
      console.error("Fetch error in proxy:", fetchError)
      return NextResponse.json(
        { 
          error: `Proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
          url: targetUrl
        }, 
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("General proxy error:", error)
    return NextResponse.json(
      { error: `Proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the target URL from the query parameter
    const targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400 })
    }

    console.log(`Proxying POST request to: ${targetUrl}`)

    // Get the request body
    let body: string | undefined
    try {
      body = await request.text()
      console.log("Request body:", body)
    } catch (e) {
      console.error("Failed to read request body:", e)
    }

    // Prepare headers to forward
    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
    }

    // Forward content type header
    const contentType = request.headers.get("content-type")
    if (contentType) {
      headers["content-type"] = contentType
    }

    // Make the request to the target URL with the custom HTTPS agent
    const fetchOptions: RequestInit = {
      method: "POST",
      headers,
      body,
      // @ts-ignore - The node fetch types don't include the agent property
      agent: targetUrl.startsWith("https:") ? httpsAgent : undefined,
    }

    try {
      const response = await fetch(targetUrl, fetchOptions)
      
      // Get the response data
      const responseContentType = response.headers.get("content-type")
      console.log(`Response status: ${response.status}, Content-Type: ${responseContentType}`)
      
      let data

      if (responseContentType && responseContentType.includes("application/json")) {
        data = await response.json()
        return NextResponse.json(data, { status: response.status })
      } else {
        data = await response.text()
        return new NextResponse(data, {
          status: response.status,
          headers: {
            "Content-Type": responseContentType || "text/plain",
          },
        })
      }
    } catch (fetchError) {
      console.error("Fetch error in proxy:", fetchError)
      return NextResponse.json(
        { 
          error: `Proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
          url: targetUrl
        }, 
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("General proxy error:", error)
    return NextResponse.json(
      { error: `Proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}

// Handle PUT requests
export async function PUT(request: NextRequest) {
  try {
    const targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400 })
    }

    console.log(`Proxying PUT request to: ${targetUrl}`)

    let body: string | undefined
    try {
      body = await request.text()
      console.log("Request body:", body)
    } catch (e) {
      console.error("Failed to read request body:", e)
    }

    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
    }

    const contentType = request.headers.get("content-type")
    if (contentType) {
      headers["content-type"] = contentType
    }

    const fetchOptions: RequestInit = {
      method: "PUT",
      headers,
      body,
      // @ts-ignore - The node fetch types don't include the agent property
      agent: targetUrl.startsWith("https:") ? httpsAgent : undefined,
    }

    try {
      const response = await fetch(targetUrl, fetchOptions)
      
      const responseContentType = response.headers.get("content-type")
      console.log(`Response status: ${response.status}, Content-Type: ${responseContentType}`)
      
      let data

      if (responseContentType && responseContentType.includes("application/json")) {
        data = await response.json()
        return NextResponse.json(data, { status: response.status })
      } else {
        data = await response.text()
        return new NextResponse(data, {
          status: response.status,
          headers: {
            "Content-Type": responseContentType || "text/plain",
          },
        })
      }
    } catch (fetchError) {
      console.error("Fetch error in proxy:", fetchError)
      return NextResponse.json(
        { 
          error: `Proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
          url: targetUrl
        }, 
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("General proxy error:", error)
    return NextResponse.json(
      { error: `Proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}

// Handle DELETE requests
export async function DELETE(request: NextRequest) {
  try {
    const targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400 })
    }

    console.log(`Proxying DELETE request to: ${targetUrl}`)

    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
    }

    const fetchOptions: RequestInit = {
      method: "DELETE",
      headers,
      // @ts-ignore - The node fetch types don't include the agent property
      agent: targetUrl.startsWith("https:") ? httpsAgent : undefined,
    }

    try {
      const response = await fetch(targetUrl, fetchOptions)
      
      const contentType = response.headers.get("content-type")
      console.log(`Response status: ${response.status}, Content-Type: ${contentType}`)
      
      let data

      if (contentType && contentType.includes("application/json")) {
        data = await response.json()
        return NextResponse.json(data, { status: response.status })
      } else {
        data = await response.text()
        return new NextResponse(data, {
          status: response.status,
          headers: {
            "Content-Type": contentType || "text/plain",
          },
        })
      }
    } catch (fetchError) {
      console.error("Fetch error in proxy:", fetchError)
      return NextResponse.json(
        { 
          error: `Proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
          url: targetUrl
        }, 
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("General proxy error:", error)
    return NextResponse.json(
      { error: `Proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}

// Handle PATCH requests
export async function PATCH(request: NextRequest) {
  try {
    const targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400 })
    }

    console.log(`Proxying PATCH request to: ${targetUrl}`)

    let body: string | undefined
    try {
      body = await request.text()
      console.log("Request body:", body)
    } catch (e) {
      console.error("Failed to read request body:", e)
    }

    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
    }

    const contentType = request.headers.get("content-type")
    if (contentType) {
      headers["content-type"] = contentType
    }

    const fetchOptions: RequestInit = {
      method: "PATCH",
      headers,
      body,
      // @ts-ignore - The node fetch types don't include the agent property
      agent: targetUrl.startsWith("https:") ? httpsAgent : undefined,
    }

    try {
      const response = await fetch(targetUrl, fetchOptions)
      
      const responseContentType = response.headers.get("content-type")
      console.log(`Response status: ${response.status}, Content-Type: ${responseContentType}`)
      
      let data

      if (responseContentType && responseContentType.includes("application/json")) {
        data = await response.json()
        return NextResponse.json(data, { status: response.status })
      } else {
        data = await response.text()
        return new NextResponse(data, {
          status: response.status,
          headers: {
            "Content-Type": responseContentType || "text/plain",
          },
        })
      }
    } catch (fetchError) {
      console.error("Fetch error in proxy:", fetchError)
      return NextResponse.json(
        { 
          error: `Proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
          url: targetUrl
        }, 
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("General proxy error:", error)
    return NextResponse.json(
      { error: `Proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}
