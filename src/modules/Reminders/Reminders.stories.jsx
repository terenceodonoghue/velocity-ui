import React from 'react';
import { storiesOf } from '@storybook/react';
import Reminders from './Reminders';
import { kanban } from './Reminders.fixtures';

storiesOf('Modules|Service Reminders', module).add('Kanban', () => (
  <Reminders.Kanban {...kanban} />
));
