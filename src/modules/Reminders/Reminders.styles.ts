import { css, InterpolationWithTheme } from '@emotion/core';
import { Measurable, Theme } from '~/components';

export const kanban = css`
  margin: 0 -12px;
`;

export const kanbanColumn = css`
  display: inline-block;
  vertical-align: top;
  padding: 0 12px;
  width: 290px;
`;

export const kanbanColumnHeading = ({
  length,
}: Measurable): InterpolationWithTheme<Theme> => (theme) => css`
  margin: 7px 0;
  color: #b0bac9;
  font-size: 80%;
  font-weight: ${theme.typography.fontWeightMedium};
  letter-spacing: 1.1px;
  text-transform: uppercase;

  &::after {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    content: "${length.toString()}";
    border-radius: 10px;
    height: 20px;
    margin-left: 6px;
    width: 32px;
    letter-spacing: normal;
    text-align: center;
  }

  [data-role="service-needed"] & {
    &::after {
      background-color: rgba(46, 91, 255, 0.2);
      color: ${theme.colors.blue};
    }
  }

  [data-role="waiting"] & {
    &::after {
      background-color: rgba(140, 84, 255, 0.2);
      color: ${theme.colors.purple};
    }
  }

  [data-role="in-service"] & {
    &::after {
      background-color: rgba(0, 193, 212, 0.2);
      color: ${theme.colors.teal};
    }
  }

  [data-role="fully-serviced"] & {
    &::after {
      background-color: rgba(247, 193, 55, 0.2);
      color: ${theme.colors.yellow};
    }
  }
`;

export const kanbanTicket: InterpolationWithTheme<Theme> = (theme) => css`
  display: inline-block;
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  padding: 22px 25px;
  width: 100%;
  transition: ${theme.effects.transition};

  &:not(:hover) {
    box-shadow: none;
  }

  [data-role='service-needed'] & {
    background: linear-gradient(
        90deg,
        ${theme.colors.blue} 2px,
        ${theme.colors.white} 2px
      )
      no-repeat;
  }

  [data-role='waiting'] & {
    background: linear-gradient(
        90deg,
        ${theme.colors.purple} 2px,
        ${theme.colors.white} 2px
      )
      no-repeat;
  }

  [data-role='in-service'] & {
    background: linear-gradient(
        90deg,
        ${theme.colors.teal} 2px,
        ${theme.colors.white} 2px
      )
      no-repeat;
  }

  [data-role='fully-serviced'] & {
    background: linear-gradient(
        90deg,
        ${theme.colors.yellow} 2px,
        ${theme.colors.white} 2px
      )
      no-repeat;
  }
`;

export const kanbanTicketText: InterpolationWithTheme<Theme> = (theme) => css`
  display: flex;
  justify-content: space-between;
  line-height: 1.47;

  &:nth-of-type(1) {
    font-weight: ${theme.typography.fontWeightMedium};
  }

  &:nth-of-type(2) {
    color: ${theme.colors.blueyGrey};
  }
`;

export const kanbanTickets = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;
