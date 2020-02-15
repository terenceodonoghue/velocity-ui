import React, { FunctionComponent } from 'react';
import * as Analytics from './Analytics';
import * as fixtures from './Analytics.fixtures';

export default {
  title: 'Modules/Analytics',
};

export const Metrics: FunctionComponent = () => (
  <Analytics.Metrics {...fixtures.metrics} />
);
export const Revenue: FunctionComponent = () => (
  <Analytics.Revenue {...fixtures.revenue} />
);
export const TripsByWeekday: FunctionComponent = () => (
  <Analytics.Weekday {...fixtures.weekday} />
);
