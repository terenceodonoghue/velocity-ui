import { HTMLAttributes } from 'react';

export interface ListItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
}
