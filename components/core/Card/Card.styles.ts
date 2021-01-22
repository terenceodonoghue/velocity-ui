import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { em, rgba } from 'polished';

export const card: FunctionInterpolation<Theme> = ({ palette }) => css`
  display: block;
  border-radius: 1px;
  border: solid 1px ${rgba(palette.accent, 0.08)};
  box-shadow: 0 10px 20px 0 ${rgba(palette.accent, 0.07)};
  margin: 12px;
  padding: 32px 24px;
  background-color: ${palette.neutral[50]};
`;

export const heading: FunctionInterpolation<Theme> = ({
  palette,
  typography,
}) => `
  margin: 0 0 26px 0;
  color: ${palette.neutral[600]};
  font-size: ${em(13, typography.fontSize)};
  font-weight: ${typography.fontWeight.regular};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
