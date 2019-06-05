import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Navigation from './Navigation';

storiesOf('Modules|Navigation', module).add('Menu', () => (
  <Navigation.Menu avatarSrc={faker.image.avatar()} name={faker.name.findName()} />
));
