import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { em, rgba } from 'polished';

const iconButton: FunctionInterpolation<Theme> = ({
  palette,
  transitions,
  typography,
}) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  padding: 4px;
  background: none;
  font-size: ${em(15, typography.fontSize)};
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
    background-color: ${rgba(palette.accent, 0.1)};
  }
`;

export default iconButton;
