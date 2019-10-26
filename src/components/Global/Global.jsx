import React from 'react';
import { Global } from '@emotion/core';
import Base, { variables } from './Global.styles';

const Styles = () => <Global styles={Base} />;

export default {
  Styles,
  variables,
};
