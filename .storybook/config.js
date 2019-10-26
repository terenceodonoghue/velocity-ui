/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { Global } from '../src/components';

const {
  variables: { colors, typography },
} = Global;

const theme = create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: colors.clearBlue,

  // UI
  appBg: colors.white,
  appContentBg: '#f4f6fc',
  appBorderColor: 'rgba(46, 91, 255, 0.08)',
  appBorderRadius: '1px',

  // Typography
  fontBase: typography.baseFontFamily,
  fontCode: 'monospace',

  // Text colors
  textColor: colors.dark,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: colors.blueyGrey,
  barSelectedColor: colors.black,
  barBg: colors.white,

  // Form colors
  inputBg: '#f4f6fc',
  inputBorder: 'silver',
  inputTextColor: colors.dark,
  inputBorderRadius: '5px',

  brandTitle: 'Velocity',
  brandUrl:
    'https://www.invisionapp.com/inside-design/design-resources/design-system-dashboard-ui-kit',
  brandImage: './logo.svg',
});

addDecorator((storyFn) => (
  <div
    style={{
      position: 'relative',
      maxWidth: '1360px',
      padding: '110px',
    }}
  >
    <Global.Styles />
    {storyFn()}
  </div>
));

addParameters({
  options: {
    showPanel: false,
    theme,
  },
});

const loadStories = () => {
  const components = require.context(
    '../src/components',
    true,
    /\.stories\.jsx$/,
  );
  const modules = require.context('../src/modules', true, /\.stories\.jsx$/);
  components.keys().forEach((filename) => components(filename));
  modules.keys().forEach((filename) => modules(filename));
};

configure(loadStories, module);
