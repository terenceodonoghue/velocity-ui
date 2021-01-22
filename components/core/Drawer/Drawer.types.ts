import { HTMLAttributes } from 'react';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  anchor?: 'left' | 'right';
  open?: boolean;
}
