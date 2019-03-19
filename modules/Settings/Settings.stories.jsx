/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Settings from './Settings';

const stories = storiesOf('Modules|Settings', module);
stories.addParameters({
  options: { showAddonPanel: false },
});

stories
  .add('Personal Data', () => <Settings.Personal />)
  .add('Notifications', () => <Settings.Notifications />);
