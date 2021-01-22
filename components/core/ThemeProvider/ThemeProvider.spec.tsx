import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { defaultTheme } from './ThemeProvider';

const Consumer = () => (
  <div
    css={(theme) => ({
      backgroundColor: theme.palette.accent,
      color: theme.palette.neutral[50],
    })}
    data-testid="consumer"
  />
);

describe('ThemeProvider', () => {
  it('provides a default theme', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    expect(getByTestId('consumer')).toHaveStyle({
      backgroundColor: defaultTheme.palette.accent,
      color: defaultTheme.palette.neutral[50],
    });
  });

  it('provides a modified theme', () => {
    const { getByTestId } = render(
      <ThemeProvider
        theme={{
          palette: {
            accent: defaultTheme.palette.ui.green,
            neutral: { 50: defaultTheme.palette.ui.purple },
          },
        }}
      >
        <Consumer />
      </ThemeProvider>,
    );

    expect(getByTestId('consumer')).toHaveStyle({
      backgroundColor: defaultTheme.palette.ui.green,
      color: defaultTheme.palette.ui.purple,
    });
  });
});
