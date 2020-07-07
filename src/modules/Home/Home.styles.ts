import { css, Interpolation, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '../../components';

export const topDriversAvatar = css`
  height: 48px;
  width: 48px;
`;

export const topDriverImg = (position: number) => (): Interpolation => css`
  &::after {
    content: '${position}';
  }
`;

export const welcome = css`
  display: flex;
  height: 230px;
  padding: 0 27px 0 46px;
  width: 558px;
`;

export const welcomeContent = css`
  padding: 45px 0 42px 61px;
`;

export const welcomeHeading: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0 0 13px;
  width: 135px;
  font-size: 28px;
  font-weight: ${theme.typography.fontWeightLight};
  line-height: 1.14;
`;

export const welcomeText: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0;
  color: ${theme.colors.blueyGrey};
  line-height: 1.47;
`;
