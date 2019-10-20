import React from 'react';
import * as S from './Vehicles.styles';

const Filter = () => (
  <S.Filter heading="Filter">
    {/* <S.FilterField>
      <S.FilterText>
        <S.FilterLabel>Trips taken</S.FilterLabel>
        <S.FilterValue>753</S.FilterValue>
      </S.FilterText>
      <S.SliderInput />
    </S.FilterField> */}
    {/* <S.FilterField>
      <S.FilterText>
        <S.FilterLabel>Service due</S.FilterLabel>
        <S.FilterValue>14 days</S.FilterValue>
      </S.FilterText>
      <S.SliderInput />
    </S.FilterField> */}
    <S.FilterField
      label="Vehicle model"
      placeholder="Vehicle model"
      type="text"
    />
    <S.FilterField
      defaultValue="Service needed"
      label="Status"
      placeholder="Status"
      type="text"
    />
    <S.FilterField
      defaultValue="USA"
      label="Location"
      placeholder="Location"
      type="text"
    />
  </S.Filter>
);

const Vehicles = () => <S.Vehicles />;

export default {
  Filter,
  Vehicles,
};
