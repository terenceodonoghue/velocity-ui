import faker from 'faker';
import moment from 'moment';

export const conversations = {
  data: [
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
  ],
};

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
