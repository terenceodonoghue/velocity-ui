/* eslint-disable import/no-extraneous-dependencies */
import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: '#2e5bff',

  // UI
  appBg: '#f4f6fc',
  appContentBg: 'white',
  appBorderColor: 'rgba(46, 91, 255, 0.08)',
  appBorderRadius: '1px',

  // Typography
  fontBase: '"Rubik", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2e384d',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#8798ad',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: '#f4f6fc',
  inputBorder: 'silver',
  inputTextColor: '#2e384d',
  inputBorderRadius: '5px',

  brandTitle: 'Velocity',
  brandUrl:
    'https://www.invisionapp.com/inside-design/design-resources/design-system-dashboard-ui-kit',
  brandImage: './logo.png',
});
