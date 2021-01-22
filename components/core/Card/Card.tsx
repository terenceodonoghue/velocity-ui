import React, { forwardRef } from 'react';
import * as css from './Card.styles';
import type { CardProps } from './Card.types';

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, heading, ...props }, ref) => (
    <div css={[css.card]} data-testid="card" ref={ref} {...props}>
      {heading && (
        <h3 css={css.heading} data-testid="card-heading">
          {heading}
        </h3>
      )}
      {children}
    </div>
  ),
);

export default Card;
