import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Map from './Map';

storiesOf('Modules|Map', module)
  .add('Passenger Info', () => (
    <Map.Passenger
      avatarUrl={faker.image.avatar()}
      email={faker.internet.email()}
      interactions={faker.random.number({
        min: 0,
        max: 10,
      })}
      location={`${faker.address.city()}, ${faker.address.stateAbbr()}`}
      name={faker.name.findName()}
      phone={faker.phone.phoneNumberFormat(2)}
    />
  ));
