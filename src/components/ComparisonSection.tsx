"use client";

import { useState } from "react";
import { useThemeContext } from "@/providers/ThemeProvider";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "API Management",
    ourPlatform: {
      supported: true,
      highlight: "Full lifecycle management with versioning",
    },
    competitors: {
      supported: true,
      highlight: "Basic management",
    },
  },
  {
    name: "Documentation",
    ourPlatform: {
      supported: true,
      highlight: "Interactive OpenAPI documentation & examples",
    },
    competitors: {
      supported: true,
      highlight: "Static documentation",
    },
  },
  {
    name: "Developer Portal",
    ourPlatform: {
      supported: true,
      highlight: "Customizable, self-service with integrated testing",
    },
    competitors: {
      supported: true,
      highlight: "Limited customization",
    },
  },
  {
    name: "Security",
    ourPlatform: {
      supported: true,
      highlight: "OAuth2, API Keys, JWT, throttling & IP restrictions",
    },
    competitors: {
      supported: true,
      highlight: "Basic authentication options",
    },
  },
  {
    name: "Analytics",
    ourPlatform: {
      supported: true,
      highlight: "Real-time monitoring with advanced insights",
    },
    competitors: {
      supported: true,
      highlight: "Basic usage statistics",
    },
  },
  {
    name: "Monetization",
    ourPlatform: {
      supported: true,
      highlight: "Flexible pricing models with subscription tiers",
    },
    competitors: {
      supported: false,
      highlight: "Limited options",
    },
  },
  {
    name: "Traffic Management",
    ourPlatform: {
      supported: true,
      highlight: "Advanced throttling, caching & load balancing",
    },
    competitors: {
      supported: false,
      highlight: "Not available",
    },
  },
];

export function ComparisonSection() {
  const { theme } = useThemeContext();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  if (!theme) {
    return null;
  }

  return (
    <section
      className="py-20 overflow-hidden"
      style={{
        backgroundColor: theme.backgroundColor || "#ffffff",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          {/* Decorative background element */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-10"
            style={{
              backgroundColor: theme.primaryColor || "#0070f3",
              filter: "blur(40px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2
              className="text-4xl font-extrabold tracking-tight mb-4"
              style={{
                color: theme.textColor || "#111",
                fontFamily: theme.headingFont || "Inter, sans-serif",
              }}
            >
              Why Choose Our API Marketplace
            </h2>

            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: theme.textColor || "#4b5563", opacity: 0.8 }}
            >
              Compare our comprehensive API platform with alternatives and discover the advantages
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          {/* Table Header */}
          <div 
            className="grid grid-cols-3 p-4 border-b" 
            style={{ 
              backgroundColor: `${theme.primaryColor || "#0070f3"}10`,
              borderColor: theme.cardBorderColor || "rgba(0,0,0,0.05)",
            }}
          >
            <div className="col-span-1 font-medium" style={{ color: theme.textColor || "#111" }}>
              Feature
            </div>
            <div 
              className="col-span-1 font-bold text-center" 
              style={{ color: theme.primaryColor || "#0070f3" }}
            >
              Our Platform
            </div>
            <div className="col-span-1 font-medium text-center text-gray-500">
              Competitors
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="grid grid-cols-3 p-4 border-b transition-colors"
              style={{
                backgroundColor: hoveredFeature === index ? `${theme.primaryColor || "#0070f3"}05` : "transparent",
                borderColor: theme.cardBorderColor || "rgba(0,0,0,0.05)",
              }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="col-span-1" style={{ color: theme.textColor || "#111" }}>
                {feature.name}
              </div>

              <div className="col-span-1 text-center">
                <div className="flex flex-col items-center">
                  {feature.ourPlatform.supported ? (
                    <div className="flex items-center">
                      <Check 
                        className="w-5 h-5 mr-2" 
                        style={{ color: theme.successColor || "#10b981" }} 
                      />
                      <span style={{ color: theme.textColor || "#111" }}>Yes</span>
                    </div>
                  ) : (
                    <X className="w-5 h-5" style={{ color: theme.errorColor || "#ef4444" }} />
                  )}
                  <p className="text-sm mt-1 opacity-80" style={{ color: theme.textColor || "#4b5563" }}>
                    {feature.ourPlatform.highlight}
                  </p>
                </div>
              </div>

              <div className="col-span-1 text-center">
                <div className="flex flex-col items-center">
                  {feature.competitors.supported ? (
                    <div className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-gray-400" />
                      <span className="text-gray-500">Yes</span>
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-gray-400" />
                  )}
                  <p className="text-sm mt-1 text-gray-400">
                    {feature.competitors.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-lg font-medium"
            style={{ color: theme.primaryColor || "#0070f3" }}
          >
            Start building with superior API management today
          </p>
        </motion.div>
      </div>
    </section>
  );
}