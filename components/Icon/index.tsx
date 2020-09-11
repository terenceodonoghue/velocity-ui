/** @jsx jsx */
import { FunctionComponent, ReactElement } from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { IconProps, Theme } from '~/types';
import * as svg from './svg';
import icon from './Icon.styles';

const withTheme = (
  BaseIcon: FunctionComponent<IconProps>,
): FunctionComponent<IconProps> => ({
  fill,
  size = 24,
  title,
  ...props
}): ReactElement => {
  const theme = useTheme<Theme>();

  return (
    <BaseIcon
      {...props}
      css={icon(size)}
      fill={fill}
      theme={theme}
      title={title}
    />
  );
};

export const Analytics = withTheme(svg.Analytics);
export const Chat = withTheme(svg.Chat);
export const Dashboard = withTheme(svg.Dashboard);
export const Map = withTheme(svg.Map);
export const Messages = withTheme(svg.Messages);
export const Notifications = withTheme(svg.Notifications);
export const Service = withTheme(svg.Service);
export const Settings = withTheme(svg.Settings);
export const Vehicles = withTheme(svg.Vehicles);
