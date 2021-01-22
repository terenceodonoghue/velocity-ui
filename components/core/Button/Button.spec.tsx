import React from 'react';
import { render } from 'test-utils';
import Button from './Button';
import { defaultTheme } from '../ThemeProvider';

describe('Button', () => {
  it('is contained by default', () => {
    const { container, getByTestId } = render(<Button />);

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: defaultTheme.palette.accent,
      color: defaultTheme.palette.neutral[50],
    });
    expect(container).toMatchSnapshot();
  });

  it('renders contained variant', () => {
    const { container, getByTestId } = render(<Button variant="contained" />);

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: defaultTheme.palette.accent,
      color: defaultTheme.palette.neutral[50],
    });
    expect(container).toMatchSnapshot();
  });

  it('renders outlined variant', () => {
    const { container, getByTestId } = render(<Button variant="outlined" />);

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: defaultTheme.palette.primary,
      color: defaultTheme.palette.accent,
    });
    expect(container).toMatchSnapshot();
  });

  it('renders text variant', () => {
    const { container, getByTestId } = render(<Button variant="text" />);

    expect(getByTestId('button')).toHaveStyle({
      background: 'none',
      color: defaultTheme.palette.accent,
    });
    expect(container).toMatchSnapshot();
  });
});
