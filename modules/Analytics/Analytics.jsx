/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  arrayOf, number, shape, string,
} from 'prop-types';
import numeral from 'numeral';
import { Container } from 'components';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';
import * as S from './Analytics.styles';

const yTickFormatter = value => (value > 999 ? numeral(Math.abs(value)).format('$0[.]0a') : Math.abs(value));

const Revenue = ({ data }) => (
  <S.Revenue>
    <Container.Card heading="Revenue" height="100%" width="100%">
      <AreaChart width={1104} height={340} data={data}>
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
          strokeDasharray="1 2"
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
          tickFormatter={yTickFormatter}
          tickLine={false}
          tickMargin={13.5}
          stroke="#e0e7ff"
          ticks={[0, 5000, 10000, 15000, 20000, 25000, 30000]}
        />
      </AreaChart>
    </Container.Card>
  </S.Revenue>
);

Revenue.propTypes = {
  data: arrayOf(
    shape({
      name: string.isRequired,
      revenue: number.isRequired,
      trips: number.isRequired,
    }),
  ).isRequired,
};

export default {
  Revenue,
};
