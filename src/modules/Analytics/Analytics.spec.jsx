import React from 'react';
import Analytics from './Analytics';
import { metrics } from './Analytics.fixtures';

describe('Analytics', () => {
  describe('Metrics', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Analytics.Metrics {...metrics} />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
