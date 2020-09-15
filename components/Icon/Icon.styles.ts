import { css, Interpolation } from '@emotion/core';

const icon = (size: number) => (): Interpolation => css`
  height: ${size}px;
  width: ${size}px;
`;

export default icon;
