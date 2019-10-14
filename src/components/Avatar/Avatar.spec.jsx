import React from 'react';
import Avatar from './Avatar';

describe('Avatar', () => {
  describe('Round', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Avatar.Round src="https://goo.gl/fbAQLP" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Square', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Avatar.Square src="https://goo.gl/fbAQLP" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
