import React, { FunctionComponent } from 'react';
import * as Reminders from './Reminders';
import * as fixtures from './Reminders.fixtures';

export default {
  title: 'Modules/Service Reminders',
};

export const Kanban: FunctionComponent = () => (
  <Reminders.Kanban {...fixtures.kanban} />
);
