import styled from '@emotion/styled';

export const Conversations = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 1px;
  margin: 0;
  padding: 0;
  width: 378px;
  background-color: var(--color-white);
  list-style: none;
  overflow: hidden;

  & > div {
    border-left: 0;
    border-top: 0;
    padding: 17px 25px;
    cursor: pointer;

    &:hover {
      background-color: rgba(46, 91, 255, 0.08);
    }
  }
`;

export const Conversation = styled.li`
  display: flex;
`;

export const Avatar = styled.div`
  flex-grow: 0;
  margin-right: 10px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.47;
`;

export const Name = styled.span`
  flex-grow: 1;
  font-weight: var(--font-weight-medium);
`;

export const Time = styled.span`
  color: var(--color-bluey-grey);
`;

export const Preview = styled.span`
  display: block;
  color: var(--color-bluey-grey);
  line-height: 1.47;
  max-width: 259px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
