import React from 'react';
import Container from './Container';

describe('Container', () => {
  describe('Card', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
            <Container.Card heading="Card Heading">
              Card Content
            </Container.Card>,
          ),
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
