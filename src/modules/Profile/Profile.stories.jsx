import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from './Profile';
import { sidebar } from './Profile.fixtures';

storiesOf('Modules|User Profile', module).add('Sidebar', () => (
  <Profile.Sidebar {...sidebar} />
));
