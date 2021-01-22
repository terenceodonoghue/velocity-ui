import { css, FunctionInterpolation, Theme } from '@emotion/react';

const listItem: FunctionInterpolation<Theme> = ({ transitions }) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 56px;
  padding: 0 0 0 25px;
  transition: background-color ${transitions.duration.standard}ms
    ${transitions.easing.sharp};
  cursor: pointer;
`;

export default listItem;
