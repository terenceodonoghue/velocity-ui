/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as S from './Input.styles';

const Label = props => <S.Label {...props} />;
const Text = props => <S.Text {...props} />;
const Switch = props => (
  <S.Switch>
    <S.Checkbox type="checkbox" {...props} />
    <S.Toggle />
  </S.Switch>
);
const Slider = props => <S.Slider type="range" {...props} />;

export default {
  Label,
  Text,
  Switch,
  Slider,
};
