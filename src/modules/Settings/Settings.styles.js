import styled from '@emotion/styled';
import { Buttons, Inputs } from '../../components';

export const CheckboxField = styled.label`
  flex: 0 1 365px;
  padding: 13px 11px;
`;

export const CheckboxText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: ${(props) =>
    `solid 1px ${props.active ? props.theme.colors.blue : '#e0e7ff'}`};
  border-radius: 5px;
  padding: 19px 21px;
  ${(props) =>
    props.active &&
    `&::after {
    position: absolute;
    right: -8px;
    top: -8px;
    content: '';
    background-color: ${props.theme.colors.blue};
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
  color: ${(props) => props.theme.colors.blueyGrey};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
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
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  line-height: 1.47;
`;

export const Legend = styled.p`
  flex-basis: 100%;
  margin: 0 0 25px 0;
  padding: 0 12px;
  line-height: 1.47;
`;

export const Palette = styled.div`
  border-radius: 4px;
  height: 65px;
  width: 120px;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.colors[0]} 33.33%, ${props.colors[1]} 33.33%, ${props.colors[1]} 66.66%, ${props.colors[2]} 66.66%) no-repeat;`};
`;

export const RadioField = styled(Inputs.Radio)`
  padding: 12px 0;
`;

export const SaveButton = styled(Buttons.Contained)`
  margin: 13px 0 18px 8px;
`;

export const SwitchField = styled(Inputs.Switch)`
  margin: 0 87px 0 0;
  padding: 10px 11px;
`;

export const TextField = styled(Inputs.Text)`
  flex: 0 1 290px;
  padding: 12px 11px;

  &:first-of-type {
    flex: 0 1 100%;
  }
`;

export const Theme = styled.div`
  padding: 8px 11px;
  margin: 0 13px 0 0;
`;
