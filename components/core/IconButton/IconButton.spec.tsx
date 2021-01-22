import React from 'react';
import { render } from 'test-utils';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('renders button', () => {
    const { container } = render(<IconButton />);

    // toContainElement(testid)
    expect(container).toMatchSnapshot();
  });
});
