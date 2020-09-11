/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Input, Layout } from '~/components';
import * as css from './Vehicles.styles';

export const Filter: FunctionComponent = () => (
  <Layout.Card css={css.filter} heading="Filter">
    <Input.Slider css={css.sliderInput} primary="Trips taken" secondary="753" />
    <Input.Slider
      css={css.sliderInput}
      primary="Service due"
      secondary="14 days"
    />
    <Input.Text
      css={css.textInput}
      inputProps={{
        placeholder: 'Vehicle model',
        type: 'text',
      }}
      type="text"
    >
      Vehicle model
    </Input.Text>
    <Input.Text
      css={css.textInput}
      inputProps={{
        defaultValue: 'Service needed',
        placeholder: 'Status',
        type: 'text',
      }}
    >
      Status
    </Input.Text>
    <Input.Text
      css={css.textInput}
      inputProps={{
        defaultValue: 'USA',
        placeholder: 'Location',
        type: 'text',
      }}
    >
      Location
    </Input.Text>
  </Layout.Card>
);
