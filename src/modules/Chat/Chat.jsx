import React from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';
import { Avatar } from '../../components';
import * as S from './Chat.styles';

const Conversations = ({ data }) => (
  <S.Conversations>
    {data.map((conversation, index) => (
      <S.Conversation
        // eslint-disable-next-line react/no-array-index-key
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
            <S.Name>{conversation.name}</S.Name>
            <S.Time>{conversation.time}</S.Time>
          </S.Details>
          <S.Preview>{conversation.preview}</S.Preview>
        </S.Body>
      </S.Conversation>
    ))}
  </S.Conversations>
);

const Dialog = ({ data }) => (
  <S.Dialog>
    <S.Messages>
      {data.map((message) => (
        <S.Message>{JSON.stringify(message)}</S.Message>
      ))}
    </S.Messages>
    <S.TextInput />
  </S.Dialog>
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

Dialog.propTypes = {
  data: arrayOf(
    shape({
      avatarSrc: string.isRequired,
      message: string.isRequired,
      name: string.isRequired,
      time: string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default {
  Conversations,
  Dialog,
};
