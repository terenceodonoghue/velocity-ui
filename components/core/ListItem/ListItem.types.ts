import { LiHTMLAttributes } from 'react';

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  selected?: boolean;
}
