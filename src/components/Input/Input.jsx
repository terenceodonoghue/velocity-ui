import React from 'react';
import { number, oneOfType, string } from 'prop-types';
import * as S from './Input.styles';

export const Radio = ({ className, label, ...rest }) => (
  <S.RadioLabel className={className}>
    <S.RadioInput type="radio" {...rest} />
    <S.RadioSwitch />
    {label}
  </S.RadioLabel>
);

export const Slider = ({ className, label, value, ...rest }) => (
  <S.SliderLabel className={className}>
    {(label || value) && (
      <S.SliderText>
        {label && <p>{label}</p>}
        {value && <p>{value}</p>}
      </S.SliderText>
    )}
    <S.SliderInput type="range" {...rest} />
  </S.SliderLabel>
);

export const Switch = ({ className, description, label, ...rest }) => (
  <S.CheckboxLabel className={className}>
    {(label || description) && (
      <S.CheckboxText>
        {label && <p>{label}</p>}
        {description && <p>{description}</p>}
      </S.CheckboxText>
    )}
    <S.CheckboxInput type="checkbox" {...rest} />
    <S.CheckboxSwitch />
  </S.CheckboxLabel>
);

export const Text = ({ className, label, ...rest }) => (
  <S.TextLabel className={className}>
    {label}
    <S.TextInput {...rest} />
  </S.TextLabel>
);

Radio.propTypes = { className: string, label: string };

Radio.defaultProps = { className: null, label: null };

Slider.propTypes = {
  className: string,
  label: string,
  value: oneOfType([number, string]),
};

Slider.defaultProps = { className: null, label: null, value: null };

Switch.propTypes = { className: string, description: string, label: string };

Switch.defaultProps = { className: null, label: null, description: null };

Text.propTypes = { className: string, label: string };

Text.defaultProps = { className: null, label: null };
