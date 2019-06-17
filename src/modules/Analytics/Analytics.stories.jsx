import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Analytics from './Analytics';
import { metrics } from './Analytics.fixtures';

const MIN_REVENUE = 15000;
const MAX_REVENUE = 30000;
const MIN_TRIPS = 0;
const MAX_TRIPS = 15000;
const MIN_WEEKDAY = 0;
const MAX_WEEKDAY = 150;

storiesOf('Modules|Analytics', module)
  .add('Metrics', () => (
    <Analytics.Metrics {...metrics} />
  ))
  .add('Revenue', () => (
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
  ))

  .add('Trips by Weekday', () => (
    <Analytics.Weekday
      data={[
        {
          average: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          name: 'Mon',
          comfort: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          premium: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
        },
        {
          average: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          name: 'Tue',
          comfort: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          premium: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
        },
        {
          average: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          name: 'Wed',
          comfort: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          premium: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
        },
        {
          average: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          name: 'Thu',
          comfort: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          premium: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
        },
        {
          average: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          name: 'Fri',
          comfort: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          premium: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
        },
        {
          average: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          name: 'Sat',
          comfort: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          premium: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
        },
        {
          average: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          name: 'Sun',
          comfort: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
          premium: faker.random.number({ min: MIN_WEEKDAY, max: MAX_WEEKDAY }),
        },
      ]}
    />
  ));
