/** @jsx jsx */
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import * as S from './Input.styles';

const Radio = ({ className, label, ...rest }) => (
  <S.RadioLabel>
    <S.RadioInput type="radio" {...rest} />
    <S.RadioSwitch />
    {label}
  </S.RadioLabel>
);

const Slider = (props) => <S.SliderInput type="range" {...props} />;

const Switch = ({
  className, description, label, ...rest
}) => (
  <S.CheckboxLabel className={className}>
    {(label || description)
      && (
      <S.CheckboxText>
        {label && <p>{label}</p>}
        {description && <p>{description}</p>}
      </S.CheckboxText>
      )}
    <S.CheckboxInput type="checkbox" {...rest} />
    <S.CheckboxSwitch />
  </S.CheckboxLabel>
);

const Text = ({ className, label, ...rest }) => (
  <S.TextLabel className={className}>
    {label}
    <S.TextInput {...rest} />
  </S.TextLabel>
);

Radio.propTypes = { className: string, label: string };
Radio.defaultProps = { className: null, label: null };
Switch.propTypes = { className: string, description: string, label: string };
Switch.defaultProps = { className: null, label: null, description: null };
Text.propTypes = { className: string, label: string };
Text.defaultProps = { className: null, label: null };

export default {
  Radio,
  Slider,
  Switch,
  Text,
};
