import { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { getThemeData } from '@/components/ThemeData';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: ReactNode }) {
  const theme = await getThemeData();
  
  // Debug theme data
  console.log('Theme data:', theme);

  return (
    <html lang="en">
      <body className={inter.className}>
        {theme ? (
          <ThemeProvider theme={theme}>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
    <Footer/>
          </ThemeProvider>
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg">No active theme found. Please check your database configuration.</p>
          </div>
        )}
    
      </body>
    </html>
  );
}
