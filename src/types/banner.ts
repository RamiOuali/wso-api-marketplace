export type BannerType = 'info' | 'success' | 'warning' | 'error';

export interface Banner {
  id: number;
  title: string;
  content: string;
  type: BannerType;
  backgroundColor: string;
  textColor: string;
  isActive: boolean;
  startDate?: Date;
  endDate?: Date;
  link?: string;
  linkText?: string;
  position: 'top' | 'bottom';
  themeId: number;
  createdAt: Date;
  updatedAt: Date;
} 