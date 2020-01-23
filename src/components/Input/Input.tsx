/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, InputHTMLAttributes } from 'react';
import * as css from './Input.styles';

interface Label {
  primary: string;
  secondary: string;
}

export const Radio: FunctionComponent<InputHTMLAttributes<
  HTMLInputElement
>> = ({ children, ...props }) => (
  <label css={css.radioLabel}>
    <input css={css.radioInput} type="radio" {...props} />
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

export const Switch: FunctionComponent<Label &
  InputHTMLAttributes<HTMLInputElement>> = ({
  primary,
  secondary,
  ...props
}) => (
  <label css={css.checkboxLabel}>
    {(primary || secondary) && (
      <div css={css.checkboxText}>
        {primary && <p>{primary}</p>}
        {secondary && <p>{secondary}</p>}
      </div>
    )}
    <input css={css.checkboxInput} type="checkbox" {...props} />
    <span css={css.checkboxSwitch} />
  </label>
);

export const Text: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => (
  <label css={css.textLabel}>
    {children}
    <input css={css.textInput} {...props} />
  </label>
);
