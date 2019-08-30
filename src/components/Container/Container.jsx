/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import {
  arrayOf, node, oneOfType, string,
} from 'prop-types';
import * as S from './Container.styles';

const Card = forwardRef(({ children, heading, ...rest }, ref) => (
  <S.Card ref={ref} {...rest}>
    {heading && <S.Heading>{heading}</S.Heading>}
    {children}
  </S.Card>
));

Card.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  heading: string,
};

Card.defaultProps = {
  heading: null,
};


export default {
  Card,
};
