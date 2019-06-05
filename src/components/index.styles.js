import styled from '@emotion/styled';
import { Container } from 'components';

export const Components = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: -12px;

  & > * {
    margin: 12px;
  }
`;

export const Story = styled(Container.Card)`
  margin: 24px 0;
  padding: 32px 24px;
`;
