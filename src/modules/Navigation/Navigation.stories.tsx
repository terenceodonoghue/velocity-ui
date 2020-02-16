import React, { FunctionComponent } from 'react';
import * as Navigation from './Navigation';
import * as fixtures from './Navigation.fixtures';

export default {
  title: 'Modules/Navigation',
};

export const Menu: FunctionComponent = () => (
  <Navigation.Menu {...fixtures.menu} />
);
