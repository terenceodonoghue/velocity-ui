/* eslint-disable import/prefer-default-export */
import faker from 'faker';
import moment from 'moment';

export const dialog = {
  data: [
    {
      isCurrentUser: faker.random.boolean(),
      message: faker.lorem.sentence(),
      name: faker.name.firstName(),
      src: faker.image.avatar(),
      time: moment().format('HH:mm'),
    },
    {
      isCurrentUser: faker.random.boolean(),
      message: faker.lorem.sentence(),
      name: faker.name.firstName(),
      src: faker.image.avatar(),
      time: moment().format('HH:mm'),
    },
    {
      isCurrentUser: faker.random.boolean(),
      message: faker.lorem.sentence(),
      name: faker.name.firstName(),
      src: faker.image.avatar(),
      time: moment().format('HH:mm'),
    },
    {
      isCurrentUser: faker.random.boolean(),
      message: faker.lorem.sentence(),
      name: faker.name.firstName(),
      src: faker.image.avatar(),
      time: moment().format('HH:mm'),
    },
    {
      isCurrentUser: faker.random.boolean(),
      message: faker.lorem.sentence(),
      name: faker.name.firstName(),
      src: faker.image.avatar(),
      time: moment().format('HH:mm'),
    },
  ],
};
