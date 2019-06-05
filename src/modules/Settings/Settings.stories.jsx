import React from 'react';
import { storiesOf } from '@storybook/react';
import Settings from './Settings';

storiesOf('Modules|Settings', module)
  .add('Personal Data', () => <Settings.Personal />)
  .add('Integrations', () => <Settings.Integrations />)
  .add('Notifications', () => <Settings.Notifications />);
