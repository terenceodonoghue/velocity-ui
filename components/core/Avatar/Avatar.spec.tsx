import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('is rounded by default', () => {
    const { container, getByTestId } = render(
      <Avatar alt={faker.name.findName()} src={faker.image.avatar()} />,
    );

    expect(getByTestId('avatar')).toHaveStyle({ borderRadius: '50%' });
    expect(container).toMatchSnapshot();
  });

  it('renders rounded variant', () => {
    const { container, getByTestId } = render(
      <Avatar
        alt={faker.name.findName()}
        src={faker.image.avatar()}
        variant="rounded"
      />,
    );

    expect(getByTestId('avatar')).toHaveStyle({ borderRadius: '50%' });
    expect(container).toMatchSnapshot();
  });

  it('renders square variant', () => {
    const { container, getByTestId } = render(
      <Avatar
        alt={faker.name.findName()}
        src={faker.image.avatar()}
        variant="square"
      />,
    );

    expect(getByTestId('avatar')).toHaveStyle({ borderRadius: '6px' });
    expect(container).toMatchSnapshot();
  });
});
