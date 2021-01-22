import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { darken, em, rgba, transitions as transition } from 'polished';

export const textFieldInput: FunctionInterpolation<Theme> = ({
  palette,
  transitions,
  typography,
}) => css`
  display: block;
  border: solid 1px ${palette.secondary};
  border-radius: 5px;
  height: 38px;
  margin: 7px 0;
  max-width: 270px;
  padding: 10px 16px;
  width: 100%;
  background-color: ${rgba(palette.secondary, 0.2)};
  color: ${palette.neutral[900]};
  font-family: inherit;
  font-size: ${em(15, typography.fontSize)};
  ${transition(
    ['border', 'opacity'],
    `${transitions.duration.standard}ms ${transitions.easing.sharp}`,
  )};

  &:disabled {
    opacity: 0.3;
  }

  &:focus {
    border: solid 1px ${palette.accent};
    outline: 0;
  }
`;

export const textFieldLabel: FunctionInterpolation<Theme> = ({
  palette,
  typography,
}) => css`
  display: inline-block;
  color: ${darken(palette.tonalOffset, palette.neutral[600])};
  font-size: 12px;
  font-weight: ${typography.fontWeight.medium};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
