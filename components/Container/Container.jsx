/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import * as S from './Container.styles';

const Card = ({ children, heading, ...rest }) => (
  <S.Card {...rest}>
    {heading && <S.Heading>{heading}</S.Heading>}
    {children}
  </S.Card>
);

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
