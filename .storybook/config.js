/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { Global } from 'components';
import theme from './velocity-theme';


const styles = {
  position: 'relative',
  margin: '-8px',
  maxWidth: '1360px',
  padding: '110px',
};

addDecorator(storyFn => (
  <div style={styles}>
    <Global />
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
  const components = require.context('../components', true, /\.stories\.jsx$/);
  const modules = require.context('../modules', true, /\.stories\.jsx$/);
  components.keys().forEach(filename => components(filename));
  modules.keys().forEach(filename => modules(filename));
};

configure(loadStories, module);
