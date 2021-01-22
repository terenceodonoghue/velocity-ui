import { css, FunctionInterpolation, Theme } from '@emotion/react';
import { em } from 'polished';
import normalize from 'normalize.css';

const globalStyles: FunctionInterpolation<Theme> = ({
  palette,
  typography,
}) => [
  normalize,
  css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    :any-link {
      text-decoration: none;
    }

    html {
      font-size: ${em(typography.fontSize)};
    }

    body {
      background-color: ${palette.neutral[100]};
      color: ${palette.neutral[900]};
      font-family: ${typography.fontFamily};
      line-height: ${em(22, typography.fontSize)};
    }

    main {
      margin-left: 80px;
    }

    h1 {
      font-style: normal;
      font-weight: ${typography.fontWeight.light};
      font-size: ${em(28, typography.fontSize)};
      line-height: ${em(32, typography.fontSize)};
    }
  `,
];

export default globalStyles;
