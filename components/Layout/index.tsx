/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, FunctionComponent, HTMLAttributes } from 'react';
import { CardProps } from '~/types';
import * as css from './Layout.styles';

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
  ({ children, heading, size = 1, ...props }, ref) => (
    <div css={css.card({ size })} ref={ref} {...props}>
      {heading && <h3 css={css.cardHeading}>{heading}</h3>}
      {children}
    </div>
  ),
);

export const CardGroup: FunctionComponent = ({ children }) => (
  <div css={css.cardGroup}>{children}</div>
);

export const Page: FunctionComponent = ({ children }) => (
  <div css={css.page}>{children}</div>
);

export const Row: FunctionComponent = ({ children }) => (
  <div css={css.row}>{children}</div>
);
