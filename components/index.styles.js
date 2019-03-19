import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;

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
