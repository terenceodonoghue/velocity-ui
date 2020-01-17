import React from 'react';
import { css } from '@emotion/core';
import { addDecorator } from '@storybook/react';
import { Global, ThemeProvider } from '../src/components';

addDecorator((storyFn) => (
  <div
    css={css`
      position: 'relative';
      max-width: '1360px';
      padding: '110px';
    `}
  >
    <ThemeProvider>
      <Global />
      {storyFn()}
    </ThemeProvider>
  </div>
));
