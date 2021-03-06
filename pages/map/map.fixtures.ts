import faker from 'faker';

export const passenger = {
  email: 'invision@invisionapp.com',
  interactions: 4,
  location: 'New York, NY',
  name: 'Nora M. Buchanan',
  phone: '+144–3412–4422',
  src: faker.image.avatar(),
};

export const trip = {
  distance: 12.3,
  energy: 12.4,
  from: { streetAddress: '37-27 74th Street', suburb: 'Jackson Heights' },
  price: 34.2,
  time: 42,
  to: { streetAddress: '81 Gate St Brooklyn', suburb: 'Greenpoint' },
};
