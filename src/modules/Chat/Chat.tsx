/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Avatars, Inputs, Sendable, Surfaces } from '../../components';
import * as css from './Chat.styles';

interface Conversation extends Sendable {
  isOnline: boolean;
}

interface Message extends Sendable {
  isCurrentUser: boolean;
}

interface ConversationsProps {
  data: Conversation[];
}

interface DialogProps {
  data: Message[];
}

export const Conversations: FunctionComponent<ConversationsProps> = ({
  data,
}) => (
  <ul css={css.conversations}>
    {data.map((conversation, index) => (
      <Surfaces.Card
        css={css.conversation}
        // eslint-disable-next-line react/no-array-index-key
        key={`${conversation.name.split(' ').join('-').toLowerCase()}-${index}`}
      >
        <div css={css.avatar}>
          <Avatars.Round src={conversation.src} height="48" width="48" />
        </div>
        <div css={css.conversationBody}>
          <div css={css.conversationDetails}>
            <span css={css.conversationName}>{conversation.name}</span>
            <span css={css.conversationTime}>{conversation.time}</span>
          </div>
          <span css={css.conversationPreview}>{conversation.message}</span>
        </div>
      </Surfaces.Card>
    ))}
  </ul>
);

export const Dialog: FunctionComponent<DialogProps> = ({ data }) => (
  <div css={css.dialog}>
    {data.map((message) => (
      <div
        css={css.dialogMessage({
          isCurrentUser: message.isCurrentUser,
        })}
      >
        <span css={css.dialogName({ isCurrentUser: message.isCurrentUser })}>
          {message.name}
        </span>
        {message.message}
        <span css={css.dialogTime({ isCurrentUser: message.isCurrentUser })}>
          {message.time}
        </span>
        <img
          alt={message.name}
          css={css.dialogAvatar({ isCurrentUser: message.isCurrentUser })}
          src={message.src}
        />
      </div>
    ))}
    <Inputs.Text css={css.dialogInput} />
  </div>
);
