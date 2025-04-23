"use client";

import { useThemeContext } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Define proper types for the theme
interface HeroFeature {
  icon?: string;
  text: string;
}

interface Testimonial {
  text: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface HeroTheme {
  heroBackgroundImage?: string;
  heroBgLeft?: string;
  heroBgRight?: string;
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
  heroTestimonial?: Testimonial;
  heroStats?: Array<{ label: string; value: string }>;
}

interface ThemeContextType {
  theme: HeroTheme | null;
}

export function Hero3() {
  const { theme } = useThemeContext() as ThemeContextType;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [countersStarted]);

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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <section className="relative overflow-hidden" aria-label="Split hero section">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left content area */}
        <div
          className="min-h-[60vh] lg:min-h-screen relative z-10 flex items-center"
          style={{
            background: theme.heroBackground || "linear-gradient(135deg, #121826 0%, #1e2a44 100%)"
          }}
        >
          <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Create dots at intersections -->
    <circle cx="10" cy="10" r="2" fill="white" opacity="0.7"/>
    <circle cx="30" cy="15" r="2" fill="white" opacity="0.7"/>
    <circle cx="50" cy="10" r="2" fill="white" opacity="0.7"/>
    <circle cx="70" cy="20" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="90" cy="15" r="2" fill="white" opacity="0.7"/>
    <circle cx="15" cy="30" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="35" cy="35" r="2" fill="white" opacity="0.7"/>
    <circle cx="60" cy="40" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="80" cy="35" r="2" fill="white" opacity="0.7"/>
    <circle cx="10" cy="50" r="2" fill="white" opacity="0.7"/>
    <circle cx="25" cy="55" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="45" cy="60" r="2" fill="white" opacity="0.7"/>
    <circle cx="65" cy="65" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="85" cy="55" r="2" fill="white" opacity="0.7"/>
    <circle cx="20" cy="75" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="40" cy="80" r="2" fill="white" opacity="0.7"/>
    <circle cx="55" cy="85" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="75" cy="90" r="2" fill="white" opacity="0.7"/>
    <circle cx="90" cy="80" r="1.5" fill="white" opacity="0.7"/>
    
    <!-- Connect the dots with lines -->
    <line x1="10" y1="10" x2="30" y2="15" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="30" y1="15" x2="50" y2="10" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="50" y1="10" x2="70" y2="20" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="70" y1="20" x2="90" y2="15" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="10" y1="10" x2="15" y2="30" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="30" y1="15" x2="35" y2="35" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="50" y1="10" x2="60" y2="40" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="70" y1="20" x2="80" y2="35" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="15" y1="30" x2="35" y2="35" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="35" y1="35" x2="60" y2="40" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="60" y1="40" x2="80" y2="35" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="15" y1="30" x2="10" y2="50" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="35" y1="35" x2="25" y2="55" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="60" y1="40" x2="45" y2="60" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="80" y1="35" x2="65" y2="65" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="10" y1="50" x2="25" y2="55" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="25" y1="55" x2="45" y2="60" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="45" y1="60" x2="65" y2="65" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="65" y1="65" x2="85" y2="55" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="10" y1="50" x2="20" y2="75" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="25" y1="55" x2="40" y2="80" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="45" y1="60" x2="55" y2="85" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="65" y1="65" x2="75" y2="90" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="85" y1="55" x2="90" y2="80" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="20" y1="75" x2="40" y2="80" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="40" y1="80" x2="55" y2="85" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="55" y1="85" x2="75" y2="90" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <line x1="75" y1="90" x2="90" y2="80" stroke="white" stroke-width="0.5" opacity="0.3"/>
  </svg>`)}`,
            backgroundSize: "400px 400px"
          }}></div>
          <motion.div
            className="px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-0 w-full max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Badge/Label */}
            {theme.heroBadgeText && (
              <motion.div
                className="mb-6"
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
              {theme.heroTitle || "Next-Generation API Solutions"}
            </motion.h1>

            {/* Subtitle/Description */}
            {theme.heroSubtitle && (
              <motion.p
                className="text-lg mb-8 text-gray-300 max-w-xl"
                style={{
                  fontFamily: theme.bodyFont || "Inter, sans-serif",
                }}
                variants={itemVariants}
              >
                {theme.heroSubtitle}
              </motion.p>
            )}

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
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

            {/* Stats Section */}
            {theme.heroStats && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                ref={counterRef}
                variants={itemVariants}
              >
                {theme.heroStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                    custom={index}
                    variants={statsVariants}
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Testimonial Section */}
            {theme.heroTestimonial && (
              <motion.div
                className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                variants={itemVariants}
              >
                <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M14.001 7.001v8h-8v8h8v-8h8v-8h-8zM30.001 15.001h-8v-8h-8v8h8v8h8v-8z" />
                </svg>
                <p className="text-gray-200 italic mb-4">{theme.heroTestimonial.text}</p>
                <div className="flex items-center">
                  {theme.heroTestimonial.avatar && (
                    <img
                      src={theme.heroTestimonial.avatar}
                      alt={theme.heroTestimonial.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                  <div>
                    <div className="font-medium text-white">{theme.heroTestimonial.author}</div>
                    {theme.heroTestimonial.role && (
                      <div className="text-sm text-gray-300">{theme.heroTestimonial.role}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Right content area */}
        <div
          className="min-h-[50vh] lg:min-h-screen relative flex items-center justify-center overflow-hidden"
          style={{
            background: theme.heroBgRight || "#0f172a",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)"
          }}></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl">
            {/* Animated glass showcase */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="relative w-full aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 p-6 shadow-2xl mx-auto"
            >
              {/* Dashboard visualization or product image */}
              <div className="absolute inset-0 m-2 rounded-xl overflow-hidden">
                <img
                  src={theme.heroBackgroundImage || "https://via.placeholder.com/800x600"}
                  alt="Product dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating interactive elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-6 top-1/4 bg-white p-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Uptime</div>
                    <div className="font-medium">99.9%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -bottom-6 right-12 bg-white p-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Speed</div>
                    <div className="font-medium">50ms</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute -right-6 top-1/3 bg-white p-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Security</div>
                    <div className="font-medium">Enterprise</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Code snippet or API request example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">API Request Example</div>
              </div>
              <div className="p-4 text-green-400 font-mono text-sm overflow-x-auto">
                <pre>{`curl -X POST https://api.example.com/v1/data \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "users",
    "limit": 10
  }'`}</pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
