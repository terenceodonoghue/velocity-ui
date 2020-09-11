import faker from 'faker';
import { TopDriversProps } from './Home';

export const customizedLabel = {
  index: 0,
  percent: 86,
};

export const topDrivers: TopDriversProps = {
  drivers: [
    {
      src: faker.image.avatar(),
      name: 'Bebop',
      vehicle: 'Volvo Intellisafe',
      earnings: 6432,
      distance: 1232,
    },
    {
      src: faker.image.avatar(),
      name: 'Gran Tesoro',
      vehicle: 'Chevrolet Bolt',
      earnings: 5342,
      distance: 945,
    },
    {
      src: faker.image.avatar(),
      name: 'Belafonte',
      vehicle: 'Infiniti Q50S',
      earnings: 5133,
      distance: 834,
    },
    {
      src: faker.image.avatar(),
      name: 'Chester',
      vehicle: 'Audi RS 7',
      earnings: 4755,
      distance: 812,
    },
    {
      src: faker.image.avatar(),
      name: 'Expedia',
      vehicle: 'Tesla Model X',
      earnings: 4140,
      distance: 724,
    },
    {
      src: faker.image.avatar(),
      name: 'Aeolus',
      vehicle: 'Tesla Model S',
      earnings: 3323,
      distance: 466,
    },
  ],
};
