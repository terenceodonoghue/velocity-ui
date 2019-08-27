import styled from '@emotion/styled';
import { Avatar, Container } from 'components';

export const Details = styled.div`
  flex: 0 0 253px;
`;

export const DetailsList = styled.dl`
  padding: 0 6px;
`;

export const FieldSet = styled.div`
  display: flex;
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

export const Value = styled.dd`
  margin: 0 0 20px;
  max-width: 241px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
