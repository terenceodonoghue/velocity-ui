/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as S from './Input.styles';

const Label = (props) => <S.Label {...props} />;
const Radio = (props) => <S.Radio {...props} />;
const Slider = (props) => <S.Slider type="range" {...props} />;
const Switch = (props) => (
  <S.Switch>
    <S.Checkbox type="checkbox" {...props} />
    <S.Toggle />
  </S.Switch>
);
const Text = (props) => <S.Text {...props} />;

export default {
  Label,
  Radio,
  Slider,
  Switch,
  Text,
};
