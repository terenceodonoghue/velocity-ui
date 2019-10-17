import styled from '@emotion/styled';
import { Avatar, Button, Container } from '../../components';

export const Buttons = styled.div`
  display: flex;
  margin: 0 -8px 40px;
`;

export const EditButton = styled(Button.Contained)`
  flex: 1;
  margin: 0 8px;
  width: unset;
`;

export const Label = styled.dt`
  color: #b0bac9;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const Name = styled.h2`
  margin: 0 0 3px;
  font-size: 28px;
  font-weight: var(--font-weight-light);
  text-align: center;
`;

export const ProfilePicture = styled(Avatar.Round)`
  display: block;
  height: 140px;
  margin: 32px auto 19px;
  width: 140px;
`;

export const Rule = styled.hr`
  border: 0;
  height: 1px;
  margin-bottom: 42px;
  background-color: #e4e8f0;
`;

export const Sidebar = styled(Container.Card)`
  height: 100%;
  width: 357px;
`;

export const StatusButton = styled(Button.Outlined)`
  flex: 1;
  margin: 0 8px;
  width: unset;
`;

export const Title = styled.h3`
  margin: 0 0 33px;
  color: var(--color-bluey-grey);
  font-size: var(--base-font-size);
  font-weight: var(--font-weight-regular);
  text-align: center;
`;

export const Value = styled.dd`
  margin: 0 0 24px;
  line-height: 1.47;
`;
