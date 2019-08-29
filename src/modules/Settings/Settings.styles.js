import styled from '@emotion/styled';
import { Button, Input } from 'components';

export const CheckboxField = styled.label`
  flex: 0 1 365px;
  padding: 13px 11px;
`;

export const CheckboxText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: ${(props) => `solid 1px ${props.active ? 'var(--color-clear-blue)' : '#e0e7ff'}`};
  border-radius: 5px;
  padding: 19px 21px;
  ${(props) => props.active && `&::after {
    position: absolute;
    right: -8px;
    top: -8px;
    content: '';
    background-color: var(--color-clear-blue);
    background-image: url(./check-white.svg);
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    height: 18px;
    width: 18px;
  }`}
`;

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

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 70px;
  margin: 0 12px 0 0;
  width: 70px;
  background-color: rgba(128, 151, 177, 0.1);
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

export const SwitchField = styled(Input.Switch)`
  margin: 0 87px 0 0;
  padding: 10px 11px;
`;

export const TextField = styled(Input.Text)`
  flex: 0 1 290px;
  padding: 12px 11px;

  &:first-of-type {
    flex: 0 1 100%;
  }
`;
