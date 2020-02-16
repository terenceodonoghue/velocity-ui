import React, { FunctionComponent } from 'react';
import * as Chat from './Chat';
import * as fixtures from './Chat.fixtures';

export default {
  title: 'Modules/Chat',
};

export const Conversations: FunctionComponent = () => (
  <Chat.Conversations {...fixtures.conversations} />
);
export const Dialog: FunctionComponent = () => (
  <Chat.Dialog {...fixtures.dialog} />
);
