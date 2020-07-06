import { css, SerializedStyles } from '@emotion/core';

export default (size: number) => (): SerializedStyles => css`
  height: ${size}px;
  width: ${size}px;
`;
