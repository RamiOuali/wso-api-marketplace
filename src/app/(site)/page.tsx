"use client";

import { JSX, useEffect, useState } from "react";
import { FeaturedAPIs } from "@/components/FeaturedCards";
import { Hero } from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";
import { Hero3 } from "@/components/Hero3";
import { useThemeContext } from "@/providers/ThemeProvider";
import AutoProgressingTimeline from "@/components/steps";
import { ApiFeatureShowcase } from "@/components/api-features";
import { ApiCategories } from "@/components/ApiCategories";
import { ComparisonSection } from "@/components/ComparisonSection";
import { motion } from "framer-motion";

export default function Home() {
  const { theme } = useThemeContext() || { theme: null };
  const [heroComponent, setHeroComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (!theme || !theme.heroDesign) {
      setHeroComponent(<Hero />);
      return;
    }

    switch (theme.heroDesign) {
      case "Hero":
        setHeroComponent(<Hero />);
        break;
      case "Hero2":
        setHeroComponent(<Hero2 />);
        break;
      case "Hero3":
        setHeroComponent(<Hero3 />);
        break;
      default:
        setHeroComponent(<Hero />);
        break;
    }
  }, [theme]);

  // Scroll animation controls
  const scrollVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dynamically loads based on theme settings */}
      {heroComponent}

      {/* Featured APIs Section - Modernized cards displaying featured APIs */}
      <FeaturedAPIs />

      {/* API Categories Section - Visual category navigation */}
      <ApiCategories />
      
      {/* Interactive Timeline Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
      >
        <AutoProgressingTimeline />
      </motion.div>

      {/* Feature Comparison Section */}
      <ComparisonSection />

      {/* API Features Showcase */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
      >
        <ApiFeatureShowcase />
      </motion.div>
    </div>
  );
}
