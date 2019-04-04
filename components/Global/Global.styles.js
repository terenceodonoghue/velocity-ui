/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core';

export const Global = css`
  :root {
    --base-font-size: 15px;
    --color-bluey-grey: #8798ad;
    --color-clear-blue: #2e5bff;
    --color-clear-blue-dark: #0036fa;
    --color-dark: #2e384d;
    --color-lighter-purple: #8c54ff;
    --color-macaroni-and-cheese: #f7c137;
    --color-medium-green: #33ac2e;
    --color-turquoise-blue: #00c1d4;
    --color-white: #fff;
    --font-family: "Rubik", sans-serif;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --transition: all 0.2s linear;
  }

  :any-link {
    text-decoration: none;
    transition: var(--transition);
  }

  * {
    box-sizing: border-box;
  }

  body {
    color: var(--color-dark);
    font-family: var(--font-family);
    font-size: var(--base-font-size);
  }
`;
