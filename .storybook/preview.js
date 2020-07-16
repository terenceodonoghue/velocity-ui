/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { addDecorator } from '@storybook/react';
import { Global, ThemeProvider } from '~/components';

addDecorator((storyFn) => (
  <div
    css={css`
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      position: relative;
      margin: -12px;
      max-width: 1356px;
      padding: 110px;
    `}
  >
    <ThemeProvider>
      <div
        css={css`
          flex: 1;
        `}
      >
        <Global />
        {storyFn()}
      </div>
    </ThemeProvider>
  </div>
));
