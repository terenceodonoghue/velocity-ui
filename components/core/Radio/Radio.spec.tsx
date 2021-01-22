import React from 'react';
import faker from 'faker';
import { render, userEvent } from 'test-utils';
import Radio from './Radio';

describe('Radio', () => {
  it('renders label', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<Radio>{content}</Radio>);

    expect(getByTestId('radio')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });

  it('is unchecked by default', () => {
    const { getByTestId } = render(<Radio />);

    expect(getByTestId('radio-input')).not.toBeChecked();
  });

  it('is checked when clicked', () => {
    const { getByTestId } = render(<Radio />);

    userEvent.click(getByTestId('radio'));

    expect(getByTestId('radio-input')).toBeChecked();
  });
});
