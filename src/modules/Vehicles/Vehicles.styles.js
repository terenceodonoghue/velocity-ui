import styled from '@emotion/styled';
import { Surfaces, Inputs } from '../../components';

export const Filter = styled(Surfaces.Card)`
  padding: 32px 24px 3px;
  width: 268px;
`;

export const SliderField = styled(Inputs.Slider)`
  padding: 0 6px 34px;
`;

export const TextField = styled(Inputs.Text)`
  padding: 0 6px 19px;
  color: ${(props) => props.theme.colors.black};
  font-size: 15px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  letter-spacing: normal;
  line-height: 1.47;
  text-transform: none;

  input {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const Vehicles = styled.table``;
