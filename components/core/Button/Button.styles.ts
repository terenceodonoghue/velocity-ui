import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { darken } from 'polished';

export const button: FunctionInterpolation<Theme> = ({
  transitions,
  typography,
}) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0;
  width: 200px;
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: background-color ${transitions.duration.standard}ms
    ${transitions.easing.easeInOut};

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:focus {
    outline: 0;
  }
`;

export const contained: FunctionInterpolation<Theme> = ({ palette }) => css`
  background-color: ${palette.accent};
  color: ${palette.neutral[50]};

  &:enabled:hover {
    background-color: ${darken(palette.tonalOffset, palette.accent)};
  }
`;

export const outlined: FunctionInterpolation<Theme> = ({ palette }) => css`
  background: ${palette.primary};
  color: ${palette.accent};

  &:enabled:hover {
    background-color: ${darken(palette.tonalOffset, palette.accent)};
  }
`;

export const text: FunctionInterpolation<Theme> = ({ palette }) => css`
  background: none;
  color: ${palette.accent};

  &:enabled:hover {
    background-color: ${darken(palette.tonalOffset, palette.accent)};
  }
`;
