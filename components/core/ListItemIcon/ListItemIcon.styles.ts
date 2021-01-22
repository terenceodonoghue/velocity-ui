import { css, FunctionInterpolation, Theme } from '@emotion/react';

const listItemIcon: FunctionInterpolation<Theme> = ({ palette }) => css`
  flex-shrink: 0;
  height: 24px;
  width: 24px;
  color: ${palette.neutral[400]};
`;

export default listItemIcon;
