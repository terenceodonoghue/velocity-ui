import React from 'react';
import Analytics from './Analytics';
import { metrics, revenue, weekday } from './Analytics.fixtures';

describe('Analytics', () => {
  describe('Metrics', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Analytics.Metrics {...metrics} />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Revenue', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Analytics.Revenue {...revenue} />,
        {
          createNodeMock: () => (
            { parentElement: document.implementation.createHTMLDocument().body }
          ),
        },
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Weekday', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Analytics.Weekday {...weekday} />,
        {
          createNodeMock: () => (
            { parentElement: document.implementation.createHTMLDocument().body }
          ),
        },
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('yTickFormatter', () => {
    const { yTickFormatter } = Analytics;

    it('doesn\'t format values <= 999', () => {
      const value = yTickFormatter(999);
      expect(value).toBe(999);
    });

    it('formats values > 999', () => {
      let value = yTickFormatter(1000);
      expect(value).toBe('$1k');

      value = yTickFormatter(1100);
      expect(value).toBe('$1.1k');
    });
  });
});
