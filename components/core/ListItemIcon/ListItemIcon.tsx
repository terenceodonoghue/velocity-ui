import React, { FunctionComponent } from 'react';
import listItemIcon from './ListItemIcon.styles';
import type { ListItemIconProps } from './ListItemIcon.types';

const ListItemIcon: FunctionComponent<ListItemIconProps> = ({
  icon: Icon,
  ...props
}) => <Icon css={listItemIcon} data-testid="listitemicon" {...props} />;

export default ListItemIcon;
