import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '..';

export const appBar: InterpolationWithTheme<Theme> = (theme) => css`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e4e8f0;
  padding: 0 112px;
  height: 80px;
  background-color: ${theme.colors.white};
`;

export const appBarContent = css`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 0 -5px;

  & > button {
    margin: 0 5px;
  }

  & > img {
    margin: 0 5px 0 8px;
  }
`;

export const card: InterpolationWithTheme<Theme> = (theme) => css`
  display: block;
  border-radius: 1px;
  border: solid 1px rgba(46, 91, 255, 0.08);
  box-shadow: 0 10px 20px 0 rgba(46, 91, 255, 0.07);
  padding: 32px 24px;
  background-color: ${theme.colors.white};
`;

export const cardHeading: InterpolationWithTheme<Theme> = (theme) => `
  margin: 0 0 26px 0;
  color: ${theme.colors.blueyGrey};
  font-size: 13px;
  font-weight: ${theme.typography.fontWeightRegular};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const logo = css`
  cursor: pointer;
`;
