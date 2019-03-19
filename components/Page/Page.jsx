/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import * as S from './Page.styles';

const AppBar = ({ children, ...rest }) => (
  <S.AppBar {...rest}>
    <S.Logo alt="Velocity" src="./logo.svg" />
    <S.Children>{children}</S.Children>
  </S.AppBar>
);

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default {
  AppBar,
};
