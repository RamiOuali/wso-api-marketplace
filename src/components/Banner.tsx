'use client';

import { useState } from 'react';
import type { Banner as BannerType, BannerType as BannerVariant } from '@/types/banner';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface BannerProps {
  banner: BannerType;
  onClose: () => void;
}

const getBannerColorClass = (type: BannerVariant): string => {
  switch (type) {
    case 'info':
      return 'bg-blue-50 text-blue-800';
    case 'success':
      return 'bg-green-50 text-green-800';
    case 'warning':
      return 'bg-yellow-50 text-yellow-800';
    case 'error':
      return 'bg-red-50 text-red-800';
    default:
      return 'bg-gray-50 text-gray-800';
  }
};

export const BannerComponent = ({ banner, onClose }: BannerProps) => {
  if (!banner.isActive) return null;

  const colorClass = getBannerColorClass(banner.type);

  return (
    <div className={`fixed w-full ${banner.position === 'top' ? 'top-0' : 'bottom-0'} z-50`}>
      <div className={`p-4 ${colorClass}`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium">{banner.title}</h3>
            <p className="text-sm">{banner.content}</p>
            {banner.link && (
              <a
                href={banner.link}
                className="text-sm font-medium underline hover:text-opacity-80"
              >
                {banner.linkText || 'Learn more'}
              </a>
            )}
          </div>
          <button
            type="button"
            className="ml-4 flex-shrink-0 rounded-md p-1.5 hover:bg-opacity-10 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}; 