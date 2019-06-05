import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Profile from './Profile';

storiesOf('Modules|User Profile', module).add('Sidebar', () => (
  <Profile.Sidebar
    bio={faker.lorem.paragraph()}
    email={faker.internet.email()}
    heading="Sr. Customer Manager"
    location={`${faker.address.city()}, ${faker.address.stateAbbr()}`}
    name={faker.name.findName()}
    phone={faker.phone.phoneNumberFormat(2)}
    srcUrl={faker.image.avatar()}
  />
));
