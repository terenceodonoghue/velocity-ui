import React from 'react';
import { storiesOf } from '@storybook/react';
import Home from './Home';

storiesOf('Modules|Home', module).add('Welcome', () => (
  <Home.Welcome />
));
