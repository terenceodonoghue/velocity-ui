import React from 'react';
import { rgba } from 'polished';
import { render } from 'test-utils';
import ListItem from './ListItem';
import { defaultTheme } from '../ThemeProvider';

describe('ListItem', () => {
  it('is unselected by default', () => {
    const { container, getByTestId } = render(<ListItem />);

    expect(getByTestId('listitem')).toHaveStyle({
      borderLeft: 'solid 3px transparent',
    });
    expect(getByTestId('listitem')).not.toHaveStyle({
      backgroundColor: rgba(defaultTheme.palette.accent, 0.1),
    });
    expect(container).toMatchSnapshot();
  });

  it('renders selected item', () => {
    const { container, getByTestId } = render(<ListItem selected />);

    expect(getByTestId('listitem')).toHaveStyle({
      borderLeft: `solid 3px ${defaultTheme.palette.accent}`,
    });
    expect(getByTestId('listitem')).toHaveStyle({
      backgroundColor: rgba(defaultTheme.palette.accent, 0.1),
    });
    expect(container).toMatchSnapshot();
  });
});
