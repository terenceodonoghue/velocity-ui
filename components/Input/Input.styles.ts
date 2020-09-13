import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '~/types';

export const checkboxLabel = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 36px;
  user-select: none;

  input {
    height: 0;
    margin: 0;
    width: 0;
    opacity: 0;
  }
`;

export const checkboxSwitch: InterpolationWithTheme<Theme> = (theme) => css`
  position: relative;
  border-radius: 10px;
  height: 20px;
  width: 36px;
  background-color: rgba(135, 152, 173, 0.4);
  cursor: pointer;
  transition: ${theme.effects.transition};

  input:disabled + & {
    opacity: 0.4;
  }

  input:checked:enabled + & {
    background-color: ${theme.colors.green};
  }

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    background-color: ${theme.colors.white};
    transition: ${theme.effects.transition};

    input:checked + & {
      transform: translateX(16px);
    }
  }
`;

export const checkboxText: InterpolationWithTheme<Theme> = (theme) => css`
  margin-right: 58px;
  font-weight: ${theme.typography.fontWeightMedium};
  line-height: 1.47;

  p {
    margin: 0;

    &:nth-of-type(2) {
      color: ${theme.colors.blueyGrey};
      font-weight: ${theme.typography.fontWeightRegular};
    }
  }
`;

export const radioLabel: InterpolationWithTheme<Theme> = (theme) => css`
  display: flex;
  align-items: center;
  font-weight: ${theme.typography.fontWeightMedium};
  cursor: pointer;

  input {
    height: 0;
    margin: 0;
    width: 0;
    opacity: 0;
  }
`;

export const radioSwitch: InterpolationWithTheme<Theme> = (theme) => css`
  display: inline-block;
  border: solid 1px rgba(128, 151, 177, 0.5);
  border-radius: 50%;
  height: 16px;
  margin: 0 8px 0 0;
  width: 16px;
  background-color: ${theme.colors.white};

  input:disabled + & {
    opacity: 0.4;
  }

  input:checked:enabled + & {
    border: solid 4px ${theme.colors.blue};
    background-color: ${theme.colors.white};
  }
`;

export const sliderInput: InterpolationWithTheme<Theme> = (theme) => css`
  appearance: none;
  border-radius: 7px;
  height: 4px;
  width: 210px;
  background-color: rgba(46, 91, 255, 0.15);
  outline: none;
  transition: ${theme.effects.transition};

  &::-moz-range-progress {
    background-color: ${theme.colors.blue};
  }

  &::-moz-range-thumb {
    border: solid 4px ${theme.colors.blue};
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background: ${theme.colors.white};
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    border: solid 4px ${theme.colors.blue};
    border-radius: 50%;
    height: 16px;
    width: 16px;
    background: ${theme.colors.white};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const sliderLabel = css`
  display: inline-block;
`;

export const sliderText: InterpolationWithTheme<Theme> = (theme) => css`
  display: flex;

  p {
    line-height: 1.467em;
    margin: 0;
  }

  p:nth-of-type(1) {
    flex: 1;
  }

  p:nth-of-type(2) {
    color: ${theme.colors.blueyGrey};
  }
`;

export const textInput: InterpolationWithTheme<Theme> = (theme) => css`
  display: block;
  border: solid 1px #e0e7ff;
  border-radius: 5px;
  height: 38px;
  margin: 7px 0;
  max-width: 270px;
  padding: 10px 16px;
  width: 100%;
  background-color: rgba(224, 231, 255, 0.2);
  color: ${theme.colors.black};
  font-family: inherit;
  font-size: ${theme.typography.baseFontSize};
  transition: ${theme.effects.transition};

  &:disabled {
    opacity: 0.3;
  }

  &:focus {
    border: solid 1px ${theme.colors.blue};
    outline: 0;
  }
`;

export const textLabel: InterpolationWithTheme<Theme> = (theme) => css`
  display: inline-block;
  color: #b0bac9;
  font-size: 12px;
  font-weight: ${theme.typography.fontWeightMedium};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
