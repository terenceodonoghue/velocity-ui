import React, { forwardRef } from 'react';
import * as css from './Slider.styles';
import type { SliderProps } from './Slider.types';

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ primary, secondary, ...props }, ref) => (
    <label data-testid="slider">
      {(primary || secondary) && (
        <div css={css.sliderText}>
          {primary && <p data-testid="slider-primary">{primary}</p>}
          {secondary && <p data-testid="slider-secondary">{secondary}</p>}
        </div>
      )}
      <input
        css={css.sliderInput}
        data-testid="slider-input"
        ref={ref}
        type="range"
        {...props}
      />
    </label>
  ),
);

export default Slider;
