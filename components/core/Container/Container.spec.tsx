import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import Container from './Container';

describe('Container', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId, queryByTestId } = render(
      <Container>{content}</Container>,
    );

    expect(getByTestId('container')).toHaveTextContent(content);
    expect(queryByTestId('container-heading')).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('renders content with heading', () => {
    const content = faker.hacker.phrase();
    const heading = faker.hacker.phrase();

    const { container, getByTestId } = render(
      <Container heading={heading}>{content}</Container>,
    );

    expect(getByTestId('container')).toHaveTextContent(content);
    expect(getByTestId('container-heading')).toHaveTextContent(heading);
    expect(container).toMatchSnapshot();
  });
});
