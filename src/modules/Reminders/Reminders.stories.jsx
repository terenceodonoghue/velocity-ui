import React from 'react';
import { storiesOf } from '@storybook/react';
import { Kanban } from './Reminders';
import * as fixtures from './Reminders.fixtures';

storiesOf('Modules|Service Reminders', module).add('Kanban', () => (
  <Kanban {...fixtures.kanban} />
));
