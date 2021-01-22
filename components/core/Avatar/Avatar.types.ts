import { ImgHTMLAttributes } from 'react';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  size?: number;
  variant?: 'rounded' | 'square';
}
