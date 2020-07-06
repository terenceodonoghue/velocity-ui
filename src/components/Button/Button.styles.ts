import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '..';

export const button: InterpolationWithTheme<Theme> = (theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  font-size: ${theme.typography.baseFontSize};
  font-weight: ${theme.typography.fontWeightMedium};
  cursor: pointer;
  transition: ${theme.effects.transition};

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:focus {
    outline: 0;
  }
`;

export const contained: InterpolationWithTheme<Theme> = (theme) => css`
  ${button(theme)}
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};

  &:enabled:hover {
    background-color: ${theme.colors.blueDark};
  }
`;

export const icon: InterpolationWithTheme<Theme> = (theme) => css`
  ${button(theme)}
  background: none;
  border-radius: 5px;
  padding: 8px;
  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.1);
  }
`;

export const outlined: InterpolationWithTheme<Theme> = (theme) => css`
  ${button(theme)}
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background: rgba(46, 91, 255, 0.2);
  color: ${theme.colors.blue};

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.3);
  }
`;

export const text: InterpolationWithTheme<Theme> = (theme) => css`
  ${button(theme)}
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background: none;
  color: ${theme.colors.blue};

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.1);
  }
`;

export const fab: InterpolationWithTheme<Theme> = (theme) => css`
  ${button(theme)}
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};

  &:enabled:hover {
    background-color: ${theme.colors.blueDark};
  }
`;
