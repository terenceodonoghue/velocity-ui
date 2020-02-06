/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, InputHTMLAttributes } from 'react';
import * as css from './Input.styles';

interface Label {
  primary: string;
  secondary: string;
}

interface InputProps extends InputHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const Radio: FunctionComponent<InputProps> = ({
  children,
  inputProps,
  name,
  ...props
}) => (
  <label css={css.radioLabel} {...props}>
    <input css={css.radioInput} name={name} type="radio" {...inputProps} />
    <span css={css.radioSwitch} />
    {children}
  </label>
);

export const Slider: FunctionComponent<Label &
  InputHTMLAttributes<HTMLInputElement>> = ({
  primary,
  secondary,
  ...props
}) => (
  <label css={css.sliderLabel}>
    {(primary || secondary) && (
      <div css={css.sliderText}>
        {primary && <p>{primary}</p>}
        {secondary && <p>{secondary}</p>}
      </div>
    )}
    <input css={css.sliderInput} type="range" {...props} />
  </label>
);

export const Switch: FunctionComponent<InputProps & Label> = ({
  inputProps,
  primary,
  secondary,
  ...props
}) => (
  <label css={css.checkboxLabel} {...props}>
    {(primary || secondary) && (
      <div css={css.checkboxText}>
        {primary && <p>{primary}</p>}
        {secondary && <p>{secondary}</p>}
      </div>
    )}
    <input css={css.checkboxInput} type="checkbox" {...inputProps} />
    <span css={css.checkboxSwitch} />
  </label>
);

export const Text: FunctionComponent<InputProps> = ({
  children,
  inputProps,
  ...props
}) => (
  <label css={css.textLabel} {...props}>
    {children}
    <input css={css.textInput} {...inputProps} />
  </label>
);
