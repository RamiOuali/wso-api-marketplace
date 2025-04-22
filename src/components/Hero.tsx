"use client";

import { useThemeContext } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const { theme } = useThemeContext();
  const [isVisible, setIsVisible] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [mediaType, setMediaType] = useState(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!theme?.heroBackgroundImage) return;

    // Determine media type based on extension or content type
    const url = theme.heroBackgroundImage.toLowerCase();
    if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov')) {
      setMediaType('video');
    } else if (url.endsWith('.svg')) {
      setMediaType('svg');
    } else {
      setMediaType('image'); // Default to image for png, jpg, etc.
    }
  }, [theme?.heroBackgroundImage]);

  if (!theme) {
    console.warn("No theme available, rendering fallback");
    return null;
  }

  // Determine background style based on media type
  const getBackgroundStyle = () => {
    if (!theme.heroBackgroundImage || mediaType === 'video') {
      return {
        background: theme.heroBackground || "linear-gradient(135deg, #121826 0%, #1e2a44 100%)"
      };
    }

    return {
      backgroundImage: `linear-gradient(to bottom right, ${theme.heroOverlayColor || "rgba(0,0,0,0.6)"}, ${theme.heroOverlayColor || "rgba(0,0,0,0.4)"}), url("${theme.heroBackgroundImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    };
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleMediaLoad = () => {
    setMediaLoaded(true);
  };

  return (
    <section
      className="relative min-h-[70vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={getBackgroundStyle()}
      aria-label="Hero section"
    >
      {/* Video or SVG Background if applicable */}
      {theme.heroBackgroundImage && mediaType === 'video' && (
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={mediaRef}
            src={theme.heroBackgroundImage}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={handleMediaLoad}
            style={{ opacity: mediaLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
          />
        </div>
      )}

      {/* Special handling for SVG backgrounds */}
      {theme.heroBackgroundImage && mediaType === 'svg' && (
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${theme.heroBackgroundImage}")`,
            backgroundSize: "contain",
            opacity: 0.5
          }}
          aria-hidden="true"
        />
      )}

      {/* Dynamic overlay with subtle noise texture */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-transparent"
        style={{
          opacity: theme.heroOverlayOpacity || 0.7,
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.1\"/%3E%3C/svg%3E')",
        }}
      />

      {/* Content container */}
      <motion.div
        className="container relative z-20 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto">
          {/* Optional floating badge/label above the title */}
          {theme.heroBadgeText && (
            <motion.div
              className="inline-block mb-4"
              variants={itemVariants}
            >
              <span
                className="px-4 py-1.5 text-sm font-medium rounded-full bg-opacity-20 backdrop-blur-sm"
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

          <motion.h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight",
              theme.heroGlassEffect ? "backdrop-blur-sm bg-black bg-opacity-20 p-4 rounded-xl inline-block" : "",
              theme.heroTextGradient ? "bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200" : "text-white"
            )}
            style={{
              fontFamily: theme.headingFont || "Inter, sans-serif",
              textShadow: theme.heroTextShadow || "0 2px 10px rgba(0, 0, 0, 0.3)"
            }}
            variants={itemVariants}
          >
            {theme.heroTitle || "Discover Our API Marketplace"}
          </motion.h1>

          {theme.heroSubtitle && (
            <motion.p
              className={cn(
                "text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200",
                "leading-relaxed"
              )}
              style={{
                fontFamily: theme.bodyFont || "Inter, sans-serif",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
              }}
              variants={itemVariants}
            >
              {theme.heroSubtitle}
            </motion.p>
          )}

          {/* Button group with primary and optional secondary button */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            {theme.heroButtonText && theme.heroButtonLink && (
              <Button
                asChild
                className={cn(
                  "px-8 py-3 text-lg font-semibold rounded-full shadow-xl",
                  "hover:shadow-2xl hover:scale-105 transition-all duration-300",
                  "focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                )}
                style={{
                  background: theme.heroButtonColor || "linear-gradient(90deg, #0070f3, #00c4b4)",
                  color: theme.buttonTextColor || "#ffffff",
                }}
              >
                <a
                  href={theme.heroButtonLink}
                  className="inline-flex items-center gap-2"
                  aria-label={theme.heroButtonText}
                >
                  {theme.heroButtonText}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Button>
            )}

            {theme.heroSecondaryButtonText && theme.heroSecondaryButtonLink && (
              <Button
                asChild
                className={cn(
                  "px-8 py-3 text-lg font-semibold rounded-full border-2",
                  "hover:bg-white/10 transition-all duration-300"
                )}
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

          {/* Optional feature highlights */}
          {theme.heroFeatures && (
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-6"
              variants={itemVariants}
            >
              {theme.heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  {feature.icon && (
                    <span dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  )}
                  <span className="text-white/90">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full relative"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Enhanced bottom wave/gradient */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-24 bg-gradient-to-t from-background/90 to-transparent" />
      </div>
    </section>
  );
}
