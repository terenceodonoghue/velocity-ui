import { css } from '@emotion/core';

export default (theme) => css`
  :any-link {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.black};
    font-family: ${theme.typography.baseFontFamily};
    font-size: ${theme.typography.baseFontSize};
  }
`;
