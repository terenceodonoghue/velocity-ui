/** @jsx jsx */
import { jsx } from '@emotion/core';
import faker from 'faker';
import moment from 'moment';
import { Conversations } from './index';

describe('Chat', () => {
  describe('Conversations', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(
          withTheme(
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
            />,
          ),
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
