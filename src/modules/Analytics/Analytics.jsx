import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import numeral from 'numeral';
import {
  AreaChart,
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import * as S from './Analytics.styles';

export const yTickFormatter = (value) =>
  value > 999 ? numeral(Math.abs(value)).format('$0[.]0a') : Math.abs(value);

export const Metrics = ({ data }) => (
  <S.Metrics>
    {data.map((metric, index) => (
      <S.Metric
        data-role={metric.label
          .split(' ')
          .join('-')
          .toLowerCase()}
        // eslint-disable-next-line react/no-array-index-key
        key={`${metric.label
          .split(' ')
          .join('-')
          .toLowerCase()}-${index}`}
      >
        <S.MetricIcon />
        <S.MetricValue>{metric.value}</S.MetricValue>
        <S.MetricLabel>{metric.label}</S.MetricLabel>
      </S.Metric>
    ))}
  </S.Metrics>
);

export const Revenue = ({ data }) => (
  <S.Revenue heading="Revenue">
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
  </S.Revenue>
);

export const Weekday = ({ data }) => (
  <S.Weekday heading="Trips by Weekday">
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
  </S.Weekday>
);

Metrics.propTypes = {
  data: arrayOf(
    shape({
      label: string.isRequired,
      value: string.isRequired,
    }),
  ).isRequired,
};

Revenue.propTypes = {
  data: arrayOf(
    shape({
      name: string.isRequired,
      revenue: number.isRequired,
      trips: number.isRequired,
    }),
  ).isRequired,
};

Weekday.propTypes = {
  data: arrayOf(
    shape({
      average: number.isRequired,
      name: string.isRequired,
      comfort: number.isRequired,
      premium: number.isRequired,
    }),
  ).isRequired,
};
