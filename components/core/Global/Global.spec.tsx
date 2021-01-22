import React from 'react';
import { render } from '@testing-library/react';
import { em } from 'polished';
import Global from './Global';
import ThemeProvider, { defaultTheme } from '../ThemeProvider';

jest.mock('normalize.css');

describe('Global', () => {
  it('provides global styles', () => {
    const { getByTestId } = render(
      <html data-testid="html" lang="en">
        <ThemeProvider>
          <Global />
        </ThemeProvider>
      </html>,
    );

    expect(getByTestId('html')).toHaveStyle({
      fontSize: em(defaultTheme.typography.fontSize),
    });
  });
});
