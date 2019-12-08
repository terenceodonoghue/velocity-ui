/** @jsx jsx */
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import * as svg from './svg';
import icon from './Icon.styles';
import { theme } from '../Global/Global';

const withTheme = (BaseIcon) => {
  const Icon = ({ fill, title, ...props }) => (
    <BaseIcon css={icon} fill={fill} theme={theme} title={title} {...props} />
  );

  Icon.propTypes = {
    fill: string,
    /**
     * The size of the icon.
     */
    title: string,
  };

  Icon.defaultProps = {
    fill: theme.colors.primary,
    title: null,
  };

  return Icon;
};

export const Analytics = withTheme(svg.Analytics);
export const Chat = withTheme(svg.Chat);
export const Dashboard = withTheme(svg.Dashboard);
export const Map = withTheme(svg.Map);
export const Service = withTheme(svg.Service);
export const Settings = withTheme(svg.Settings);
export const Vehicles = withTheme(svg.Vehicles);
