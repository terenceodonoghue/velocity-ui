/** @jsx jsx */
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import * as S from './Input.styles';

const Radio = (props) => <S.Radio {...props} />;
const Slider = (props) => <S.SliderInput type="range" {...props} />;
const Switch = ({ className, ...rest }) => (
  <S.CheckboxLabel className={className}>
    <S.CheckboxInput type="checkbox" {...rest} />
    <S.Switch />
  </S.CheckboxLabel>
);
const Text = ({ className, label, ...rest }) => (
  <S.TextLabel className={className}>
    {label}
    <S.TextInput {...rest} />
  </S.TextLabel>
);

Switch.propTypes = { className: string.isRequired };
Text.propTypes = { className: string.isRequired, label: string };
Text.defaultProps = { label: null };

export default {
  Radio,
  Slider,
  Switch,
  Text,
};
