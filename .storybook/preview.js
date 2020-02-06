/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { addDecorator } from '@storybook/react';
import { Global, ThemeProvider } from '../src/components';

addDecorator((storyFn) => (
  <div
    css={css`
      position: relative;
      max-width: 1360px;
      padding: 110px;
    `}
  >
    <ThemeProvider>
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          margin: -12px;

          & > * {
            margin: 12px;
          }
        `}
      >
        <Global />
        {storyFn()}
      </div>
    </ThemeProvider>
  </div>
));
