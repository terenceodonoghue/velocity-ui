import React from 'react';
import * as S from './Vehicles.styles';

export const Filter = () => (
  <S.Filter heading="Filter">
    <S.SliderField label="Trips taken" value={753}></S.SliderField>
    <S.SliderField label="Service due" value="14 days"></S.SliderField>
    <S.TextField
      label="Vehicle model"
      placeholder="Vehicle model"
      type="text"
    />
    <S.TextField
      defaultValue="Service needed"
      label="Status"
      placeholder="Status"
      type="text"
    />
    <S.TextField
      defaultValue="USA"
      label="Location"
      placeholder="Location"
      type="text"
    />
  </S.Filter>
);

export const Vehicles = () => <S.Vehicles />;
