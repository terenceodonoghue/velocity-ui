import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Container } from '../../components';

const recharts = css`
  .recharts-area-dot {
    fill: ${(props) => props.theme.colors.white};
  }

  .recharts-cartesian-axis-tick-value {
    fill: #b0bac9;
  }

  .recharts-legend-item {
    margin-left: 12px;
    color: ${(props) => props.theme.colors.blueyGrey};
    font-size: ${(props) => props.theme.typography.baseFontSize};
  }

  .recharts-legend-item-text {
    margin-left: 6px;
    vertical-align: middle;
  }

  .recharts-legend-wrapper {
    margin: 0 -10px;
    transform: translateY(-60%);
  }

  .recharts-responsive-container {
    margin: 45px -10px 0;
  }
`;

export const Metric = styled(Container.Card)`
  flex: 0 0 264px;
  margin: 12px;
  padding: 18px 24px;
`;

export const Metrics = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin: -12px;
`;

export const MetricIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 48px;
  margin-bottom: 16px;
  width: 48px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 19px;

  [data-role='vehicles-on-track'] & {
    background-color: rgba(51, 172, 46, 0.15);
    background-image: url(./check-purple.svg);
  }

  [data-role='distance-driven'] & {
    background-color: rgba(0, 193, 212, 0.15);
    background-image: url(./marker-blue.svg);
  }

  [data-role='energy-consumed'] & {
    background-color: rgba(140, 84, 255, 0.15);
    background-image: url(./energy.svg);
  }

  [data-role='total-drive-time'] & {
    background-color: rgba(247, 193, 55, 0.15);
    background-image: url(./dynamic.svg);
  }
`;

export const MetricLabel = styled.div`
  margin-top: 1px;
  color: ${(props) => props.theme.colors.blueyGrey};
  line-height: 1.47;
`;

export const MetricValue = styled.div`
  font-size: 320%;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  letter-spacing: -0.6px;
`;

export const Revenue = styled(Container.Card)`
  ${recharts};
`;

export const Weekday = styled(Container.Card)`
  ${recharts};
  width: 752px;
`;
