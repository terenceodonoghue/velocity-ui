import styled from '@emotion/styled';
import { Button, Container, Input } from 'components';

export const Description = styled.p`
  margin: 0;
  color: var(--color-bluey-grey);
  font-weight: var(--font-weight-regular);
  line-height: 1.47;
`;

export const FieldSet = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -11px;
  padding: 0 8px;
`;

export const Label = styled.p`
  margin: 0;
  font-weight: var(--font-weight-medium);
  line-height: 1.47;
`;

export const Legend = styled.p`
  flex-basis: 100%;
  margin: 0 0 25px 0;
  padding: 0 12px;
  line-height: 1.47;
`;

export const SaveButton = styled(Button.Contained)`
  margin: 13px 0 18px 8px;
`;

export const Settings = styled(Container.Card)`
  padding: 32px 24px;
`;

export const SwitchField = styled.label`
  display: flex;
  align-items: center;
  flex: 0 1 297px;
  margin-right: 85px;
  padding: 10px 11px;
`;

export const SwitchText = styled.div`
  flex: 1;
`;

export const TextField = styled(Input.Label)`
  flex: ${props => (props.flexBasis ? `0 1 ${props.flexBasis}` : '0 1 290px')};
  padding: 12px 11px;
`;
