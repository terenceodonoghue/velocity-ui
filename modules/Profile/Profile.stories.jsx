/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Profile from './Profile';

const stories = storiesOf('Modules|User Profile', module);
stories.addParameters({
  options: { showAddonPanel: false },
});

stories.add('Sidebar', () => (
  <Profile.Sidebar
    avatarSrc={faker.image.avatar()}
    bio={faker.lorem.paragraph()}
    email={faker.internet.email()}
    location={`${faker.address.city()}, ${faker.address.stateAbbr()}`}
    name={faker.name.findName()}
    phone={faker.phone.phoneNumberFormat(2)}
    title="Sr. Customer Manager"
  />
));
