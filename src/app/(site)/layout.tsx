// app/(site)/layout.tsx
import { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { getThemeData } from '@/components/ThemeData';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const theme = await getThemeData();
  
  return (
    <>
      {theme ? (
        <ThemeProvider theme={theme}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg">No active theme found. Please check your database configuration.</p>
        </div>
      )}
    </>
  );
}
