import { css, FunctionInterpolation, Theme } from '@emotion/react';

const appBar: FunctionInterpolation<Theme> = ({ palette, zIndex }) => css`
  display: flex;
  position: sticky;
  top: 0;
  border-bottom: solid 1px ${palette.neutral[300]};
  min-height: 80px;
  padding: 0 25px;
  background-color: ${palette.neutral[50]};
  z-index: ${zIndex.appBar};
`;

export default appBar;
