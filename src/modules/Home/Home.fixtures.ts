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
  ],
};
