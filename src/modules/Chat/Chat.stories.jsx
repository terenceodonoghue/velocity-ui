import React from 'react';
import { storiesOf } from '@storybook/react';
import Chat from './Chat';
import { conversations, dialog } from './Chat.fixtures';

storiesOf('Modules|Chat', module)
  .add('Conversations', () => <Chat.Conversations {...conversations} />)
  .add('Dialog', () => <Chat.Dialog {...dialog} />);
