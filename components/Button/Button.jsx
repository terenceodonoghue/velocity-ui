/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as S from './Button.styles';

const Contained = props => <S.Contained {...props} />;
const Outlined = props => <S.Outlined {...props} />;
const Text = props => <S.Text {...props} />;
const Fab = props => <S.Fab {...props} />;

export default {
  Contained,
  Outlined,
  Text,
  Fab,
};
