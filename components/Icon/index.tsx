/** @jsx jsx */
import { FunctionComponent, ReactElement } from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { BaseIconProps, IconProps, Theme } from '~/types';
import * as svg from './svg';
import icon from './Icon.styles';

const baseIcon = (
  BaseIcon: FunctionComponent<IconProps>,
): FunctionComponent<BaseIconProps> => ({
  size = 24,
  title,
  ...props
}): ReactElement => <BaseIcon {...props} css={icon(size)} title={title} />;

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
export const Check = withTheme(svg.Check);
export const Dashboard = withTheme(svg.Dashboard);
export const Dynamic = withTheme(svg.Dynamic);
export const Energy = withTheme(svg.Energy);
export const GitHub = baseIcon(svg.GitHub);
export const InVision = baseIcon(svg.InVision);
export const Mailchimp = baseIcon(svg.Mailchimp);
export const Map = withTheme(svg.Map);
export const Marker = withTheme(svg.Marker);
export const Medium = baseIcon(svg.Medium);
export const Messages = withTheme(svg.Messages);
export const Notifications = withTheme(svg.Notifications);
export const Service = withTheme(svg.Service);
export const Settings = withTheme(svg.Settings);
export const Slack = baseIcon(svg.Slack);
export const Twitter = baseIcon(svg.Twitter);
export const Vehicles = withTheme(svg.Vehicles);
