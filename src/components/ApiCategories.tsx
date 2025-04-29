"use client"

import { useState } from "react"
import { useThemeContext } from "@/providers/ThemeProvider"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define category icons as SVG components for better theme integration
const CategoryIcons = {
  payment: (color: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  ),
  analytics: (color: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  ),
  cloud: (color: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  data: (color: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </svg>
  ),
  security: (color: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 5H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
      <path d="M12 9v3" />
      <path d="M8 9v3" />
      <path d="M16 9v3" />
      <rect width="18" height="12" x="3" y="5" rx="1" />
    </svg>
  ),
  ai: (color: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 0-5 5v14a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
      <path d="M9 9h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  )
};

const categories = [
  {
    id: "payment",
    name: "Payment APIs",
    description: "Secure payment processing for multiple currencies and methods",
    icon: "payment",
    count: 24,
    link: "/wso2?category=payment"
  },
  {
    id: "analytics",
    name: "Analytics APIs",
    description: "Real-time data analytics and insights for better decisions",
    icon: "analytics",
    count: 18,
    link: "/wso2?category=analytics"
  },
  {
    id: "cloud",
    name: "Cloud Services",
    description: "Infrastructure and platform services for scalable applications",
    icon: "cloud",
    count: 32,
    link: "/wso2?category=cloud"
  },
  {
    id: "data",
    name: "Data APIs",
    description: "Customer, product, and business data management",
    icon: "data", 
    count: 45,
    link: "/wso2?category=data"
  },
  {
    id: "security",
    name: "Security APIs",
    description: "Authentication, authorization, and encryption services",
    icon: "security",
    count: 16,
    link: "/wso2?category=security"
  },
  {
    id: "ai",
    name: "AI & ML APIs",
    description: "Machine learning and AI models for advanced processing",
    icon: "ai",
    count: 21, 
    link: "/wso2?category=ai"
  }
];

export function ApiCategories() {
  const { theme } = useThemeContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!theme) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      className="py-20"
      style={{
        backgroundColor: theme.backgroundColor === "#ffffff" ? "#f9fafb" : theme.backgroundColor || "#f9fafb",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: theme.textColor || "#111", fontFamily: theme.headingFont || "Inter, sans-serif" }}  
          >
            Explore API Categories
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.textColor || "#4b5563", opacity: 0.8 }}
          >
            Find the perfect API for your project with our extensive collection organized by category
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  background: `radial-gradient(circle at center, ${theme.primaryColor || '#0070f3'}15 0%, transparent 70%)`,
                  borderRadius: theme.cardBorderRadius || "0.75rem"
                }}
              />

              <Link href={category.link}>
                <div 
                  className="h-full rounded-xl p-6 relative z-10 flex flex-col transition-all border"
                  style={{
                    backgroundColor: theme.cardBackground || "#ffffff",
                    borderColor: `${theme.cardBorderColor || "rgba(0,0,0,0.05)"}`,
                    borderRadius: theme.cardBorderRadius || "0.75rem",
                    boxShadow: hoveredIndex === index 
                      ? `0 10px 30px -5px ${theme.primaryColor || "#0070f3"}20` 
                      : theme.cardShadow || "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${theme.primaryColor || "#0070f3"}10`,
                        color: theme.primaryColor || "#0070f3"
                      }}
                    >
                      {CategoryIcons[category.icon as keyof typeof CategoryIcons](theme.primaryColor || "#0070f3")}
                    </div>
                  </div>
                  
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{
                      color: theme.textColor || "#111", 
                      fontFamily: theme.headingFont || "Inter, sans-serif"
                    }}
                  >
                    {category.name}
                  </h3>
                  
                  <p 
                    className="mb-4 flex-grow"
                    style={{ color: theme.textColor || "#4b5563", opacity: 0.7 }}
                  >
                    {category.description}
                  </p>
                  
                  <div 
                    className="flex justify-between items-center mt-4 pt-4 border-t"
                    style={{ borderColor: `${theme.cardBorderColor || "rgba(0,0,0,0.05)"}` }}
                  >
                    <span 
                      className="text-sm font-medium"
                      style={{ color: theme.textColor || "#4b5563" }}
                    >
                      {category.count} APIs
                    </span>
                    
                    <div 
                      className={`flex items-center text-sm font-medium transition-all group-hover:translate-x-1`}
                      style={{ color: theme.primaryColor || "#0070f3" }}
                    >
                      Browse
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            className="group"
            style={{
              borderColor: theme.buttonPrimaryColor || "#0070f3",
              color: theme.buttonPrimaryColor || "#0070f3",
              borderRadius: theme.buttonBorderRadius || "0.375rem",
            }}
          >
            <Link href="/wso2" className="inline-flex items-center">
              View All Categories
              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}