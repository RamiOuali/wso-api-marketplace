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
  const [banner, setBanner] = useState<BannerType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('/api/banners');
        if (!response.ok) {
          throw new Error('Failed to fetch banners');
        }
        const data: PrismaBanner[] = await response.json();

        // Filter for active banners with top position
        const activeBanners = data
          .filter(banner => banner.isActive && banner.position === 'top');

        // Take only the first banner if any exist
        if (activeBanners.length > 0) {
          const firstBanner = activeBanners[0];
          setBanner({
            id: firstBanner.id.toString(),
            message: firstBanner.content,
            type: firstBanner.type as BannerType['type'],
            dismissible: true,
            isActive: firstBanner.isActive,
            position: firstBanner.position as 'top' | 'bottom',
            createdAt: firstBanner.createdAt,
            updatedAt: firstBanner.updatedAt
          });
        }
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
      {banner && (
        <BannerComponent
          key={banner.id}
          banner={banner}
          onClose={() => {
            setBanner(null);
          }}
        />
      )}
    </>
  );
}
