import styled from '@emotion/styled';
import { Container, Global, Input } from '../../components';

const {
  variables: { colors, typography },
} = Global;

export const Filter = styled(Container.Card)`
  padding: 32px 24px 3px;
  width: 268px;
`;

export const SliderField = styled(Input.Slider)`
  padding: 0 6px 34px;
`;

export const TextField = styled(Input.Text)`
  padding: 0 6px 19px;
  color: ${colors.black};
  font-size: 15px;
  font-weight: ${typography.fontWeightRegular};
  letter-spacing: normal;
  line-height: 1.47;
  text-transform: none;

  input {
    color: ${colors.blue};
  }
`;

export const Vehicles = styled.table``;
