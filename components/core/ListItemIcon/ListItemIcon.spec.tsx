import React from 'react';
import { render } from 'test-utils';
import ListItemIcon from './ListItemIcon';

describe('ListItemIcon', () => {
  it('renders icon', () => {
    const { container } = render(<ListItemIcon icon={() => <svg />} />);

    expect(container).toMatchSnapshot();
  });
});
