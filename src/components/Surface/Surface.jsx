import React, { forwardRef } from 'react';
import { arrayOf, node, oneOfType, string } from 'prop-types';
import * as S from './Surface.styles';

export const AppBar = ({ children, ...rest }) => (
  <S.AppBar {...rest}>
    <S.Logo alt="Velocity" src="./logo.svg" />
    <S.Children>{children}</S.Children>
  </S.AppBar>
);

export const Card = forwardRef(({ children, heading, ...rest }, ref) => (
  <S.Card ref={ref} {...rest}>
    {heading && <S.Heading>{heading}</S.Heading>}
    {children}
  </S.Card>
));

AppBar.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

Card.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  heading: string,
};

Card.defaultProps = {
  heading: null,
};
