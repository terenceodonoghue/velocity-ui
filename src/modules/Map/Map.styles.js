import styled from '@emotion/styled';
import { Avatar, Container } from 'components';

export const Address = styled.div`
  flex: 1;

  &:nth-of-type(1) {
    margin: 0 71px 0 0;
  }

  p { /* stylelint-disable-line no-descending-specificity */
    margin: 0;
    line-height: 1.47;

    &:nth-of-type(1) {
      font-weight: var(--font-weight-medium);
    }

    &:nth-of-type(2) {
      color: var(--color-bluey-grey);
      font-weight: var(--font-weight-regular);
    }
  }
`;

export const Addresses = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0 32px;
`;

export const CircleIcon = styled.div`
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

export const Details = styled.div`
  flex: 0 0 253px;
`;

export const DetailsList = styled.dl`
  padding: 0 6px;
`;

export const FieldSet = styled.div`
  display: flex;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 3px -7px;
`;

export const Interactions = styled.p`
  margin: 0;
  color: var(--color-bluey-grey);
`;

export const Label = styled.dt`
  color: #b0bac9;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const Line = styled.span`
  flex: 0 1 196px;
  border: solid 1px rgba(46, 91, 255, 0.15);
`;

export const Name = styled.p`
  margin: 0 0 2px;
  font-size: 15px;
  font-weight: var(--font-weight-medium);
  line-height: 1.47;
`;

export const Passenger = styled(Container.Card)`
  width: 655px;
`;

export const Payment = styled.div`
  flex: 1;
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  margin: -5px -12px -12px;
`;

export const PaymentLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 140px;
  border-radius: 5px;
  border: solid 1px #e0e7ff;
  background-color: ${(props) => (props.active ? 'var(--color-clear-blue)' : null)};

  img {
    transform: scale(0.5);
  }
`;

export const PaymentType = styled.div`
  padding: 12px;
`;

export const Profile = styled.div`
  display: flex;
  margin: 9px 0 19px;
`;

export const ProfilePicture = styled(Avatar.Round)`
  height: 48px;
  width: 48px;
  transform: translate(6px, -2px);
`;

export const ProfileText = styled.div`
  margin-left: 15px;
`;

export const Stat = styled.div`
  flex: 1;
  padding: 30px 24px 0;

  p {  /* stylelint-disable-line no-descending-specificity */
    margin: 0;
    line-height: 1.47;

    &:nth-of-type(1) {
      font-weight: var(--font-weight-medium);
    }

    &:nth-of-type(2) {
      color: var(--color-bluey-grey);
      font-weight: var(--font-weight-regular);
    }
  }
`;

export const Stats = styled.div`
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

export const Trip = styled(Container.Card)`
  padding: 24px;
  width: 463px;
`;

export const Value = styled.dd`
  margin: 0 0 20px;
  max-width: 241px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
