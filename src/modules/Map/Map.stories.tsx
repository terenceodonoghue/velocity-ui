import React, { FunctionComponent } from 'react';
import * as Map from './Map';
import * as fixtures from './Map.fixtures';

export default {
  title: 'Modules/Map',
};

export const PassengerInfo: FunctionComponent = () => (
  <Map.Passenger {...fixtures.passenger} />
);
export const TripInfo: FunctionComponent = () => (
  <Map.Trip {...fixtures.trip} />
);
