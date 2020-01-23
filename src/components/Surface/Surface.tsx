/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  forwardRef,
  FunctionComponent,
  HTMLAttributes,
  HTMLProps,
} from 'react';
import * as css from './Surface.styles';

interface CardProps extends HTMLProps<HTMLDivElement> {
  heading?: string;
}

export const AppBar: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div css={css.appBar} {...props}>
    <img css={css.logo} alt="Velocity" src="./logo.svg" />
    <div css={css.appBarContent}>{children}</div>
  </div>
);

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, heading, ...props }, ref) => (
    <div css={css.card} ref={ref} {...props}>
      {heading && <h3 css={css.cardHeading}>{heading}</h3>}
      {children}
    </div>
  ),
);
