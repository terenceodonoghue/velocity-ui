import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as css from './TextField.styles';

const TextField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ children, ...props }, ref) => (
  <label css={css.textFieldLabel} data-testid="textfield">
    {children}
    <input
      css={css.textFieldInput}
      data-testid="textfield-input"
      ref={ref}
      {...props}
    />
  </label>
));

export default TextField;
