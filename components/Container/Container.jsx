/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import * as S from './Container.styles';

const Card = ({ children, title, ...rest }) => (
  <S.Card {...rest}>
    {title && <S.Title>{title}</S.Title>}
    {children}
  </S.Card>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

Card.defaultProps = {
  title: null,
};

export default {
  Card,
};
