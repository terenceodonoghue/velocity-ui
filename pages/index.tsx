/** @jsx jsx */
import { jsx } from '@emotion/core';
import faker from 'faker';
import { NextPage } from 'next';
import numeral from 'numeral';
import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import {
  ContentRenderer,
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
} from 'recharts';
import { Avatar, Global, Layout } from '~/components';
import { TopDriversProps } from '~/types';
import * as css from './home.styles';

const fixtures = {
  drivers: Array.from(Array(6)).map(() => faker.image.avatar()),
};

export const renderCustomizedLabel:
  | ContentRenderer<PieLabelRenderProps>
  | boolean = ({ index }) =>
  index === 0 ? (
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
        <tspan x="75" y="140">
          86
        </tspan>
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
  ) : null;

export const TopDrivers: FunctionComponent<TopDriversProps> = ({ drivers }) => (
  <Layout.Card css={css.topDrivers} heading="Top Drivers">
    {drivers.map(({ distance, earnings, name, src, vehicle }, i) => (
      <div css={css.topDriver} key={`${earnings}-${distance}`}>
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
  <Layout.Card css={css.welcome} fullWidth>
    <ResponsiveContainer width={203.5}>
      <PieChart>
        <Pie
          cx="50%"
          cy="64%"
          data={Array(41)
            .fill(41)
            .map(() => ({
              name: 'score',
              value: 1,
              fill: '#e0e7ff',
            }))}
          dataKey="value"
          innerRadius={66}
          outerRadius={69}
          startAngle={190}
          paddingAngle={3}
          endAngle={-10}
        />
        <Pie
          cx="50%"
          cy="64%"
          data={Array(41)
            .fill(41)
            .map((_, i) => ({
              name: 'score',
              value: 1,
              fill: (() => {
                const value = i + 1;
                if (value + (1 % 2)) {
                  if (value <= 33) {
                    return Global.theme.colors.blue;
                  }

                  return '#e0e7ff';
                }

                return Global.theme.colors.white;
              })(),
            }))}
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

const HomePage: NextPage = () => (
  <>
    <Helmet>
      <title>Velocity | Dashboard</title>
    </Helmet>
    <Layout.Page>
      <Layout.Row>
        <Layout.CardGroup>
          <Welcome />
          <Layout.Card />
          <Layout.Card />
        </Layout.CardGroup>
        <Layout.CardGroup>
          <Layout.Card />
        </Layout.CardGroup>
      </Layout.Row>
      <Layout.Row>
        <Layout.Card />
      </Layout.Row>
      <Layout.Row>
        <TopDrivers
          drivers={[
            {
              src: fixtures.drivers[0],
              name: 'Bebop',
              vehicle: 'Volvo Intellisafe',
              earnings: 6432,
              distance: 1232,
            },
            {
              src: fixtures.drivers[1],
              name: 'Gran Tesoro',
              vehicle: 'Chevrolet Bolt',
              earnings: 5342,
              distance: 945,
            },
            {
              src: fixtures.drivers[2],
              name: 'Belafonte',
              vehicle: 'Infiniti Q50S',
              earnings: 5133,
              distance: 834,
            },
            {
              src: fixtures.drivers[3],
              name: 'Chester',
              vehicle: 'Audi RS 7',
              earnings: 4755,
              distance: 812,
            },
            {
              src: fixtures.drivers[4],
              name: 'Expedia',
              vehicle: 'Tesla Model X',
              earnings: 4140,
              distance: 724,
            },
            {
              src: fixtures.drivers[5],
              name: 'Aeolus',
              vehicle: 'Tesla Model S',
              earnings: 3323,
              distance: 466,
            },
          ]}
        />
        <Layout.Card />
        <Layout.Card />
      </Layout.Row>
    </Layout.Page>
  </>
);

export default HomePage;
