import React, { FunctionComponent, ReactNode } from 'react';
import { useTheme } from '@emotion/react';
import faker from 'faker';
import { NextPage } from 'next';
import numeral from 'numeral';
import { Helmet } from 'react-helmet';
import { Pie, PieChart, PieLabelRenderProps } from 'recharts';
import Avatar from '~/components/core/Avatar';
import Card from '~/components/core/Card';
import Container from '~/components/core/Container';
import Flex from '~/components/core/Flex';
import * as css from './index.styles';

interface Driver {
  src: string;
  name: string;
  vehicle: string;
  earnings: number;
  distance: number;
}

interface TopDriversProps {
  drivers: Driver[];
}

const fixtures = {
  drivers: Array.from(Array(6)).map(() => faker.image.avatar()),
};

export const renderCustomizedLabel = ({
  cx,
  cy,
  index,
}: PieLabelRenderProps): ReactNode =>
  index === 0 ? (
    <>
      <text
        fill="#2e384d"
        fontFamily="Rubik-Light, Rubik"
        fontSize="48"
        fontWeight="300"
        letterSpacing="-0.600000024"
        x={cx}
        y={cy - 5}
      >
        <tspan textAnchor="middle">86</tspan>
      </text>
      <text
        dominantBaseline="central"
        fill="#8798ad"
        fontFamily="Rubik-Regular, Rubik"
        fontSize="13"
        fontWeight="normal"
        letterSpacing="1.213333"
      >
        <tspan dy={15} textAnchor="middle" x={cx} y={cy}>
          OPERATING
        </tspan>
        <tspan dy={30} textAnchor="middle" x={cx} y={cy}>
          SCORE
        </tspan>
      </text>
    </>
  ) : null;

export const TopDrivers: FunctionComponent<TopDriversProps> = ({ drivers }) => (
  <Card css={css.topDrivers} heading="Top Drivers">
    {drivers.map(({ distance, earnings, name, src, vehicle }, i) => (
      <div css={css.topDriver} key={`${earnings}-${distance}`}>
        <div css={css.topDriverRank(i + 1)}>
          <Avatar
            alt={faker.name.findName()}
            css={css.topDriverAvatar}
            src={src}
            variant="rounded"
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
  </Card>
);

const IndexPage: NextPage = () => {
  const { palette } = useTheme();

  return (
    <>
      <Helmet>
        <title>Velocity | Dashboard</title>
      </Helmet>
      <Container>
        <Flex>
          <Flex basis="50%" wrap>
            <Card>
              <Flex alignItems="center">
                <PieChart height={156} width={224}>
                  <Pie
                    cy={100}
                    data={Array(41)
                      .fill(41)
                      .map(() => ({
                        name: 'score',
                        value: 1,
                        fill: palette.secondary,
                      }))}
                    dataKey="value"
                    innerRadius={66}
                    outerRadius={69}
                    startAngle={190}
                    paddingAngle={3}
                    endAngle={-10}
                  />
                  <Pie
                    cy={100}
                    data={Array(41)
                      .fill(41)
                      .map((_, i) => ({
                        name: 'score',
                        value: 1,
                        fill: (() => {
                          const value = i + 1;
                          if (value + (1 % 2)) {
                            if (value <= 33) {
                              return palette.accent;
                            }

                            return '#e0e7ff';
                          }

                          return palette.neutral[50];
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

                <div css={css.welcomeContent}>
                  <h2 css={css.welcomeHeading}>Welcome to Velocity</h2>
                  <p css={css.welcomeText}>
                    All cars are operating well. There were 1,233 trips since
                    your last login.
                  </p>
                </div>
              </Flex>
            </Card>
            <Card />
            <Card />
          </Flex>
          <Flex basis="50%">
            <Card />
          </Flex>
        </Flex>
        <Card />
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
        <Card />
        <Card />
      </Container>
    </>
  );
};

export default IndexPage;
