import React from 'react';
import faker from 'faker';
import { render, userEvent } from 'test-utils';
import Switch from './Switch';

describe('Switch', () => {
  it('renders primary label', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId, queryByTestId } = render(
      <Switch primary={content} />,
    );

    expect(getByTestId('switch-primary')).toHaveTextContent(content);
    expect(queryByTestId('switch-secondary')).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('renders secondary label', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId, queryByTestId } = render(
      <Switch secondary={content} />,
    );

    expect(queryByTestId('switch-primary')).toBeNull();
    expect(getByTestId('switch-secondary')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });

  it('renders primary and secondary labels', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(
      <Switch primary={content} secondary={content} />,
    );

    expect(getByTestId('switch-primary')).toHaveTextContent(content);
    expect(getByTestId('switch-secondary')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });

  it('is unchecked by default', () => {
    const { getByTestId } = render(<Switch />);

    expect(getByTestId('switch-input')).not.toBeChecked();
  });

  it('is checked when clicked', () => {
    const { getByTestId } = render(<Switch />);

    userEvent.click(getByTestId('switch'));

    expect(getByTestId('switch-input')).toBeChecked();
  });
});
