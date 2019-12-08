import styled from '@emotion/styled';
import { Buttons, Surfaces } from '../src/components';

export const Components = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: -12px;

  & > * {
    margin: 12px;
  }
`;

export const IconButton = styled(Buttons.Text)`
  width: 40px;
`;

export const Story = styled(Surfaces.Card)`
  margin: 24px 0;
`;
