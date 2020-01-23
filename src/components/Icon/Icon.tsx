/** @jsx jsx */
import { FunctionComponent, ReactElement } from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import * as svg from './svg';
import icon from './Icon.styles';
import { Theme, Themeable } from '..';

export interface IconProps extends Themeable {
  fill?: string;
  title?: string;
}

const withTheme = (
  BaseIcon: FunctionComponent<IconProps>,
): FunctionComponent<IconProps> => ({
  fill,
  title,
  ...props
}): ReactElement => {
  const theme = useTheme<Theme>();

  return (
    <BaseIcon css={icon} fill={fill} theme={theme} title={title} {...props} />
  );
};

export const Analytics = withTheme(svg.Analytics);
export const Chat = withTheme(svg.Chat);
export const Dashboard = withTheme(svg.Dashboard);
export const Map = withTheme(svg.Map);
export const Service = withTheme(svg.Service);
export const Settings = withTheme(svg.Settings);
export const Vehicles = withTheme(svg.Vehicles);
