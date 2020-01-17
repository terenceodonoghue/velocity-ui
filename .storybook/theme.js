import { create } from '@storybook/theming/create';
import { theme } from '../src/components';

const { colors, typography } = theme;

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: colors.blue,

  // UI
  appBg: colors.white,
  appContentBg: '#f4f6fc',
  appBorderColor: 'rgba(46, 91, 255, 0.08)',
  appBorderRadius: '1px',

  // Typography
  fontBase: typography.baseFontFamily,
  fontCode: 'monospace',

  // Text colors
  textColor: colors.black,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: colors.blueyGrey,
  barSelectedColor: colors.black,
  barBg: colors.white,

  // Form colors
  inputBg: '#f4f6fc',
  inputBorder: 'silver',
  inputTextColor: colors.black,
  inputBorderRadius: '5px',

  brandTitle: 'Velocity',
  brandUrl:
    'https://www.invisionapp.com/inside-design/design-resources/design-system-dashboard-ui-kit',
  brandImage: './logo.svg',
});
