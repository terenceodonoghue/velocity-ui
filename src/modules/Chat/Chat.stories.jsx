import React from 'react';
import { storiesOf } from '@storybook/react';
import { Conversations, Dialog } from './Chat';
import * as fixtures from './Chat.fixtures';

storiesOf('Modules|Chat', module)
  .add('Conversations', () => <Conversations {...fixtures.conversations} />)
  .add('Dialog', () => <Dialog {...fixtures.dialog} />);
