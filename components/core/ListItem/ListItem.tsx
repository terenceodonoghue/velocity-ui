import React, { forwardRef } from 'react';
import { rgba } from 'polished';
import listItem from './ListItem.styles';
import type { ListItemProps } from './ListItem.types';

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, selected = false, ...props }, ref) => (
    <li
      css={[
        listItem,
        ({ palette }) => ({
          borderLeft: `solid 3px ${selected ? palette.accent : 'transparent'}`,
          backgroundColor: selected ? rgba(palette.accent, 0.1) : undefined,
          color: selected ? palette.accent : palette.neutral[500],
          '&:hover': {
            backgroundColor: !selected && rgba(palette.accent, 0.1),
          },
        }),
      ]}
      data-testid="listitem"
      ref={ref}
      {...props}
    >
      {children}
    </li>
  ),
);

export default ListItem;
