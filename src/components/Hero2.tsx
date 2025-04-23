"use client";

import { useThemeContext } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define proper types for the theme
interface HeroFeature {
  icon?: string;
  text: string;
}

interface HeroTheme {
  heroBackgroundImage?: string;
  heroImageRight?: string;
  heroBackground?: string;
  heroOverlayColor?: string;
  heroOverlayOpacity?: number;
  heroBadgeText?: string;
  heroBadgeColor?: string;
  heroBadgeTextColor?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroGlassEffect?: boolean;
  heroTextGradient?: boolean;
  heroTextShadow?: string;
  headingFont?: string;
  bodyFont?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
  heroButtonColor?: string;
  buttonTextColor?: string;
  heroSecondaryButtonText?: string;
  heroSecondaryButtonLink?: string;
  heroSecondaryButtonColor?: string;
  heroSecondaryButtonTextColor?: string;
  heroFeatures?: HeroFeature[];
}

interface ThemeContextType {
  theme: HeroTheme | null;
}

export function Hero2() {
  const { theme } = useThemeContext() as ThemeContextType;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!theme) {
    console.warn("No theme available, rendering fallback");
    return null;
  }

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background: theme.heroBackground || "linear-gradient(135deg, #121826 0%, #1e2a44 100%)"
      }}
      aria-label="Hero section with left text and right image"
    >
      {/* Background pattern or texture */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content area */}
          <motion.div
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Badge/Label */}
            {theme.heroBadgeText && (
              <motion.div
                className="mb-4"
                variants={itemVariants}
              >
                <span
                  className="px-4 py-1.5 text-sm font-medium rounded-full bg-opacity-20 backdrop-blur-sm inline-block"
                  style={{
                    backgroundColor: theme.heroBadgeColor || "rgba(255, 255, 255, 0.1)",
                    color: theme.heroBadgeTextColor || "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                >
                  {theme.heroBadgeText}
                </span>
              </motion.div>
            )}

            {/* Main Title */}
            <motion.h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
                theme.heroTextGradient ? "bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200" : "text-white"
              )}
              style={{
                fontFamily: theme.headingFont || "Inter, sans-serif",
                textShadow: theme.heroTextShadow || "0 2px 4px rgba(0, 0, 0, 0.1)"
              }}
              variants={itemVariants}
            >
              {theme.heroTitle || "Elevate Your API Experience"}
            </motion.h1>

            {/* Subtitle/Description */}
            {theme.heroSubtitle && (
              <motion.p
                className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl"
                style={{
                  fontFamily: theme.bodyFont || "Inter, sans-serif",
                }}
                variants={itemVariants}
              >
                {theme.heroSubtitle}
              </motion.p>
            )}

            {/* Feature list with checkmarks */}
            {theme.heroFeatures && (
              <motion.div 
                className="mb-8 space-y-4"
                variants={itemVariants}
              >
                {theme.heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-200">{feature.text}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              {theme.heroButtonText && theme.heroButtonLink && (
                <Button
                  asChild
                  className={cn(
                    "px-6 py-3 text-base font-medium rounded-lg shadow-lg",
                    "hover:shadow-xl hover:scale-105 transition-all duration-300"
                  )}
                  style={{
                    background: theme.heroButtonColor || "linear-gradient(90deg, #0070f3, #00c4b4)",
                    color: theme.buttonTextColor || "#ffffff",
                  }}
                >
                  <a
                    href={theme.heroButtonLink}
                    className="inline-flex items-center gap-2"
                  >
                    {theme.heroButtonText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Button>
              )}

              {theme.heroSecondaryButtonText && theme.heroSecondaryButtonLink && (
                <Button
                  asChild
                  className="px-6 py-3 text-base font-medium rounded-lg border-2"
                  variant="outline"
                  style={{
                    borderColor: theme.heroSecondaryButtonColor || "rgba(255, 255, 255, 0.5)",
                    color: theme.heroSecondaryButtonTextColor || "#ffffff",
                  }}
                >
                  <a href={theme.heroSecondaryButtonLink}>
                    {theme.heroSecondaryButtonText}
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right image area */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl"></div>
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-square md:aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={theme.heroBackgroundImage || "https://via.placeholder.com/800x600"}
                  alt="Product illustration"
                  className="w-full h-full object-cover"
                  onLoad={handleImageLoad}
                  style={{ 
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease'
                  }}
                />
                
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
              </div>
              
              {/* Floating badge/card */}
              <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">Live API Status</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
