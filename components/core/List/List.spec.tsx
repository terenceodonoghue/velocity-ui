import React from 'react';
import { render } from 'test-utils';
import List from './List';

describe('List', () => {
  it('is unordered by default', () => {
    const { container, getByTestId } = render(<List />);

    expect(getByTestId('list-ul')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders ordered list', () => {
    const { container, getByTestId } = render(<List component="ol" />);

    expect(getByTestId('list-ol')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders unordered list', () => {
    const { container, getByTestId } = render(<List component="ul" />);

    expect(getByTestId('list-ul')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
