import { css } from '@emotion/core';

export const variables = {
  colors: {
    black: '#000',
    blueyGrey: '#8798ad',
    clearBlue: '#2e5bff',
    clearBlueDark: '#0036fa',
    dark: '#2e384d',
    lightBlueGrey: '#bfc5d2',
    lighterPurple: '#8c54ff',
    macaroniAndCheese: '#f7c137',
    mediumGreen: '#33ac2e',
    turquoiseBlue: '#00c1d4',
    white: '#fff',
  },
  effects: {
    transition: 'all 0.2s linear',
  },
  typography: {
    baseFontSize: '15px',
    baseFontFamily: 'Rubik, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
};

export default css`
  :any-link {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    color: ${variables.colors.dark};
    font-family: ${variables.typography.baseFontFamily};
    font-size: ${variables.typography.baseFontSize};
  }
`;
