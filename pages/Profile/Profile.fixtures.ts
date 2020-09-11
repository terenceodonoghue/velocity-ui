/* eslint-disable import/prefer-default-export */
import faker from 'faker';

export const sidebar = {
  bio: faker.lorem.sentences(),
  email: faker.internet.exampleEmail(),
  jobTitle: faker.name.jobTitle(),
  location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  name: faker.name.findName(),
  phone: `+${faker.phone.phoneNumberFormat()}`,
  roles: 'Administrator, Moderator',
  src: faker.image.avatar(),
};
