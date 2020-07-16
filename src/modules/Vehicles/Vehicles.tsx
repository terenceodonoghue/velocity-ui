/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Inputs, Surfaces } from '~/components';
import * as css from './Vehicles.styles';

export const Filter: FunctionComponent = () => (
  <Surfaces.Card css={css.filter} heading="Filter">
    <Inputs.Slider
      css={css.sliderInput}
      primary="Trips taken"
      secondary="753"
    />
    <Inputs.Slider
      css={css.sliderInput}
      primary="Service due"
      secondary="14 days"
    />
    <Inputs.Text
      css={css.textInput}
      inputProps={{
        placeholder: 'Vehicle model',
        type: 'text',
      }}
      type="text"
    >
      Vehicle model
    </Inputs.Text>
    <Inputs.Text
      css={css.textInput}
      inputProps={{
        defaultValue: 'Service needed',
        placeholder: 'Status',
        type: 'text',
      }}
    >
      Status
    </Inputs.Text>
    <Inputs.Text
      css={css.textInput}
      inputProps={{
        defaultValue: 'USA',
        placeholder: 'Location',
        type: 'text',
      }}
    >
      Location
    </Inputs.Text>
  </Surfaces.Card>
);
