import React, { FunctionComponent } from 'react';
import listItemText from './ListItemText.styles';
import type { ListItemTextProps } from './ListItemText.types';

const ListItemText: FunctionComponent<ListItemTextProps> = ({
  children,
  ...props
}) => (
  <span css={listItemText} data-testid="listitemtext" {...props}>
    {children}
  </span>
);

export default ListItemText;
