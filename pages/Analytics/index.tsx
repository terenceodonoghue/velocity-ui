/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { NextPage } from 'next';
import numeral from 'numeral';
import {
  AreaChart,
  AreaChartProps,
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ComposedChartProps,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { Global, Icon, Layout } from '~/components';
import { MetricsProps } from '~/types';
import * as css from './analytics.styles';

const iconMap = {
  'vehicles-on-track': {
    color: Global.theme.colors.purple,
    component: Icon.Check,
  },
  'distance-driven': {
    color: Global.theme.colors.blue,
    component: Icon.Marker,
  },
  'energy-consumed': {
    color: Global.theme.colors.blue,
    component: Icon.Energy,
  },
  'total-drive-time': {
    color: Global.theme.colors.blue,
    component: Icon.Dynamic,
  },
};

export const yTickFormatter = (value: number): number | string =>
  value > 999 ? numeral(Math.abs(value)).format('$0[.]0a') : Math.abs(value);

export const Metrics: FunctionComponent<MetricsProps> = ({ data }) => (
  <>
    {data.map((metric, index) => {
      const label = metric.label.split(' ').join('-').toLowerCase();
      const IconComponent = iconMap[label].component;

      return (
        <Layout.Card
          css={css.metric}
          data-role={label}
          // eslint-disable-next-line react/no-array-index-key
          key={`${label}-${index}`}
        >
          <div css={css.metricIcon}>
            <IconComponent fill={iconMap[label].color} size={19} />
          </div>
          <div css={css.metricValue}>{metric.value}</div>
          <div css={css.metricLabel}>{metric.label}</div>
        </Layout.Card>
      );
    })}
  </>
);

export const Revenue: FunctionComponent<AreaChartProps> = ({ data }) => (
  <Layout.Card css={css.chart} heading="Revenue">
    <ResponsiveContainer width="100%" height={340}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2e5bff" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#2e5bff" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTrips" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8c54ff" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#8c54ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dataKey="revenue"
          fill="url(#colorRevenue)"
          fillOpacity={1}
          name="Revenue"
          stroke="#2e5bff"
          strokeWidth={2}
          dot
        />
        <Area
          dataKey="trips"
          fill="url(#colorTrips)"
          fillOpacity={1}
          name="Trips"
          stroke="#8c54ff"
          strokeWidth={2}
          dot
        />
        <CartesianGrid
          stroke="#8097b1"
          strokeDasharray="2 2"
          strokeOpacity="0.3"
        />
        <Legend
          align="right"
          iconSize={10}
          iconType="circle"
          verticalAlign="top"
        />
        <XAxis
          dataKey="name"
          interval="preserveStartEnd"
          stroke="#e0e7ff"
          tickLine={false}
          tickMargin={8.5}
        />
        <YAxis
          stroke="#e0e7ff"
          tickFormatter={yTickFormatter}
          tickLine={false}
          tickMargin={13.5}
          ticks={[0, 5000, 10000, 15000, 20000, 25000, 30000]}
        />
      </AreaChart>
    </ResponsiveContainer>
  </Layout.Card>
);

export const Weekday: FunctionComponent<ComposedChartProps> = ({ data }) => (
  <Layout.Card css={css.chart} heading="Trips by Weekday" size={2}>
    <ResponsiveContainer width="100%" height={340}>
      <ComposedChart
        data={data}
        margin={{
          top: -3,
          right: 0,
          bottom: 2,
          left: -16,
        }}
        width={500}
      >
        <Bar
          barSize={7}
          dataKey="comfort"
          fill="#2e5bff"
          name="Comfort"
          radius={5}
        />
        <Bar
          barSize={7}
          dataKey="premium"
          fill="#8c54ff"
          name="Premium"
          radius={5}
        />
        <CartesianGrid
          stroke="#8097b1"
          strokeDasharray="2 2"
          strokeOpacity="0.3"
        />
        <Legend
          align="right"
          iconSize={10}
          iconType="circle"
          verticalAlign="top"
        />
        <Line
          dataKey="average"
          name="Average"
          stroke="#f7c137"
          strokeWidth={2}
        />
        <XAxis
          dataKey="name"
          interval="preserveStartEnd"
          padding={{ left: 17, right: 16 }}
          stroke="#e0e7ff"
          tickLine={false}
          tickMargin={7.5}
        />
        <YAxis
          tickLine={false}
          tickMargin={1}
          stroke="#e0e7ff"
          ticks={[0, 25, 50, 75, 100, 125, 150]}
        />
      </ComposedChart>
    </ResponsiveContainer>
  </Layout.Card>
);

const AnalyticsPage: NextPage = () => {
  return (
    <>
      <Helmet>
        <title>Velocity | Analytics</title>
      </Helmet>
      <Layout.Page>
        <Layout.Row>
          <Layout.CardGroup>
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
            />
          </Layout.CardGroup>
        </Layout.Row>
        <Layout.Row>
          <Layout.CardGroup>
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
            />
          </Layout.CardGroup>
        </Layout.Row>
        <Layout.Row>
          <Layout.CardGroup>
            <Layout.Card />
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
            />
          </Layout.CardGroup>
        </Layout.Row>
      </Layout.Page>
    </>
  );
};

export default AnalyticsPage;
