import { css, FunctionInterpolation, Theme } from '@emotion/react';

const drawer: FunctionInterpolation<Theme> = ({
  palette,
  transitions,
  zIndex,
}) => css`
  position: fixed;
  top: 80px;
  bottom: 0;
  padding: 20px 0;
  background-color: ${palette.neutral[50]};
  overflow-x: hidden;
  transition: width ${transitions.duration.standard}ms
    ${transitions.easing.easeInOut};
  z-index: ${zIndex.drawer};
`;

export default drawer;
