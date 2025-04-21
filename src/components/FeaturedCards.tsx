"use client"

import { useThemeContext } from "@/providers/ThemeProvider"
import { FeatureCard } from "./ui/cards"



// Define a type for feature card data
interface Feature {
  id: string
  title: string
  description: string
  icon?: string
  link?: string
}

// API Marketplace-specific feature data
const features: Feature[] = [
  {
    id: "1",
    title: "Explore APIs",
    description: "Browse a curated catalog of APIs to power your applications.",
    icon: "/icons/explore.svg",
    link: "/apis",
  },
  {
    id: "2",
    title: "Developer Docs",
    description: "Access comprehensive documentation for seamless integration.",
    icon: "/icons/docs.svg",
    link: "/docs",
  },
  {
    id: "3",
    title: "Monetize APIs",
    description: "Publish and monetize your APIs with our marketplace tools.",
    icon: "/icons/monetize.svg",
    link: "/publish",
  },
]

export function FeatureCards() {
  const context = useThemeContext() 
  const theme = context?.theme || null

  if (!theme) {
    console.log("No theme available for FeatureCards")
    return null
  }

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: theme.backgroundColor || "#ffffff",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: theme.textColor || "#333333",
              fontFamily: theme.headingFont || "Inter, sans-serif",
            }}
          >
            Build with Our APIs
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: theme.textColor || "#333333",
            }}
          >
            Discover, integrate, and monetize APIs with our developer-friendly marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

