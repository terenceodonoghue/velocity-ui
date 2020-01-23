import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Passenger, Trip } from './Map';
import * as fixtures from './Map.fixtures';

storiesOf('Modules/Map', module)
  .add('Passenger Info', () => <Passenger {...fixtures.passenger} />)
  .add('Trip Info', () => <Trip {...fixtures.trip} />);
