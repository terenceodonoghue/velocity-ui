/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { css } from '@emotion/core';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { Global, ThemeProvider } from '../src/components';
import theme from './theme';

const story = css`
  position: 'relative';
  max-width: '1360px';
  padding: '110px';
`;

addDecorator((storyFn) => (
  <div css={story}>
    <ThemeProvider>
      <Global />
      {storyFn()}
    </ThemeProvider>
  </div>
));

addParameters({
  options: {
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
