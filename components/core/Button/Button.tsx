import React, { forwardRef } from 'react';
import * as css from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'contained', ...props }, ref) => (
    <button
      css={[css.button, css[variant]]}
      data-testid="button"
      ref={ref}
      type="button"
      {...props}
    />
  ),
);

export default Button;
