import React from 'react';
import { arrayOf, oneOfType, node } from 'prop-types';
import * as S from './Page.styles';

const AppBar = ({ children, ...rest }) => (
  <S.AppBar {...rest}>
    <S.Logo alt="Velocity" src="./logo.svg" />
    <S.Children>{children}</S.Children>
  </S.AppBar>
);

AppBar.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default {
  AppBar,
};
