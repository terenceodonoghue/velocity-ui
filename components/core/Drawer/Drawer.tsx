import React, { FunctionComponent } from 'react';
import drawer from './Drawer.styles';
import type { DrawerProps } from './Drawer.types';

const Drawer: FunctionComponent<DrawerProps> = ({
  anchor = 'left',
  children,
  open = false,
  ...props
}) => (
  <div
    css={[
      drawer,
      anchor === 'left' ? { left: 0 } : { right: 0 },
      {
        width: open ? '215px' : '80px',
      },
    ]}
    data-testid="drawer"
    {...props}
  >
    {children}
  </div>
);

export default Drawer;
