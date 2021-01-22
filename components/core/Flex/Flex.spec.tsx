import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import Flex from './Flex';

describe('Flex', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<Flex>{content}</Flex>);

    expect(getByTestId('flex')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });

  it('has align-items propery', () => {
    const { container, getByTestId } = render(<Flex alignItems="flex-start" />);

    expect(getByTestId('flex')).toHaveStyle({ alignItems: 'flex-start' });
    expect(container).toMatchSnapshot();
  });

  it('has align-items propery', () => {
    const { container, getByTestId } = render(
      <Flex justifyContent="flex-start" />,
    );

    expect(getByTestId('flex')).toHaveStyle({ justifyContent: 'flex-start' });
    expect(container).toMatchSnapshot();
  });

  it('has flex-grow property', () => {
    const { container, getByTestId } = render(<Flex grow={1} />);

    expect(getByTestId('flex')).toHaveStyle({ flex: '1 1 auto' });
    expect(container).toMatchSnapshot();
  });

  it('has flex-shrink property', () => {
    const { container, getByTestId } = render(<Flex shrink={0} />);

    expect(getByTestId('flex')).toHaveStyle({ flex: '0 0 auto' });
    expect(container).toMatchSnapshot();
  });

  it('has flex-basis property', () => {
    const { container, getByTestId } = render(<Flex basis="50%" />);

    expect(getByTestId('flex')).toHaveStyle({ flex: '0 1 50%' });
    expect(container).toMatchSnapshot();
  });

  it('has flex-direction property', () => {
    const { container, getByTestId } = render(<Flex direction="column" />);

    expect(getByTestId('flex')).toHaveStyle({ flexDirection: 'column' });
    expect(container).toMatchSnapshot();
  });

  it('has flex-wrap property', () => {
    const { container, getByTestId, rerender } = render(<Flex wrap="nowrap" />);

    expect(getByTestId('flex')).toHaveStyle({ flexWrap: 'nowrap' });
    expect(container).toMatchSnapshot();

    rerender(<Flex wrap />);

    expect(getByTestId('flex')).toHaveStyle({ flexWrap: 'wrap' });
    expect(container).toMatchSnapshot();
  });
});
