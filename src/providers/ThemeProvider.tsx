'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Theme } from '@/types/theme';

interface ThemeContextType {
  theme: Theme | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ 
  children,
  theme 
}: { 
  children: ReactNode;
  theme: Theme | null;
}) {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
} 