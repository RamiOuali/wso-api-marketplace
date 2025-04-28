"use client"
import { useState } from "react"
import { Check, Code, Database, Globe, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useThemeContext } from "@/providers/ThemeProvider"

export function ApiFeatureShowcase() {
  const context = useThemeContext()
  const theme = context?.theme || null
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Fast Integration",
      description: "Connect to our APIs in minutes, not days. Our streamlined onboarding process gets you up and running quickly with minimal setup required.",
      icon: Zap,
      benefits: [
        "One-click authentication setup",
        "Comprehensive quickstart guides",
        "Copy-paste code snippets for popular languages",
        "Automated API key generation"
      ],
      codeExample: `import ApiClient from '@apimarketplace/client';

const client = new ApiClient({
  apiKey: 'your_api_key',
  region: 'global'
});

// That's it! You're ready to make API calls
const response = await client.getData();`
    },
    {
      title: "Reliable Performance",
      description: "Built on enterprise-grade infrastructure with 99.99% uptime SLA. Our globally distributed network ensures low latency responses wherever your users are located.",
      icon: Database,
      benefits: [
        "99.99% uptime guarantee",
        "Automatic failover protection",
        "Real-time performance monitoring",
        "Global CDN distribution"
      ],
      codeExample: `// Our client handles retries automatically
const response = await client.getData({
  retry: {
    maxAttempts: 3,
    baseDelay: 200,
    maxDelay: 2000
  }
});

// Built-in timeout management
const response = await client.getData({
  timeout: 5000  // milliseconds
});`
    },
    {
      title: "Secure By Default",
      description: "Enterprise-grade security with automatic encryption, key rotation, and comprehensive authentication options to keep your data safe.",
      icon: Lock,
      benefits: [
        "TLS/SSL encryption for all traffic",
        "OAuth 2.0 and API key authentication",
        "Regular security audits and compliance",
        "GDPR and CCPA compliant"
      ],
      codeExample: `// Secure authentication
const client = new ApiClient({
  apiKey: process.env.API_KEY,
  oauth: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }
});

// Automatic token refresh
await client.secureRequest({
  endpoint: '/protected-resource',
  autoRefresh: true
});`
    },
    {
      title: "Developer Friendly",
      description: "Comprehensive documentation, interactive API explorer, and language-specific SDKs make development a breeze.",
      icon: Code,
      benefits: [
        "SDKs for all major languages",
        "Interactive API playground",
        "Versioned API documentation",
        "Community support forums"
      ],
      codeExample: `// Available in multiple languages
// Python
import apimarketplace
client = apimarketplace.Client(api_key="your_key")

// JavaScript
import { ApiClient } from '@apimarketplace/client';
const client = new ApiClient({ apiKey: 'your_key' });

// PHP
$client = new \\ApiMarketplace\\Client('your_key');`
    },
    {
      title: "Global Reach",
      description: "Expand your application's capabilities worldwide with our globally distributed API endpoints, ensuring fast responses wherever your users are located.",
      icon: Globe,
      benefits: [
        "Multi-region deployment options",
        "Automatic geo-routing to closest servers",
        "Edge computing capabilities",
        "Built-in internationalization support"
      ],
      codeExample: `// Specify region for lowest latency
const client = new ApiClient({
  apiKey: 'your_api_key',
  region: 'eu-west-1'  // or 'us-east-1', 'ap-southeast-1', etc.
});

// Content localization support
const response = await client.getData({
  locale: 'fr-FR',
  fallbackLocale: 'en-US'
});`
    }
  ]

  // Default styling if theme is not available
  const styles = {
    primaryColor: theme?.primaryColor || "#6366f1",
    secondaryColor: theme?.secondaryColor || "#f59e0b",
    textColor: theme?.textColor || "#1f2937",
    backgroundColor: theme?.backgroundColor || "#ffffff",
    accentBackgroundColor: theme?.accentBackgroundColor || "#f9fafb",
    borderRadius: theme?.buttonBorderRadius || "0.375rem",
    bodyFont: theme?.bodyFont || "Inter, sans-serif",
    headingFont: theme?.headingFont || "Inter, sans-serif",
  }

  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: styles.backgroundColor,
        fontFamily: styles.bodyFont,
        color: styles.textColor,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            style={{ fontFamily: styles.headingFont }}
          >
            Powerful APIs for Every Developer
          </h2>
          <p className="text-lg opacity-80">
            Our marketplace provides the tools you need to build exceptional applications with minimal effort.
          </p>
        </div>

        {/* Feature Selector */}
        <div className="mb-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 rounded-lg transition-all flex flex-col items-center justify-center text-center ${
                    activeFeature === index
                      ? "shadow-md"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: activeFeature === index ? styles.accentBackgroundColor : "transparent",
                    borderRadius: styles.borderRadius,
                    border: `1px solid ${activeFeature === index ? styles.primaryColor : "transparent"}`,
                  }}
                >
                  <feature.icon
                    className="h-6 w-6 mb-2"
                    style={{ color: activeFeature === index ? styles.primaryColor : styles.textColor }}
                  />
                  <h3 className="font-medium text-sm">{feature.title}</h3>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Feature Content */}
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl p-6 md:p-8 shadow-lg"
            style={{ 
              backgroundColor: styles.accentBackgroundColor,
              borderRadius: styles.borderRadius 
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature Info */}
              <div>
                <div className="flex items-center mb-4">
                 
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: styles.headingFont }}
                  >
                    {features[activeFeature].title}
                  </h3>
                </div>
                <p className="text-lg mb-6 opacity-90">
                  {features[activeFeature].description}
                </p>

                <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0"
                        style={{ color: styles.secondaryColor }}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    className="mr-4"
                    style={{
                      backgroundColor: styles.primaryColor,
                      color: "#ffffff",
                      borderRadius: styles.borderRadius,
                    }}
                  >
                    Try It Free
                  </Button>
                  <Button
                    variant="outline"
                    style={{
                      borderColor: styles.primaryColor,
                      color: styles.primaryColor,
                      borderRadius: styles.borderRadius,
                    }}
                  >
                    View Documentation
                  </Button>
                </div>
              </div>

              {/* Code Example */}
              <div>
                <div
                  className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-white overflow-auto h-full"
                  style={{ minHeight: "300px", borderRadius: styles.borderRadius }}
                >
                  <pre className="whitespace-pre-wrap">{features[activeFeature].codeExample}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
