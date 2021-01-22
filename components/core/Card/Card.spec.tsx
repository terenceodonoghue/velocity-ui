import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import Card from './Card';

describe('Card', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId, queryByTestId } = render(
      <Card>{content}</Card>,
    );

    expect(getByTestId('card')).toHaveTextContent(content);
    expect(queryByTestId('card-heading')).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('renders content with heading', () => {
    const content = faker.hacker.phrase();
    const heading = faker.hacker.phrase();

    const { container, getByTestId } = render(
      <Card heading={heading}>{content}</Card>,
    );

    expect(getByTestId('card')).toHaveTextContent(content);
    expect(getByTestId('card-heading')).toHaveTextContent(heading);
    expect(container).toMatchSnapshot();
  });
});
