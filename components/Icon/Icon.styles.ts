import { css, Interpolation } from '@emotion/core';

export default (size: number) => (): Interpolation => css`
  height: ${size}px;
  width: ${size}px;
`;
