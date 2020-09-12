import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '~/types';
import { hexRgb as hexrgb } from '~/utils';

export const row = css`
  display: flex;
`;

export const topDriver = css`
  position: relative;
  display: flex;
  margin: 12px 0;
  line-height: 1.47em;
`;

export const topDrivers = css`
  padding: 32px 24px 15px;
`;

export const topDriverAvatar = css`
  vertical-align: middle;
  height: 48px;
  width: 48px;
`;

export const topDriverDetails = css`
  flex: 1;

  & > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`;

export const topDriverName: InterpolationWithTheme<Theme> = (theme) => css`
  font-weight: ${theme.typography.fontWeightMedium};
`;

export const topDriverRank = (
  position: number,
): InterpolationWithTheme<Theme> => (theme) => css`
  margin: 0 16px 0 0;

  &::after {
    content: '${position}';
    position: absolute;
    top: 0;
    left: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    box-shadow: 0 3px 10px ${hexrgb(theme.colors.blue, 0.297866)};
    background: ${theme.colors.white};
    color: #8097b1;
    font-size: 66.67%;
    font-weight: ${theme.typography.fontWeightMedium};
  }
`;

export const topDriverVehicle: InterpolationWithTheme<Theme> = (theme) => css`
  color: ${theme.colors.blueyGrey};
`;

export const welcome = css`
  display: flex;
  flex-basis: 100%;
  height: 230px;
  padding: 0 27px 0 46px;
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
