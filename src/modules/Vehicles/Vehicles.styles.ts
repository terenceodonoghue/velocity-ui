import { css, InterpolationWithTheme } from '@emotion/core';
import { Theme } from '../../components';

export const filter = css`
  padding: 32px 24px 3px;
  width: 268px;
`;

export const sliderInput = css`
  margin: 0 6px 34px;
`;

export const textInput: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0 0 19px;
  color: ${theme.colors.black};
  font-size: 15px;
  font-weight: ${theme.typography.fontWeightRegular};
  letter-spacing: normal;
  line-height: 1.47;
  text-transform: none;

  input {
    color: ${theme.colors.blue};
  }
`;
