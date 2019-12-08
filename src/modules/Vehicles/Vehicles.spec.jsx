import React from 'react';
import { Filter, Vehicles } from './Vehicles';

describe('Vehicles', () => {
  describe('Filter', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Filter />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Vehicles', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Vehicles />)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
