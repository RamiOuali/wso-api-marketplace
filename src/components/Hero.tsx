'use client';

import { useThemeContext } from '@/providers/ThemeProvider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  const { theme } = useThemeContext();

  if (!theme) {
    console.log('No theme available');
    return null;
  }

  // Log all theme properties used in the Hero component for debugging
  console.log('Hero Theme Info:', {
    heroBackground: theme.heroBackground,
    heroBackgroundImage: theme.heroBackgroundImage,
    heroOverlayColor: theme.heroOverlayColor,
    heroOverlayOpacity: theme.heroOverlayOpacity,
    heroTextColor: theme.heroTextColor,
    heroTitle: theme.heroTitle,
    heroSubtitle: theme.heroSubtitle,
    heroButtonText: theme.heroButtonText,
    heroButtonLink: theme.heroButtonLink,
    heroButtonColor: theme.heroButtonColor,
  });

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: theme.heroBackground || 'transparent',
        backgroundImage: theme.heroBackgroundImage ? `url('${theme.heroBackgroundImage}')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {theme.heroOverlayColor && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: theme.heroOverlayColor,
            opacity: theme.heroOverlayOpacity || 0.5,
          }}
        />
      )}

      <div className="container relative z-20 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{ color: theme.heroTextColor }}
        >
          {theme.heroTitle}
        </h1>

        {theme.heroSubtitle && (
          <p
            className="text-xl md:text-2xl mb-8"
            style={{ color: theme.heroTextColor }}
          >
            {theme.heroSubtitle}
          </p>
        )}

        {theme.heroButtonText && theme.heroButtonLink && (
          <Button
            asChild
            className="px-8 py-6 text-lg"
            style={{ backgroundColor: theme.heroButtonColor }}
          >
            <a href={theme.heroButtonLink}>{theme.heroButtonText}</a>
          </Button>
        )}
      </div>
    </section>
  );
}