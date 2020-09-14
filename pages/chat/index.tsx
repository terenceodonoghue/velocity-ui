/** @jsx jsx */
import { jsx } from '@emotion/core';
import faker from 'faker';
import moment from 'moment';
import { NextPage } from 'next';
import { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Avatar, Input, Layout } from '~/components';
import { ConversationsProps, DialogProps } from '~/types';
import * as css from './chat.styles';

export const Conversations: FunctionComponent<ConversationsProps> = ({
  data,
}) => (
  <ul css={css.conversations}>
    {data.map((conversation, index) => (
      <Layout.Card
        css={css.conversation}
        // eslint-disable-next-line react/no-array-index-key
        key={`${conversation.name.split(' ').join('-').toLowerCase()}-${index}`}
      >
        <div css={css.avatar}>
          <Avatar
            alt={faker.name.findName()}
            round
            size={48}
            src={conversation.src}
          />
        </div>
        <div css={css.conversationBody}>
          <div css={css.conversationDetails}>
            <span css={css.conversationName}>{conversation.name}</span>
            <span css={css.conversationTime}>{conversation.time}</span>
          </div>
          <span css={css.conversationPreview}>{conversation.message}</span>
        </div>
      </Layout.Card>
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
    <Input.Text css={css.dialogInput} />
  </div>
);

const ChatPage: NextPage = () => {
  return (
    <>
      <Helmet>
        <title>Velocity | Chat</title>
      </Helmet>
      <Layout.Page css={css.page}>
        <Conversations
          data={[
            {
              isOnline: faker.random.boolean(),
              message: faker.lorem.sentences(),
              name: faker.name.findName(),
              src: faker.image.avatar(),
              time: moment()
                .minutes(faker.random.number({ min: 1, max: 19 }))
                .format('m[m]'),
            },
            {
              isOnline: faker.random.boolean(),
              message: faker.lorem.sentences(),
              name: faker.name.findName(),
              src: faker.image.avatar(),
              time: moment()
                .minutes(faker.random.number({ min: 20, max: 39 }))
                .format('m[m]'),
            },
            {
              isOnline: faker.random.boolean(),
              message: faker.lorem.sentences(),
              name: faker.name.findName(),
              src: faker.image.avatar(),
              time: moment()
                .minutes(faker.random.number({ min: 40, max: 59 }))
                .format('m[m]'),
            },
            {
              isOnline: faker.random.boolean(),
              message: faker.lorem.sentences(),
              name: faker.name.findName(),
              src: faker.image.avatar(),
              time: moment()
                .hours(faker.random.number({ min: 1, max: 5 }))
                .format('h[h]'),
            },
            {
              isOnline: faker.random.boolean(),
              message: faker.lorem.sentences(),
              name: faker.name.findName(),
              src: faker.image.avatar(),
              time: moment()
                .hours(faker.random.number({ min: 6, max: 11 }))
                .format('h[h]'),
            },
            {
              isOnline: faker.random.boolean(),
              message: faker.lorem.sentences(),
              name: faker.name.findName(),
              src: faker.image.avatar(),
              time: moment()
                .hours(faker.random.number({ min: 12, max: 17 }))
                .format('h[h]'),
            },
            {
              isOnline: faker.random.boolean(),
              message: faker.lorem.sentences(),
              name: faker.name.findName(),
              src: faker.image.avatar(),
              time: moment()
                .hours(faker.random.number({ min: 18, max: 23 }))
                .format('h[h]'),
            },
          ]}
        />
      </Layout.Page>
    </>
  );
};

export default ChatPage;
