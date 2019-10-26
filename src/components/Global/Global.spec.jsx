import React from 'react';
import Global from './Global';

describe('Global', () => {
  describe('Styles', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Global.Styles />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
