import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import Slider from './Slider';

describe('Slider', () => {
  it('renders primary label', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId, queryByTestId } = render(
      <Slider primary={content} />,
    );

    expect(getByTestId('slider-primary')).toHaveTextContent(content);
    expect(queryByTestId('slider-secondary')).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('renders secondary label', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId, queryByTestId } = render(
      <Slider secondary={content} />,
    );

    expect(queryByTestId('slider-primary')).toBeNull();
    expect(getByTestId('slider-secondary')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });

  it('renders primary and secondary labels', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(
      <Slider primary={content} secondary={content} />,
    );

    expect(getByTestId('slider-primary')).toHaveTextContent(content);
    expect(getByTestId('slider-secondary')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });
});
