import styled from '@emotion/styled';
import { Avatar, Container } from 'components';

export const Details = styled.div`
  flex: 1;
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
  padding: 32px 24px;
  width: 655px;
`;

export const Profile = styled.div`
  display: flex;
  margin: 9px 0;
`;

export const ProfilePicture = styled(Avatar.Round)`
  height: 48px;
  width: 48px;
  transform: translate(6px, -2px);
`;

export const ProfileText = styled.div`
  margin-left: 15px;
`;

export const Payment = styled.div`
  flex: 1;
`;

export const Value = styled.dd`
  margin: 0 0 18px;
`;
