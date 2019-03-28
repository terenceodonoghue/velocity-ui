/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const Revenue = styled.div`
  .recharts-area-dot {
    fill: var(--color-white);
  }

  .recharts-cartesian-axis-tick-value {
    fill: #b0bac9;
  }

  .recharts-legend-item {
    margin-left: 12px;
    color: var(--color-bluey-grey);
    font-size: var(--base-font-size);
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


export const Metrics = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin: -12px;
`;

export const Metric = styled.div`
  flex: 1 0 25%;
  padding: 12px;

  & > * {
    height: 100%;
    padding: 18px 24px !important;
  }
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

  ${Metric}[data-role="vehicles-on-track"] & {
    background-color: rgba(51, 172, 46, 0.15);
    background-image: url(./check.svg);
  }

  ${Metric}[data-role="distance-driven"] & {
    background-color: rgba(0, 193, 212, 0.15);
    background-image: url(./marker.svg);
  }

  ${Metric}[data-role="energy-consumed"] & {
    background-color: rgba(140, 84, 255, 0.15);
    background-image: url(./energy.svg);
  }

  ${Metric}[data-role="total-drive-time"] & {
    background-color: rgba(247, 193, 55, 0.15);
    background-image: url(./dynamic.svg);
  }
`;

export const MetricValue = styled.div`
  font-size: 320%;
  font-weight: var(--font-weight-light);
  letter-spacing: -0.6px;
`;

export const MetricLabel = styled.div`
  margin-top: 1px;
  color: var(--color-bluey-grey);
  line-height: 1.47;
`;
