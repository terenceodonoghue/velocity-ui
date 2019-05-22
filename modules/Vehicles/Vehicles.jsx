/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as S from './Vehicles.styles';

const Filter = () => (
  <S.Filter heading="Filter">
    <S.FilterField>
      <S.FilterText>
        <S.FilterLabel>Trips taken</S.FilterLabel>
        <S.FilterValue>753</S.FilterValue>
      </S.FilterText>
      <S.SliderInput />
    </S.FilterField>
    <S.FilterField>
      <S.FilterText>
        <S.FilterLabel>Service due</S.FilterLabel>
        <S.FilterValue>14 days</S.FilterValue>
      </S.FilterText>
      <S.SliderInput />
    </S.FilterField>
    <S.FilterField>
      Vehicle model
      <S.TextInput placeholder="Vehicle model" />
    </S.FilterField>
    <S.FilterField>
      Status
      <S.TextInput placeholder="Status" value="Service needed" />
    </S.FilterField>
    <S.FilterField>
      Location
      <S.TextInput placeholder="Location" value="USA" />
    </S.FilterField>
  </S.Filter>
);

const Vehicles = () => (
  <S.Vehicles />
);

export default {
  Filter,
  Vehicles,
};
