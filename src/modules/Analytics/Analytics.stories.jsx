import React from 'react';
import { storiesOf } from '@storybook/react';
import Analytics from './Analytics';
import { metrics, revenue, weekday } from './Analytics.fixtures';

storiesOf('Modules|Analytics', module)
  .add('Metrics', () => (
    <Analytics.Metrics {...metrics} />
  ))
  .add('Revenue', () => (
    <Analytics.Revenue {...revenue} />
  ))

  .add('Trips by Weekday', () => (
    <Analytics.Weekday {...weekday} />
  ));
