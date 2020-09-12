/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { FunctionComponent, ReactElement } from 'react';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';
import { Theme } from '~/types';

export const theme: Theme = {
  colors: {
    black: '#2e384d',
    blueyGrey: '#8798ad',
    blue: '#2e5bff',
    blueDark: '#0036fa',
    green: '#33ac2e',
    lightBlueGrey: '#bfc5d2',
    purple: '#8c54ff',
    red: '#d63649',
    teal: '#00c1d4',
    white: '#fff',
    yellow: '#f7c137',
  },
  effects: {
    transition: 'all 0.1s linear',
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

export const Styles = (): ReactElement => (
  <Global
    styles={css`
      :any-link {
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background-color: rgba(46, 91, 255, 0.08);
        color: ${theme.colors.black};
        font-family: ${theme.typography.baseFontFamily};
        font-size: ${theme.typography.baseFontSize};
      }

      main {
        margin-left: 80px;
        max-width: 1360px;
        padding: 64px 110px;
      }
    `}
  />
);

export const ThemeProvider: FunctionComponent = ({ children }) => (
  <EmotionProvider theme={theme}>{children}</EmotionProvider>
);
