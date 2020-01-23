/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Avatars from './Avatar';

describe('Avatar', () => {
  describe('Round', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Avatars.Round alt="" src="https://goo.gl/fbAQLP" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Square', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(<Avatars.Square alt="" src="https://goo.gl/fbAQLP" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
