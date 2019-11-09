import styled from '@emotion/styled';
import { Container } from '../../components';

export const Column = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 12px;
  width: 291px;
`;

export const Heading = styled.h3`
  margin: 7px 0;
  color: #b0bac9;
  font-size: 80%;
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  letter-spacing: 1.1px;
  text-transform: uppercase;

  &::after {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    content: "${(props) => props.count.toString()}";
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
      color: ${(props) => props.theme.colors.blue};
    }
  }

  [data-role="waiting"] & {
    &::after {
      background-color: rgba(140, 84, 255, 0.2);
      color: ${(props) => props.theme.colors.purple};
    }
  }

  [data-role="in-service"] & {
    &::after {
      background-color: rgba(0, 193, 212, 0.2);
      color: ${(props) => props.theme.colors.teal};
    }
  }

  [data-role="fully-serviced"] & {
    &::after {
      background-color: rgba(247, 193, 55, 0.2);
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;

export const Kanban = styled.div`
  margin: 0 -12px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.47;

  &:nth-of-type(1) {
    font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  }

  &:nth-of-type(2) {
    color: ${(props) => props.theme.colors.blueyGrey};
  }
`;

export const Ticket = styled(Container.Card)`
  display: inline-block;
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  padding: 22px 25px;
  width: 100%;
  transition: ${(props) => props.theme.effects.transition};

  &:not(:hover) {
    box-shadow: none;
  }

  [data-role='service-needed'] & {
    background: ${(
      props,
    ) => `linear-gradient(90deg, ${props.theme.colors.blue} 2px, ${props.theme.colors.white} 2px)
      no-repeat`};
  }

  [data-role='waiting'] & {
    background: ${(props) => `linear-gradient(
        90deg,
        ${props.theme.colors.purple} 2px,
        ${props.theme.colors.white} 2px
      )
      no-repeat`};
  }

  [data-role='in-service'] & {
    background: ${(
      props,
    ) => `linear-gradient(90deg, ${props.theme.colors.teal} 2px, ${props.theme.colors.white} 2px)
      no-repeat`};
  }

  [data-role='fully-serviced'] & {
    background: ${(props) => `linear-gradient(
        90deg,
        ${props.theme.colors.yellow} 2px,
        ${props.theme.colors.white} 2px
      )
      no-repeat`};
  }
`;

export const Tickets = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
