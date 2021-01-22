import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { rgba } from 'polished';

export const sliderInput: FunctionInterpolation<Theme> = ({
  palette,
  transitions,
}) => css`
  appearance: none;
  border-radius: 7px;
  height: 4px;
  width: 100%;
  background-color: ${rgba(palette.accent, 0.15)};
  outline: none;
  transition: opacity ${transitions.duration.standard}ms
    ${transitions.easing.sharp};

  &::-moz-range-progress {
    background-color: ${palette.accent};
  }

  &::-moz-range-thumb {
    border: solid 4px ${palette.accent};
    border-radius: 50%;
    height: 8px;
    width: 8px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    border: solid 4px ${palette.accent};
    border-radius: 50%;
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const sliderText: FunctionInterpolation<Theme> = ({ palette }) => css`
  display: flex;

  p {
    line-height: 1.467em;
    margin: 0;
  }

  p:nth-of-type(1) {
    flex: 1;
  }

  p:nth-of-type(2) {
    color: ${palette.neutral[600]};
  }
`;
