import styled from '@emotion/styled';

export const Kanban = styled.div`
  margin: 0 -12px;
`;

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
  font-weight: var(--font-weight-medium);
  letter-spacing: 1.1px;
  text-transform: uppercase;

  &::after {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    content: "${props => props.count.toString()}";
    border-radius: 10px;
    height: 20px;
    margin-left: 6px;
    width: 32px;
    letter-spacing: normal;
    text-align: center;
  }
  
  ${Column}[data-role="service-needed"] & {
    &::after {
      background-color: rgba(46, 91, 255, 0.2);
      color: var(--color-clear-blue);
    }
  }

  ${Column}[data-role="waiting"] & {
    &::after {
      background-color: rgba(140, 84, 255, 0.2);
      color: var(--color-lighter-purple);  
    }
  }

  ${Column}[data-role="in-service"] & {
    &::after {
      background-color: rgba(0, 193, 212, 0.2);
      color: var(--color-turquoise-blue);  
    }
  }

  ${Column}[data-role="fully-serviced"] & {
    &::after {
      background-color: rgba(247, 193, 55, 0.2);
      color: var(--color-macaroni-and-cheese);  
    }
  }
`;

export const Tickets = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Ticket = styled.li`
  display: inline-block;
  border-radius: 5px;
  margin: 5px 0;
  padding-left: 2px;
  width: 100%;

  & > div {
    border-color: none;
    border-radius: 0 5px 5px 0;
    padding: 21px 24px 21px 22px;
    transition: var(--transition);
  }

  &:not(:hover) > div {
    box-shadow: none;
  }

  ${Column}[data-role="service-needed"] & {
    background: linear-gradient(
      90deg,
      var(--color-clear-blue) 2px,
      transparent 2px
    );
  }

  ${Column}[data-role="waiting"] & {
    background: linear-gradient(
      90deg,
      var(--color-lighter-purple) 2px,
      transparent 2px
    );
  }

  ${Column}[data-role="in-service"] & {
    background: linear-gradient(
      90deg,
      var(--color-turquoise-blue) 2px,
      transparent 2px
    );
  }

  ${Column}[data-role="fully-serviced"] & {
    background: linear-gradient(
      90deg,
      var(--color-macaroni-and-cheese) 2px,
      transparent 2px
    );
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.47;

  &:nth-of-type(1) {
    font-weight: var(--font-weight-medium);
  }

  &:nth-of-type(2) {
    color: var(--color-bluey-grey);
  }
`;
