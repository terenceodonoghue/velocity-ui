import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '~/types';

export const chart: InterpolationWithTheme<Theme> = (theme) => css`
  .recharts-area-dot {
    fill: ${theme.colors.white};
  }

  .recharts-cartesian-axis-tick-value {
    fill: #b0bac9;
  }

  .recharts-legend-item {
    margin-left: 12px;
    color: ${theme.colors.blueyGrey};
    font-size: ${theme.typography.baseFontSize};
  }

  .recharts-legend-item-text {
    margin-left: 6px;
    vertical-align: middle;
  }

  .recharts-legend-wrapper {
    margin: 0 -10px;
    transform: translateY(-60%);
  }

  .recharts-responsive-Surface {
    margin: 45px -10px 0;
  }
`;

export const metric = css`
  padding: 16px 24px;
`;

export const metricIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 48px;
  margin-bottom: 16px;
  width: 48px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 19px;

  [data-role='vehicles-on-track'] & {
    background-color: rgba(51, 172, 46, 0.15);
    background-image: url(./check-purple.svg);
  }

  [data-role='distance-driven'] & {
    background-color: rgba(0, 193, 212, 0.15);
    background-image: url(./marker-blue.svg);
  }

  [data-role='energy-consumed'] & {
    background-color: rgba(140, 84, 255, 0.15);
    background-image: url(./energy.svg);
  }

  [data-role='total-drive-time'] & {
    background-color: rgba(247, 193, 55, 0.15);
    background-image: url(./dynamic.svg);
  }
`;

export const metricLabel: InterpolationWithTheme<Theme> = (theme) => css`
  margin-top: 1px;
  color: ${theme.colors.blueyGrey};
  line-height: 1.47;
`;

export const metricValue: InterpolationWithTheme<Theme> = (theme) => css`
  font-size: 320%;
  font-weight: ${theme.typography.fontWeightLight};
  letter-spacing: -0.6px;
`;
