/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Avatars, Inputs, Surfaces } from '../../components';
import * as css from './Chat.styles';

interface Conversation extends Dialog {
  isOnline: boolean;
}

interface Dialog {
  message: string;
  name: string;
  sentBy: number;
  src: string;
  time: string;
}

interface ConversationsProps {
  data: Conversation[];
}

interface DialogProps {
  data: {
    currentUser: number;
    messages: Dialog[];
  };
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
    <div css={css.dialogMessages}>
      {data.messages.map((message) => (
        <div
          css={css.dialogMessage({
            currentUser: data.currentUser === message.sentBy,
          })}
        >
          {JSON.stringify(message)}
        </div>
      ))}
    </div>
    <Inputs.Text css={css.dialogInput} />
  </div>
);
