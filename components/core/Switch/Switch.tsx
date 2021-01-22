import React, { forwardRef } from 'react';
import * as css from './Switch.styles';
import type { SwitchProps } from './Switch.types';

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ primary, secondary, ...props }, ref) => (
    <label css={css.switchLabel} data-testid="switch">
      {(primary || secondary) && (
        <>
          {primary && (
            <span css={css.switchText} data-testid="switch-primary">
              {primary}
            </span>
          )}
          {secondary && (
            <span css={css.switchText} data-testid="switch-secondary">
              {secondary}
            </span>
          )}
        </>
      )}
      <input data-testid="switch-input" ref={ref} type="checkbox" {...props} />
      <span css={css.switchSlider} />
    </label>
  ),
);

export default Switch;
