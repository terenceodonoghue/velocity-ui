import React from 'react';
import { storiesOf } from '@storybook/react';
import Chat from './Chat';
import { conversations } from './Chat.fixtures';

storiesOf('Modules|Chat', module).add('Conversations', () => (
  <Chat.Conversations {...conversations} />
));
