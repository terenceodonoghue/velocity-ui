import { css, FunctionInterpolation, Theme } from '@emotion/react';

export const radioButton: FunctionInterpolation<Theme> = ({ palette }) => css`
  display: inline-block;
  border: solid 1px rgba(128, 151, 177, 0.5);
  border-radius: 50%;
  height: 16px;
  margin: 0 8px 0 0;
  width: 16px;

  input:disabled + & {
    opacity: 0.4;
  }

  input:checked:enabled + & {
    border: solid 4px ${palette.accent};
  }
`;

export const radioLabel: FunctionInterpolation<Theme> = ({ typography }) => css`
  display: flex;
  align-items: center;
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;

  input {
    height: 0;
    margin: 0;
    width: 0;
    opacity: 0;
  }
`;
