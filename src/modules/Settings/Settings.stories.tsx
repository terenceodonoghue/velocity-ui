import React from 'react';
import { storiesOf } from '@storybook/react';
import { Integrations, Notifications, Personal, Theme } from './Settings';

storiesOf('Modules/Settings', module)
  .add('Personal Data', () => <Personal />)
  .add('Integrations', () => <Integrations />)
  .add('Notifications', () => <Notifications />)
  .add('Theme', () => <Theme />);
