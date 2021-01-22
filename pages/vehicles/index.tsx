import { NextPage } from 'next';
import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Input, Layout } from '~/components';
import * as css from './styles';

export const Filter: FunctionComponent = () => (
  <Layout.Card css={css.filter} heading="Filter">
    <div css={css.sliderInput}>
      <Input.Slider primary="Trips taken" secondary="753" />
    </div>
    <div css={css.sliderInput}>
      <Input.Slider primary="Service due" secondary="14 days" />
    </div>
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

const VehiclesPage: NextPage = () => (
  <>
    <Helmet>
      <title>Velocity | Vehicles Dashboard</title>
    </Helmet>
    <Layout.PageHeader heading="Vehicles Dashboard" />
    <Layout.Page>
      <Layout.Row>
        <div css={css.vehicles} />
        <Filter />
      </Layout.Row>
    </Layout.Page>
  </>
);

export default VehiclesPage;
