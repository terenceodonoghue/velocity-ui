import React from 'react';
import { storiesOf } from '@storybook/react';
import Map from './Map';
import { passenger } from './Map.fixtures';

storiesOf('Modules|Map', module)
  .add('Passenger Info', () => (
    <Map.Passenger {...passenger} />
  ));
