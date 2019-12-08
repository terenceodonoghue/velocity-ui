import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from './Navigation';
import * as fixtures from './Navigation.fixtures';

storiesOf('Modules|Navigation', module).add('Menu', () => (
  <Menu {...fixtures.menu} />
));
