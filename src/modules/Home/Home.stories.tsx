import React, { FunctionComponent } from 'react';
import * as Home from './Home';
import * as fixtures from './Home.fixtures';

export default {
  title: 'Modules/Home',
};

export const TopDrivers: FunctionComponent = () => (
  <Home.TopDrivers {...fixtures.topDrivers} />
);

export const Welcome: FunctionComponent = () => <Home.Welcome />;
