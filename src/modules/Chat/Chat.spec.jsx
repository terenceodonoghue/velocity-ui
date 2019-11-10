import React from 'react';
import Chat from './Chat';
import { conversations } from './Chat.fixtures';

describe('Chat', () => {
  describe('Conversations', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Chat.Conversations {...conversations} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
