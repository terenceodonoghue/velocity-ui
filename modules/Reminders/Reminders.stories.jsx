import React from 'react';
import { storiesOf } from '@storybook/react';
import Reminders from './Reminders';

storiesOf('Modules|Reminders', module).add('Kanban', () => (
  <Reminders.Kanban
    data={[
      [
        {
          date: 'June 12',
          name: 'Spire',
          price: '$233',
          type: 'Tire replacement',
        },
        {
          date: 'May 2',
          name: 'Eos',
          price: '$120',
          type: 'Engine check-up',
        },
        {
          date: 'June 6',
          name: 'Eagle',
          price: '$180',
          type: 'Tire replacement',
        },
        {
          date: 'June 12',
          name: 'Bebop',
          price: '$1400',
          type: 'Monthly service',
        },
      ],
      [
        {
          date: 'June 3',
          name: 'Expedition',
          price: '$766',
          type: 'Tire replacement',
        },
        {
          date: 'June 12',
          name: 'Bliss',
          price: '$199',
          type: 'Engine check-up',
        },
        {
          date: 'June 5',
          name: 'Vigor',
          price: '$690',
          type: 'Monthly service',
        },
      ],
      [
        {
          date: 'June 4',
          name: 'Scorpion',
          price: '$430',
          type: 'Monthly service',
        },
        {
          date: 'June 22',
          name: 'Resolve',
          price: '$560',
          type: 'Tire replacement',
        },
      ],
      [
        {
          date: 'June 24',
          name: 'Empire',
          price: '$430',
          type: 'Monthly service',
        },
        {
          date: 'June 27',
          name: 'Eos',
          price: '$560',
          type: 'Tire replacement',
        },
        {
          date: 'June 28',
          name: 'Spire',
          price: '$430',
          type: 'Monthly service',
        },
        {
          date: 'June 29',
          name: 'Nebula',
          price: '$560',
          type: 'Tire replacement',
        },
      ],
    ]}
  />
));
