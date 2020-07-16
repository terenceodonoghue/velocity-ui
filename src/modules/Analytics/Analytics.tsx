/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
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
import { Surfaces } from '~/components';
import * as css from './Analytics.styles';

type Metric = {
  label: string;
  value: string;
};

interface MetricsProps {
  data: Metric[];
}

export const yTickFormatter = (value: number): number | string =>
  value > 999 ? numeral(Math.abs(value)).format('$0[.]0a') : Math.abs(value);

export const Metrics: FunctionComponent<MetricsProps> = ({ data }) => (
  <div css={css.metrics}>
    {data.map((metric, index) => (
      <Surfaces.Card
        css={css.metric}
        data-role={metric.label.split(' ').join('-').toLowerCase()}
        // eslint-disable-next-line react/no-array-index-key
        key={`${metric.label.split(' ').join('-').toLowerCase()}-${index}`}
      >
        <div css={css.metricIcon} />
        <div css={css.metricValue}>{metric.value}</div>
        <div css={css.metricLabel}>{metric.label}</div>
      </Surfaces.Card>
    ))}
  </div>
);

export const Revenue: FunctionComponent<AreaChartProps> = ({ data }) => (
  <Surfaces.Card css={css.chart} heading="Revenue">
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
  </Surfaces.Card>
);

export const Weekday: FunctionComponent<ComposedChartProps> = ({ data }) => (
  <Surfaces.Card css={css.chart} heading="Trips by Weekday">
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
  </Surfaces.Card>
);
