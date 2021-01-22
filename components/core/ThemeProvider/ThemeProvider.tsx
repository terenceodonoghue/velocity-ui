import React, { FunctionComponent } from 'react';
import { ThemeProvider as EmotionProvider, Theme } from '@emotion/react';
import merge from 'lodash/merge';
import { rgba } from 'polished';
import type { ThemeProps } from './ThemeProvider.types';

export const defaultTheme: Theme = {
  palette: {
    primary: rgba('#2e5bff', 0.2),
    secondary: '#e0e7ff',
    accent: '#2e5bff',
    neutral: {
      50: '#fff',
      100: '#f4f6fc',
      200: '#eef3f5',
      300: '#e4e8f0',
      400: '#bfc5d2',
      500: '#b0bac9',
      600: '#8798ad',
      700: '#8097b1',
      800: '#69707f',
      900: '#2E384D',
    },
    ui: {
      green: '#33ac2e',
      purple: '#8c54ff',
      red: '#d63649',
      teal: '#00c1d4',
      yellow: '#f7c137',
    },
    tonalOffset: 0.2,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontSize: 15,
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
  },
};

const ThemeProvider: FunctionComponent<ThemeProps> = ({ children, theme }) => (
  <EmotionProvider theme={theme ? merge(defaultTheme, theme) : defaultTheme}>
    {children}
  </EmotionProvider>
);

export default ThemeProvider;
