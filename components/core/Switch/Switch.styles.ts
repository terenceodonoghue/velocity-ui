import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { rgba, transitions as transition } from 'polished';

export const switchLabel = css`
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

export const switchSlider: FunctionInterpolation<Theme> = ({
  palette,
  transitions,
}) => css`
  position: relative;
  border-radius: 10px;
  height: 20px;
  width: 36px;
  background-color: ${rgba(palette.neutral[600], 0.4)};
  cursor: pointer;
  ${transition(
    ['background-color', 'opacity'],
    `${transitions.duration.standard}ms ${transitions.easing.sharp}`,
  )};

  input:disabled + & {
    opacity: 0.4;
  }

  input:checked:enabled + & {
    background-color: ${palette.ui.green};
  }

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    transition: transform ${transitions.duration.standard}ms
      ${transitions.easing.sharp};

    input:checked + & {
      transform: translateX(16px);
    }
  }
`;

export const switchText: FunctionInterpolation<Theme> = ({
  palette,
  typography,
}) => css`
  display: block;
  margin: 0 58px 0 0;
  font-weight: ${typography.fontWeight.medium};

  &:nth-of-type(2) {
    color: ${palette.neutral[600]};
    font-weight: ${typography.fontWeight.regular};
  }
`;
