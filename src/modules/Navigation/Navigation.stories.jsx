import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';
import { menu } from './Navigation.fixtures';

storiesOf('Modules|Navigation', module).add('Menu', () => (
  <Navigation.Menu {...menu} />
));
