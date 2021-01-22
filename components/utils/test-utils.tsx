import React, { FunctionComponent, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import ThemeProvider from '~/components/core/ThemeProvider';

const Providers: FunctionComponent = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
