/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  arrayOf, bool, shape, string,
} from 'prop-types';
import { Avatar } from 'components';
import * as S from './Chat.styles';

const Conversations = ({ data }) => (
  <S.Conversations>
    {data.map((conversation, index) => (
      <S.Conversation
        key={`${conversation.name
          .split(' ')
          .join('-')
          .toLowerCase()}-${index}`}
      >
        <S.Avatar>
          <Avatar.Round src={conversation.avatarSrc} height="48" width="48" />
        </S.Avatar>
        <S.Body>
          <S.Details>
            <S.Name>
              {conversation.name}
            </S.Name>
            <S.Time>
              {conversation.time}
            </S.Time>
          </S.Details>
          <S.Preview>{conversation.preview}</S.Preview>
        </S.Body>
      </S.Conversation>
    ))}
  </S.Conversations>
);

Conversations.propTypes = {
  data: arrayOf(
    shape({
      avatarSrc: string.isRequired,
      isOnline: bool.isRequired,
      name: string.isRequired,
      preview: string.isRequired,
      time: string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default {
  Conversations,
};
