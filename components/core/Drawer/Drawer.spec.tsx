import React from 'react';
import { render } from 'test-utils';
import Drawer from './Drawer';

describe('Drawer', () => {
  it('is closed by default', () => {
    const { container, getByTestId } = render(<Drawer />);

    expect(getByTestId('drawer')).toHaveStyle({ width: '80px' });
    expect(container).toMatchSnapshot();
  });

  it('expands when opened', () => {
    const { container, getByTestId } = render(<Drawer open />);

    expect(getByTestId('drawer')).toHaveStyle({ width: '215px' });
    expect(container).toMatchSnapshot();
  });

  it('anchors to the left', () => {
    const { container, getByTestId } = render(<Drawer anchor="left" />);

    expect(getByTestId('drawer')).toHaveStyle({ left: 0 });
    expect(container).toMatchSnapshot();
  });

  it('anchors to the right', () => {
    const { container, getByTestId } = render(<Drawer anchor="right" />);

    expect(getByTestId('drawer')).toHaveStyle({ right: 0 });
    expect(container).toMatchSnapshot();
  });
});
