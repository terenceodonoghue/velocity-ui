import React from 'react';
import { storiesOf } from '@storybook/react';
import Vehicles from './Vehicles';

storiesOf('Modules|Vehicles Dashboard', module)
  .add('Filter', () => <Vehicles.Filter />)
  .add('Vehicles', () => <Vehicles.Vehicles />);
