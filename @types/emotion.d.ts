import '@emotion/react';
import type { Theme as VelocityTheme } from '~/components/core/ThemeProvider';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends VelocityTheme {}
}
