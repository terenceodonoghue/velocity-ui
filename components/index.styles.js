import styled from '@emotion/styled';

export const Components = styled.div`
  & > * {
    margin-bottom: 24px;
  }
`;

export const Stories = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: -12px;

  & > * {
    flex-shrink: 0;
    margin: 12px;
  }
`;
