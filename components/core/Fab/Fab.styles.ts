import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { darken } from 'polished';

const fab: FunctionInterpolation<Theme> = ({
  palette,
  transitions,
  typography,
}) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  height: 70px;
  padding: 0;
  width: 70px;
  background-color: ${palette.accent};
  color: ${palette.neutral[50]};
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

  &:enabled:hover {
    background-color: ${darken(palette.tonalOffset, palette.accent)};
  }
`;

export default fab;
