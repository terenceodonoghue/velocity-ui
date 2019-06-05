import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Chat from './Chat';

storiesOf('Modules|Chat', module).add('Conversations', () => (
  <Chat.Conversations
    data={[
      {
        avatarSrc: faker.image.avatar(),
        isOnline: false,
        name: faker.name.findName(),
        preview: faker.lorem.sentence(),
        time: '2m',
      },
      {
        avatarSrc: faker.image.avatar(),
        isOnline: false,
        name: faker.name.findName(),
        preview: faker.lorem.sentence(),
        time: '40m',
      },
      {
        avatarSrc: faker.image.avatar(),
        isOnline: false,
        name: faker.name.findName(),
        preview: faker.lorem.sentence(),
        time: '51m',
      },
      {
        avatarSrc: faker.image.avatar(),
        isOnline: false,
        name: faker.name.findName(),
        preview: faker.lorem.sentence(),
        time: '2h',
      },
      {
        avatarSrc: faker.image.avatar(),
        isOnline: false,
        name: faker.name.findName(),
        preview: faker.lorem.sentence(),
        time: '7h',
      },
      {
        avatarSrc: faker.image.avatar(),
        isOnline: false,
        name: faker.name.findName(),
        preview: faker.lorem.sentence(),
        time: '7h',
      },
      {
        avatarSrc: faker.image.avatar(),
        isOnline: false,
        name: faker.name.findName(),
        preview: faker.lorem.sentence(),
        time: '10h',
      },
    ]}
  />
));
