import React from 'react';
import { storiesOf } from '@storybook/react';
import { Metrics, Revenue, Weekday } from './Analytics';
import * as fixtures from './Analytics.fixtures';

storiesOf('Modules|Analytics', module)
  .add('Metrics', () => <Metrics {...fixtures.metrics} />)
  .add('Revenue', () => <Revenue {...fixtures.revenue} />)
  .add('Trips by Weekday', () => <Weekday {...fixtures.weekday} />);
