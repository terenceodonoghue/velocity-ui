import styled from '@emotion/styled';
import { Container, Global, Input } from '../../components';

const {
  variables: { colors, typography },
} = Global;

export const Filter = styled(Container.Card)`
  padding: 32px 24px 3px;
  width: 268px;
`;

export const FilterField = styled(Input.Text)`
  padding: 0 6px 19px;
  color: ${colors.dark};
  font-size: 15px;
  font-weight: ${typography.fontWeightRegular};
  letter-spacing: normal;
  line-height: 1.47;
  text-transform: none;

  input {
    color: ${colors.clearBlue};
  }
`;

export const FilterLabel = styled.span`
  flex: 1;
`;

export const FilterText = styled.div`
  display: flex;
`;

export const FilterValue = styled.span`
  color: ${colors.blueyGrey};
`;

export const SliderInput = styled(Input.Slider)`
  margin: 12px 0 18px;
`;

export const TextInput = styled(Input.Text)`
  background: ${colors.white};
  color: ${colors.clearBlue};
`;

export const Vehicles = styled.table``;
