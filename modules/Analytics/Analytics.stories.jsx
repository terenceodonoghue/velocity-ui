/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Analytics from './Analytics';

const MIN_REVENUE = 15000;
const MAX_REVENUE = 30000;
const MIN_TRIPS = 0;
const MAX_TRIPS = 15000;

storiesOf('Modules|Analytics', module).add('Revenue', () => (
  <Analytics.Revenue
    data={[
      {
        name: 'Mar 1',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Mar 8',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Mar 15',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Mar 22',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Mar 29',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Apr 5',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Apr 12',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Apr 19',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'Apr 26',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'May 2',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'May 9',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'May 16',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
      {
        name: 'May 23',
        revenue: faker.random.number({ min: MIN_REVENUE, max: MAX_REVENUE }),
        trips: faker.random.number({ min: MIN_TRIPS, max: MAX_TRIPS }),
      },
    ]}
  />
));
