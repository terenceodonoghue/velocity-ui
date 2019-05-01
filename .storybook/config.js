/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
import React from 'react';
import { Global, css } from '@emotion/core';
import { addDecorator, addParameters, configure } from '@storybook/react';
import theme from './velocity-theme';

const styles = {
  position: 'relative',
  maxWidth: '1360px',
  padding: '110px',
};

addDecorator(storyFn => (
  <div style={styles}>
    <Global
      styles={css`
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
          --font-family: 'Rubik', sans-serif;
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
      `}
    />
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
