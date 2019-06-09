import styled from '@emotion/styled';
import { Button, Container } from 'components';

export const Components = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: -12px;

  & > * {
    margin: 12px;
  }
`;

export const IconButton = styled(Button.Text)`
  width: 40px;
`;

export const Story = styled(Container.Card)`
  margin: 24px 0;
`;
