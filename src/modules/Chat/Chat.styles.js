import styled from '@emotion/styled';
import { Container, Global } from '../../components';

const {
  variables: { colors, effects, typography },
} = Global;

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

export const Conversation = styled(Container.Card)`
  display: flex;
  border-left: 0;
  border-top: 0;
  padding: 17px 25px;
  cursor: pointer;
  transition: ${effects.transition};

  &:hover {
    background-color: rgba(46, 91, 255, 0.08);
  }
`;

export const Conversations = styled.ul`
  border-radius: 1px;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 378px;
  background-color: ${colors.white};
  list-style: none;
  overflow: hidden;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.47;
`;

export const Name = styled.span`
  flex-grow: 1;
  font-weight: ${typography.fontWeightMedium};
`;

export const Preview = styled.span`
  display: block;
  color: ${colors.blueyGrey};
  line-height: 1.47;
  max-width: 259px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.span`
  color: ${colors.blueyGrey};
`;
