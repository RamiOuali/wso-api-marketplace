"use client";

import { JSX, useEffect, useState } from "react";
import { FeaturedAPIs } from "@/components/FeaturedCards";
import { Hero } from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";
import { Hero3 } from "@/components/Hero3";
import { useThemeContext } from "@/providers/ThemeProvider";
import AutoProgressingTimeline from "@/components/steps";
import { ApiFeatureShowcase } from "@/components/api-features";


export default function Home() {
  const { theme } = useThemeContext() || { theme: null };
  const [heroComponent, setHeroComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (!theme || !theme.heroDesign) {
      setHeroComponent(<Hero />);
      return;
    }

    console.log("Theme design:", theme.heroDesign);

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

  return (
    <div className="min-h-screen">

      {heroComponent}
         <FeaturedAPIs />
      <AutoProgressingTimeline/>
      <ApiFeatureShowcase/>
    </div>
  );
}
