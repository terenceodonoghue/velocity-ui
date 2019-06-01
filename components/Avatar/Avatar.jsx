/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as S from './Avatar.styles';

const Round = props => <S.Round {...props} />;
const Square = props => <S.Square {...props} />;

export default {
  Round,
  Square,
};
