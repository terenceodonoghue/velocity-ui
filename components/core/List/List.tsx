import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import flexRoot from './List.styles';
import type { ListProps } from './List.types';

const ListRoot = styled.ul(flexRoot);

const List: FunctionComponent<ListProps> = ({ children, component = 'ul' }) => (
  <ListRoot as={component} data-testid={`list-${component}`}>
    {children}
  </ListRoot>
);

export default List;
