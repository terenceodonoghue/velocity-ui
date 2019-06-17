import React from 'react';
import Vehicles from './Vehicles';

describe('Vehicles', () => {
  describe('Filter', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Vehicles.Filter />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Vehicles', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Vehicles.Vehicles />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
