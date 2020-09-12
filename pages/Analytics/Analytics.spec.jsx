/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Metrics, Revenue, Weekday, yTickFormatter } from './index';

describe('Analytics', () => {
  describe('Metrics', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
            <Metrics
              data={[
                {
                  label: 'Vehicles on track',
                  value: '$1,428',
                },
                {
                  label: 'Distance driven',
                  value: '158.3 mi',
                },
                {
                  label: 'Energy consumed',
                  value: '87.4 kWh',
                },
                {
                  label: 'Total drive time',
                  value: '24.2 h',
                },
              ]}
            />,
          ),
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Revenue', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
            <Revenue
              data={[
                {
                  name: 'Mar 1',
                  revenue: 7850,
                  trips: 3900,
                },
                {
                  name: 'Mar 8',
                  revenue: 11100,
                  trips: 4700,
                },
                {
                  name: 'Mar 15',
                  revenue: 9100,
                  trips: 7150,
                },
                {
                  name: 'Mar 22',
                  revenue: 15200,
                  trips: 6400,
                },
                {
                  name: 'Mar 29',
                  revenue: 23000,
                  trips: 11000,
                },
                {
                  name: 'Apr 5',
                  revenue: 21400,
                  trips: 12500,
                },
                {
                  name: 'Apr 12',
                  revenue: 15950,
                  trips: 7000,
                },
                {
                  name: 'Apr 19',
                  revenue: 12750,
                  trips: 8250,
                },
                {
                  name: 'Apr 26',
                  revenue: 16100,
                  trips: 5850,
                },
                {
                  name: 'May 2',
                  revenue: 17600,
                  trips: 13000,
                },
                {
                  name: 'May 9',
                  revenue: 23700,
                  trips: 18050,
                },
                {
                  name: 'May 16',
                  revenue: 18900,
                  trips: 17200,
                },
                {
                  name: 'May 23',
                  revenue: 11300,
                  trips: 2200,
                },
              ]}
            />,
          ),
          {
            createNodeMock: () => ({
              parentElement: document.implementation.createHTMLDocument().body,
            }),
          },
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Weekday', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
            <Weekday
              data={[
                {
                  average: 109,
                  name: 'Mon',
                  comfort: 83,
                  premium: 97,
                },
                {
                  average: 86,
                  name: 'Tue',
                  comfort: 66,
                  premium: 76,
                },
                {
                  average: 102,
                  name: 'Wed',
                  comfort: 78,
                  premium: 90,
                },
                {
                  average: 108,
                  name: 'Thu',
                  comfort: 133,
                  premium: 96,
                },
                {
                  average: 75,
                  name: 'Fri',
                  comfort: 56,
                  premium: 65,
                },
                {
                  average: 56,
                  name: 'Sat',
                  comfort: 65,
                  premium: 47,
                },
                {
                  average: 125,
                  name: 'Sun',
                  comfort: 119,
                  premium: 117,
                },
              ]}
            />,
          ),
          {
            createNodeMock: () => ({
              parentElement: document.implementation.createHTMLDocument().body,
            }),
          },
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('yTickFormatter', () => {
    it("doesn't format values <= 999", () => {
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
