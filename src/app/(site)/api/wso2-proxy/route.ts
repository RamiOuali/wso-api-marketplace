import { type NextRequest, NextResponse } from "next/server"

// CORS headers to handle cross-origin requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Consider restricting this to specific origins in production
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "*", // Consider specifying exact headers in production
  "Access-Control-Max-Age": "86400", // Cache preflight for 24 hours
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  })
}

// Helper function to forward headers and body
async function handleProxyRequest(
  request: NextRequest,
  method: string,
  originalMethod?: string,
): Promise<NextResponse> {
  try {
    // Get the target URL from the query parameter
    let targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400, headers: corsHeaders })
    }

    if (targetUrl.includes("://localhost")) {
      targetUrl = targetUrl.replace("://localhost", "://127.0.0.1")
      console.log(`Replaced localhost with 127.0.0.1. New targetUrl: ${targetUrl}`)
    }

    console.log(
      `Proxying ${method} request to: ${targetUrl}${originalMethod ? ` (original method: ${originalMethod})` : ""}`,
    )

    // Prepare headers to forward
    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
      console.log("API key provided")
    }

    // Add method override header if needed (for servers that support it)
    if (originalMethod && originalMethod !== method) {
      headers["X-HTTP-Method-Override"] = originalMethod
      console.log(`Added method override header: ${originalMethod}`)
    }

    // Forward common headers, you might want to be more selective or forward all incoming headers
    const incomingHeaders = request.headers
    incomingHeaders.forEach((value, key) => {
      // Avoid forwarding headers that are typically set by fetch or not needed
      if (!["host", "connection", "content-length", "transfer-encoding"].includes(key.toLowerCase())) {
        headers[key] = value
      }
    })

    // Get the request body for relevant methods
    let body: string | undefined
    if (method !== "GET" && method !== "HEAD") {
      try {
        body = await request.text()
        console.log("Request body:", body.substring(0, 200) + (body.length > 200 ? "..." : "")) // Log truncated body
      } catch (e) {
        console.warn("Failed to read request body (might be empty):", e)
        body = undefined // Ensure body is undefined if reading fails or is empty
      }
    }

    // Make the request to the target URL
    const fetchOptions: RequestInit = {
      method: method,
      headers: headers,
      body: body, // Pass the body for methods that need it
      cache: "no-store", // Ensure no caching
    }

    console.log("Fetch options (partial):", {
      method: fetchOptions.method,
      headers: fetchOptions.headers,
      body: fetchOptions.body ? "..." : null, // Avoid logging potentially large body
      cache: fetchOptions.cache,
    })

    try {
      // Perform the actual fetch to the target URL
      const response = await fetch(targetUrl, fetchOptions)

      // Forward the response status and headers back to the client
      const responseHeaders: Record<string, string> = {
        ...corsHeaders, // Add CORS headers to all responses
      }

      response.headers.forEach((value, key) => {
        // Don't override our CORS headers with ones from the target
        if (!key.toLowerCase().startsWith("access-control-")) {
          responseHeaders[key] = value
        }
      })

      // Get the response body as an ArrayBuffer for faithful forwarding
      const responseBody = await response.arrayBuffer()

      // Return the response from the proxy, preserving status and headers
      return new NextResponse(responseBody, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      })
    } catch (fetchError) {
      console.error(`Workspace error proxying ${method} to ${targetUrl}:`, fetchError)
      
      // Provide more specific error messages based on the error type
      let errorMessage = `Proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`
      let errorDetails = "Could not connect to the target API gateway. Check URL and network."
      
      // Check for certificate errors
      if (fetchError instanceof Error) {
        const errorString = fetchError.toString().toLowerCase()
        if (errorString.includes("certificate") || 
            (fetchError.cause && 
             typeof fetchError.cause === 'object' && 
             'code' in fetchError.cause && 
             fetchError.cause.code === 'DEPTH_ZERO_SELF_SIGNED_CERT')) {
          
          errorDetails = "The API Gateway is using a self-signed certificate. This is expected in development environments. Try using Mock Mode for testing."
        }
      }
      
      return NextResponse.json(
        {
          error: errorMessage,
          url: targetUrl,
          details: errorDetails,
        },
        { status: 502, headers: corsHeaders }, // Bad Gateway status
      )
    }
  } catch (error) {
    console.error(`General proxy error during ${method} handling:`, error)
    return NextResponse.json(
      { error: `Proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500, headers: corsHeaders }, // Internal Server Error
    )
  }
}

// Handle GET requests
export async function GET(request: NextRequest) {
  return handleProxyRequest(request, "GET")
}

// Handle POST requests with method override support
export async function POST(request: NextRequest) {
  // Check if this is actually a method override request
  const methodOverride = request.headers.get("X-HTTP-Method-Override")

  if (methodOverride && ["PUT", "DELETE", "PATCH"].includes(methodOverride.toUpperCase())) {
    // For problematic methods, use POST but pass the original intended method
    return handleProxyRequest(request, "POST", methodOverride)
  }

  return handleProxyRequest(request, "POST")
}

// Handle PUT requests
export async function PUT(request: NextRequest) {
  try {
    // Get the target URL from the query parameter
    const targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400, headers: corsHeaders })
    }

    console.log(`Proxying PUT request to: ${targetUrl}`)

    // Prepare headers to forward
    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
      console.log("API key provided")
    }

    // Forward content type header
    const contentType = request.headers.get("content-type")
    if (contentType) {
      headers["content-type"] = contentType
    }

    // Forward accept header
    const acceptHeader = request.headers.get("accept")
    if (acceptHeader) {
      headers["accept"] = acceptHeader
    }

    // Get the request body
    let body: string | undefined
    try {
      body = await request.text()
      console.log("PUT request body:", body.substring(0, 200) + (body.length > 200 ? "..." : ""))
    } catch (e) {
      console.warn("Failed to read PUT request body:", e)
    }

    // Make the request to the target URL
    const fetchOptions: RequestInit = {
      method: "PUT",
      headers,
      body,
      cache: "no-store",
    }

    console.log("PUT fetch options:", {
      method: fetchOptions.method,
      headers: fetchOptions.headers,
      bodyLength: body ? body.length : 0,
    })

    try {
      const response = await fetch(targetUrl, fetchOptions)

      console.log(`PUT response status: ${response.status}`)

      // Forward the response status and headers back to the client
      const responseHeaders: Record<string, string> = {
        ...corsHeaders,
      }

      response.headers.forEach((value, key) => {
        if (!key.toLowerCase().startsWith("access-control-")) {
          responseHeaders[key] = value
        }
      })

      // Get the response content
      const contentType = response.headers.get("content-type")

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json()
        return NextResponse.json(data, {
          status: response.status,
          headers: responseHeaders,
        })
      } else {
        const text = await response.text()
        return new NextResponse(text, {
          status: response.status,
          headers: {
            ...responseHeaders,
            "Content-Type": contentType || "text/plain",
          },
        })
      }
    } catch (fetchError) {
      console.error("PUT fetch error:", fetchError)
      return NextResponse.json(
        {
          error: `PUT proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
          url: targetUrl,
        },
        { status: 502, headers: corsHeaders },
      )
    }
  } catch (error) {
    console.error("General PUT proxy error:", error)
    return NextResponse.json(
      { error: `PUT proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500, headers: corsHeaders },
    )
  }
}

// Handle DELETE requests
export async function DELETE(request: NextRequest) {
  try {
    // Get the target URL from the query parameter
    const targetUrl = request.nextUrl.searchParams.get("url")
    const apiKey = request.headers.get("apikey")

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400, headers: corsHeaders })
    }

    console.log(`Proxying DELETE request to: ${targetUrl}`)

    // Prepare headers to forward
    const headers: Record<string, string> = {}
    if (apiKey) {
      headers["apikey"] = apiKey
      console.log("API key provided")
    }

    // Forward accept header
    const acceptHeader = request.headers.get("accept")
    if (acceptHeader) {
      headers["accept"] = acceptHeader
    }

    // Make the request to the target URL
    const fetchOptions: RequestInit = {
      method: "DELETE",
      headers,
      cache: "no-store",
    }

    console.log("DELETE fetch options:", {
      method: fetchOptions.method,
      headers: fetchOptions.headers,
    })

    try {
      const response = await fetch(targetUrl, fetchOptions)

      console.log(`DELETE response status: ${response.status}`)

      // Forward the response status and headers back to the client
      const responseHeaders: Record<string, string> = {
        ...corsHeaders,
      }

      response.headers.forEach((value, key) => {
        if (!key.toLowerCase().startsWith("access-control-")) {
          responseHeaders[key] = value
        }
      })

      // Get the response content
      const contentType = response.headers.get("content-type")

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json()
        return NextResponse.json(data, {
          status: response.status,
          headers: responseHeaders,
        })
      } else {
        const text = await response.text()
        return new NextResponse(text, {
          status: response.status,
          headers: {
            ...responseHeaders,
            "Content-Type": contentType || "text/plain",
          },
        })
      }
    } catch (fetchError) {
      console.error("DELETE fetch error:", fetchError)
      return NextResponse.json(
        {
          error: `DELETE proxy fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`,
          url: targetUrl,
        },
        { status: 502, headers: corsHeaders },
      )
    }
  } catch (error) {
    console.error("General DELETE proxy error:", error)
    return NextResponse.json(
      { error: `DELETE proxy error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500, headers: corsHeaders },
    )
  }
}

// Handle PATCH requests with fallback to POST+override
export async function PATCH(request: NextRequest) {
  try {
    // First try direct PATCH method
    const response = await handleProxyRequest(request, "PATCH")

    // If we got a CORS error or 405 Method Not Allowed, retry with POST+override
    if (
      response.status === 405 ||
      (response.status === 400 && response.headers.get("content-type")?.includes("application/json"))
    ) {
      const responseBody = await response.json().catch(() => ({}))
      if (
        responseBody.error?.toLowerCase().includes("cors") ||
        responseBody.error?.toLowerCase().includes("method") ||
        response.status === 405
      ) {
        console.log("PATCH request failed, retrying with POST+override")
        // Clone the request to read the body again
        const clonedRequest = request.clone()
        return handleProxyRequest(clonedRequest, "POST", "PATCH")
      }
    }

    return response
  } catch (error) {
    console.error("Error handling PATCH request:", error)
    // Fall back to POST+override if there was an error
    const clonedRequest = request.clone()
    return handleProxyRequest(clonedRequest, "POST", "PATCH")
  }
}
