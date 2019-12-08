import React from 'react';
import { Conversations } from './Chat';
import * as fixtures from './Chat.fixtures';

describe('Chat', () => {
  describe('Conversations', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Conversations {...fixtures.conversations} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
