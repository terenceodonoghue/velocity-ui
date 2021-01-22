import React, { FunctionComponent, HTMLAttributes } from 'react';
import appBar from './AppBar.styles';

const AppBar: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div css={appBar} data-testid="appbar" {...props}>
    {children}
  </div>
);

export default AppBar;
