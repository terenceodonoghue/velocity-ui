import { css, Interpolation, InterpolationWithTheme } from '@emotion/core';
import { Selectable, Theme } from '~/types';

export const passenger = css`
  width: 655px;
`;

export const passengerAvatar = css`
  height: 48px;
  width: 48px;
  transform: translate(6px, -2px);
`;

export const passengerBio = css`
  margin-left: 15px;
`;

export const passengerContent = css`
  display: flex;
`;

export const passengerDetails = css`
  flex: 0 0 253px;
`;

export const passengerFieldLabel: InterpolationWithTheme<Theme> = (
  theme,
) => css`
  color: #b0bac9;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: ${theme.typography.fontWeightMedium};
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const passengerFieldValue = css`
  margin: 0 0 20px;
  max-width: 241px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const passengerFields = css`
  padding: 0 6px;
`;

export const passengerInteractions: InterpolationWithTheme<Theme> = (
  theme,
) => css`
  margin: 0;
  color: ${theme.colors.blueyGrey};
`;

export const passengerName: InterpolationWithTheme<Theme> = (theme) => css`
  margin: 0 0 2px;
  font-size: 15px;
  font-weight: ${theme.typography.fontWeightMedium};
  line-height: 1.47;
`;

export const passengerPayment = css`
  flex: 1;
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  margin: -5px -12px -12px;
`;

export const passengerPaymentType = css`
  padding: 12px;
`;

export const passengerProfile = css`
  display: flex;
  margin: 9px 0 19px;
`;

export const paymentLogo = ({
  selected,
}: Selectable): InterpolationWithTheme<Theme> => (theme): Interpolation => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 140px;
  border-radius: 5px;
  border: solid 1px #e0e7ff;
  background-color: ${selected ? theme.colors.blue : null};

  img {
    transform: scale(0.5);
  }
`;

export const trip = css`
  padding: 24px;
  width: 463px;
`;

export const tripAddress: InterpolationWithTheme<Theme> = (theme) => css`
  flex: 1;

  &:nth-of-type(1) {
    margin: 0 71px 0 0;
  }

  p {
    margin: 0;
    line-height: 1.47;

    &:nth-of-type(1) {
      font-weight: ${theme.typography.fontWeightMedium};
    }

    &:nth-of-type(2) {
      color: ${theme.colors.blueyGrey};
      font-weight: ${theme.typography.fontWeightRegular};
    }
  }
`;

export const tripDetails = css`
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0 32px;
`;

export const tripIcon = css`
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  margin: 0 7px;
  width: 32px;
  border-radius: 50%;

  &:nth-of-type(1) {
    background-color: rgba(46, 91, 255, 0.2);
  }

  &:nth-of-type(2) {
    background-color: rgba(51, 172, 46, 0.2);
  }
`;

export const tripIconDivider = css`
  flex: 0 1 196px;
  border: solid 1px rgba(46, 91, 255, 0.15);
`;

export const tripIcons = css`
  display: flex;
  align-items: center;
  margin: 3px -7px;
`;

export const tripMetric: InterpolationWithTheme<Theme> = (theme) => css`
  flex: 1;
  padding: 30px 24px 0;

  p {
    margin: 0;
    line-height: 1.47;

    &:nth-of-type(1) {
      font-weight: ${theme.typography.fontWeightMedium};
    }

    &:nth-of-type(2) {
      color: ${theme.colors.blueyGrey};
      font-weight: ${theme.typography.fontWeightRegular};
    }
  }
`;

export const tripMetrics = css`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -24px;

  &::before {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #e4e8f0;
  }
`;
