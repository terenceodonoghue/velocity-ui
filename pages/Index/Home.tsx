/** @jsx jsx */
import { jsx } from '@emotion/core';
import faker from 'faker';
import { FunctionComponent } from 'react';
import numeral from 'numeral';
import {
  ContentRenderer,
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
} from 'recharts';
import { Avatar, Layout } from '~/components';
import * as css from './Home.styles';

interface Driver {
  src: string;
  name: string;
  vehicle: string;
  earnings: number;
  distance: number;
}

export interface TopDriversProps {
  drivers: Driver[];
}

const outerTicks = [
  { name: 'score', value: 86, fill: '#2e5bff' },
  { name: 'max', value: 14, fill: '#e0e7ff' },
];

const innerTicks = [{ name: 'score', value: 100, fill: '#e0e7ff' }];

export const renderCustomizedLabel:
  | ContentRenderer<PieLabelRenderProps>
  | boolean = ({ index, percent = 0 }) =>
  index === 0 && (
    <>
      <text
        fill="#2e384d"
        fontFamily="Rubik-Light, Rubik"
        fontSize="48"
        fontWeight="300"
        letterSpacing="-0.600000024"
        x="50%"
        y="50%"
      >
        <tspan x="75" y="140">{`${(percent * 100).toFixed(0)}`}</tspan>
      </text>
      <text
        dominantBaseline="central"
        fill="#8798ad"
        fontFamily="Rubik-Regular, Rubik"
        fontSize="13"
        fontWeight="normal"
        letterSpacing="1.213333"
        x="50%"
        y="50%"
      >
        <tspan x="62" y="162">
          OPERATING
        </tspan>
        <tspan x="78" y="177">
          SCORE
        </tspan>
      </text>
    </>
  );

export const TopDrivers: FunctionComponent<TopDriversProps> = ({ drivers }) => (
  <Layout.Card css={css.topDrivers} heading="Top Drivers">
    {drivers.map(({ distance, earnings, name, src, vehicle }, i) => (
      <div css={css.topDriver}>
        <div css={css.topDriverRank(i + 1)}>
          <Avatar
            alt={faker.name.findName()}
            css={css.topDriverAvatar}
            round
            src={src}
          />
        </div>
        <div css={css.topDriverDetails}>
          <div>
            <span css={css.topDriverName}>{name}</span>
            <span>{numeral(earnings).format('$0')}</span>
          </div>
          <div css={css.topDriverVehicle}>
            <span>{vehicle}</span>
            <span>{numeral(distance).format('0,0')} miles</span>
          </div>
        </div>
      </div>
    ))}
  </Layout.Card>
);

export const Welcome: FunctionComponent = () => (
  <Layout.Card css={css.welcome}>
    <ResponsiveContainer width={203.5}>
      <PieChart>
        <Pie
          cx="50%"
          cy="64%"
          data={innerTicks}
          dataKey="value"
          innerRadius={66}
          outerRadius={69}
          startAngle={190}
          endAngle={-10}
        />
        <Pie
          cx="50%"
          cy="64%"
          data={outerTicks}
          dataKey="value"
          paddingAngle={3}
          innerRadius={75}
          outerRadius={101}
          startAngle={190}
          endAngle={-10}
          label={renderCustomizedLabel}
          labelLine={false}
        />
      </PieChart>
    </ResponsiveContainer>
    <div css={css.welcomeContent}>
      <h2 css={css.welcomeHeading}>Welcome to Velocity</h2>
      <p css={css.welcomeText}>
        All cars are operating well. There were 1,233 trips since your last
        login.
      </p>
    </div>
  </Layout.Card>
);