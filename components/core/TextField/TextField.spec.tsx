import React from 'react';
import faker from 'faker';
import { render, userEvent } from 'test-utils';
import TextField from './TextField';

describe('TextField', () => {
  it('renders label', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<TextField>{content}</TextField>);

    expect(getByTestId('textfield')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });

  it('is empty by default', () => {
    const { getByTestId } = render(<TextField />);

    expect(getByTestId('textfield-input')).not.toHaveValue();
  });

  it('shows input when typing', () => {
    const content = faker.hacker.phrase();
    const { getByTestId } = render(<TextField />);

    userEvent.type(getByTestId('textfield'), content);
    expect(getByTestId('textfield-input')).toHaveValue(content);
  });
});
