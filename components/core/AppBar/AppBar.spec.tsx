import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import AppBar from './AppBar';

describe('AppBar', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<AppBar>{content}</AppBar>);

    expect(getByTestId('appbar')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });
});
