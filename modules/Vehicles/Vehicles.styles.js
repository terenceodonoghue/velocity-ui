import styled from '@emotion/styled';
import { Container, Input } from 'components';

export const Filter = styled(Container.Card)`
  padding: 32px 24px 3px;
  width: 268px;
`;

export const FilterField = styled(Input.Label)`
  padding: 0 6px 19px;
  color: var(--color-dark);
  font-size: 15px;
  font-weight: var(--font-weight-regular);
  letter-spacing: normal;
  line-height: 1.47;
  text-transform: none;
`;

export const FilterLabel = styled.span`
  flex: 1;
`;

export const FilterText = styled.div`
  display: flex;
`;

export const FilterValue = styled.span`
  color: var(--color-bluey-grey);
`;

export const SliderInput = styled(Input.Slider)`
  margin: 12px 0 18px;
`;

export const TextInput = styled(Input.Text)`
  background: var(--color-white);
  color: var(--color-clear-blue);
`;

export const Vehicles = styled.table``;
