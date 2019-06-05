/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.styles';

const Card = React.forwardRef(({ children, heading, ...rest }, ref) => (
  <S.Card ref={ref} {...rest}>
    {heading && <S.Heading>{heading}</S.Heading>}
    {children}
  </S.Card>
));

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  heading: PropTypes.string,
};

Card.defaultProps = {
  heading: null,
};


export default {
  Card,
};
