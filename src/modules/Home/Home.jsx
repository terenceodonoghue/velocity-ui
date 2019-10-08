import React from 'react';
import { number } from 'prop-types';
import {
  PieChart, Pie, ResponsiveContainer,
} from 'recharts';
import * as S from './Home.styles';

const outerTicks = [
  { name: 'score', value: 86, fill: '#2e5bff' },
  { name: 'max', value: 14, fill: '#e0e7ff' },
];

const innerTicks = [
  { name: 'score', value: 100, fill: '#e0e7ff' },
];

export const renderCustomizedLabel = ({
  index, percent,
}) => (
  index === 0 && (
    <>
      <text fill="#2e384d" fontFamily="Rubik-Light, Rubik" fontSize="48" fontWeight="300" letterSpacing="-0.600000024" x="50%" y="50%">
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
        <tspan x="62" y="162">OPERATING</tspan>
        <tspan x="78" y="177">SCORE</tspan>
      </text>
    </>
  )
);

const Welcome = () => (
  <S.Welcome>
    <ResponsiveContainer width={203.5}>
      <PieChart>
        <Pie cx="50%" cy="64%" data={innerTicks} dataKey="value" innerRadius={66} outerRadius={69} startAngle={190} endAngle={-10} />
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
    <S.Text>
      <S.Heading>Welcome to Velocity</S.Heading>
      <S.Paragraph>
        All cars are operating well. There were 1,233 trips since your last login.
      </S.Paragraph>
    </S.Text>
  </S.Welcome>
);

renderCustomizedLabel.propTypes = {
  index: number.isRequired,
  percent: number.isRequired,
};

export default {
  Welcome,
};
