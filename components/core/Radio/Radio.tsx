import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as css from './Radio.styles';

const Radio = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ children, ...props }, ref) => (
  <label css={css.radioLabel} data-testid="radio">
    <input data-testid="radio-input" ref={ref} type="radio" {...props} />
    <span css={css.radioButton} />
    {children}
  </label>
));

export default Radio;
