'use client';

import { useEffect, useState } from 'react';
import { Banner as BannerType } from '@/types/banner';
import { BannerComponent } from './Banner';

interface PrismaBanner {
  id: number;
  title: string;
  content: string;
  type: string;
  backgroundColor: string;
  textColor: string;
  isActive: boolean;
  position: string;
  createdAt: Date;
  updatedAt: Date;
}

export function BannerList() {
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('/api/banners');
        if (!response.ok) {
          throw new Error('Failed to fetch banners');
        }
        const data: PrismaBanner[] = await response.json();
        
        // Transform Prisma banners to component banners
        const transformedBanners: BannerType[] = data
          .filter(banner => banner.isActive)
          .map(banner => ({
            id: banner.id.toString(),
            message: banner.content,
            type: banner.type as BannerType['type'],
            dismissible: true,
            isActive: banner.isActive,
            position: banner.position as 'top' | 'bottom',
            createdAt: banner.createdAt,
            updatedAt: banner.updatedAt
          }));
        
        setBanners(transformedBanners);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch banners');
        console.error('Error fetching banners:', err);
      }
    };

    fetchBanners();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error loading banners: {error}
      </div>
    );
  }

  return (
    <>
      {banners
        .filter(banner => banner.position === 'top')
        .map(banner => (
          <BannerComponent
            key={banner.id}
            banner={banner}
            onClose={() => {
              setBanners(banners.filter(b => b.id !== banner.id));
            }}
          />
        ))}
      <div className="flex-grow">{/* Main content goes here */}</div>
      {banners
        .filter(banner => banner.position === 'bottom')
        .map(banner => (
          <BannerComponent
            key={banner.id}
            banner={banner}
            onClose={() => {
              setBanners(banners.filter(b => b.id !== banner.id));
            }}
          />
        ))}
    </>
  );
} 