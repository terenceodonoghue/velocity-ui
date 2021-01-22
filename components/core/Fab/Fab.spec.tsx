import React from 'react';
import { render } from 'test-utils';
import Fab from './Fab';

describe('Fab', () => {
  it('renders button', () => {
    const { container } = render(<Fab />);

    expect(container).toMatchSnapshot();
  });
});
