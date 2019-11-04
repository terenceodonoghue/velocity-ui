import React from 'react';
import { Global } from '@emotion/core';
import css, { variables } from './Global.styles';

export { variables };

export default () => <Global styles={css} />;
