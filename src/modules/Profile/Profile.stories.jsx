import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sidebar } from './Profile';
import * as fixtures from './Profile.fixtures';

storiesOf('Modules/User Profile', module).add('Sidebar', () => (
  <Sidebar {...fixtures.sidebar} />
));
