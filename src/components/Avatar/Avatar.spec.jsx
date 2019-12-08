import React from 'react';
import * as Avatars from './Avatar';

describe('Avatar', () => {
  describe('Round', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Avatars.Round src="https://goo.gl/fbAQLP" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Square', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Avatars.Square src="https://goo.gl/fbAQLP" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
