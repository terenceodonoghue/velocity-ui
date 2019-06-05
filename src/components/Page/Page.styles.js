import styled from '@emotion/styled';

export const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e4e8f0;
  padding: 0 112px;
  height: 80px;
  background-color: var(--color-white);
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Children = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 0 -5px;

  & > button {
    margin: 0 5px;
  }

  & > img {
    margin: 0 5px 0 8px;
  }
`;
