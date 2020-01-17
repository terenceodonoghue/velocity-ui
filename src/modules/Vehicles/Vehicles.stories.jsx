import React from 'react';
import { storiesOf } from '@storybook/react';
import { Filter, Vehicles } from './Vehicles';

storiesOf('Modules/Vehicles Dashboard', module)
  .add('Filter', () => <Filter />)
  .add('Vehicles', () => <Vehicles />);
