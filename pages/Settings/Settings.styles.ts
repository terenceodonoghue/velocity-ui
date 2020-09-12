import { css, Interpolation, InterpolationWithTheme } from '@emotion/core';
import { Selectable, Theme } from '~/types';

export const button = css`
  margin: 13px 0 18px 8px;
`;

export const integration = css`
  flex: 0 1 364px;
  padding: 13px 11px;
`;

export const integrationContent = ({
  selected,
}: Selectable): InterpolationWithTheme<Theme> => (theme): Interpolation => css`
  position: relative;
  display: flex;
  align-items: center;
  border: solid 1px ${selected ? theme.colors.blue : '#e0e7ff'};
  border-radius: 5px;
  padding: 19px 21px;
  cursor: pointer;
  ${selected &&
  `&::after {
    position: absolute;
    right: -8px;
    top: -8px;
    content: '';
    background-color: ${theme.colors.blue};
    background-image: url(./check-white.svg);
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    height: 18px;
    width: 18px;
  }`}
`;

export const integrationDescription: InterpolationWithTheme<Theme> = (
  theme,
) => css`
  margin: 0;
  color: ${theme.colors.blueyGrey};
  font-weight: ${theme.typography.fontWeightRegular};
  line-height: 1.47;
`;

export const integrationIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 70px;
  margin: 0 12px 0 0;
  width: 70px;
  background-color: rgba(128, 151, 177, 0.1);
`;

export const integrationName: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0;
  font-weight: ${theme.typography.fontWeightMedium};
  line-height: 1.47;
`;

export const palette = ({
  colors,
}: {
  colors: string[];
}) => (): Interpolation => css`
  border-radius: 4px;
  height: 65px;
  width: 120px;
  background: linear-gradient(
      90deg,
      ${colors[0]} 33.33%,
      ${colors[1]} 33.33%,
      ${colors[1]} 66.66%,
      ${colors[2]} 66.66%
    )
    no-repeat;
`;

export const radioInput = css`
  padding: 12px 0;
`;

export const settingsDescription = css`
  flex-basis: 100%;
  margin: 0 0 25px 0;
  padding: 0 12px;
  line-height: 1.47;
`;

export const settingsFields = css`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -11px;
  padding: 0 8px;
`;

export const switchInput = css`
  margin: 0 87px 0 0;
  padding: 10px 11px;
`;

export const textInput = css`
  flex: 0 1 290px;
  padding: 12px 11px;

  &:first-of-type {
    flex: 0 1 100%;
  }
`;

export const theme = css`
  padding: 8px 11px;
  margin: 0 13px 0 0;
`;
