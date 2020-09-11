import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '~/types';

export const sidebar = css`
  height: 100%;
  width: 357px;
`;

export const sidebarAvatar = css`
  display: block;
  height: 140px;
  margin: 32px auto 19px;
  width: 140px;
`;

export const sidebarButton = css`
  flex: 1;
  margin: 0 8px;
  width: unset;
`;

export const sidebarButtons = css`
  display: flex;
  margin: 0 -8px 40px;
`;

export const sidebarDivider = css`
  border: 0;
  height: 1px;
  margin-bottom: 42px;
  background-color: #e4e8f0;
`;

export const sidebarFieldLabel = css`
  color: #b0bac9;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const sidebarFieldValue = css`
  margin: 0 0 24px;
  line-height: 1.47;
`;

export const sidebarJobTitle: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0 0 33px;
  color: ${theme.colors.blueyGrey};
  font-size: ${theme.typography.baseFontSize};
  font-weight: ${theme.typography.fontWeightRegular};
  text-align: center;
`;

export const sidebarName: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0 0 3px;
  font-size: 28px;
  font-weight: ${theme.typography.fontWeightLight};
  text-align: center;
`;
