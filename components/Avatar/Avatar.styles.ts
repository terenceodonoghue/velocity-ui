import { css, InterpolationWithTheme } from '@emotion/core';
import { Sizable, Theme } from '~/types';

export const round = ({
  size,
}: Sizable): InterpolationWithTheme<Theme> => () => css`
  border-radius: 50%;
  height: ${size}px;
  width: ${size}px;
`;

export const square = ({
  size,
}: Sizable): InterpolationWithTheme<Theme> => () => css`
  border-radius: 6px;
  height: ${size}px;
  width: ${size}px;
`;
