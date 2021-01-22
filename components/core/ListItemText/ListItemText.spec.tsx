import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import ListItemText from './ListItemText';

describe('ListItemText', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(
      <ListItemText>{content}</ListItemText>,
    );

    expect(getByTestId('listitemtext')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });
});
