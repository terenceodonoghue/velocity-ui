/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Filter } from './index';

describe('Vehicles', () => {
  describe('Filter', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Filter />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
