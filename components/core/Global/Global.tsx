import React, { FunctionComponent } from 'react';
import { Global } from '@emotion/react';
import globalStyles from './Global.styles';

const GlobalStyles: FunctionComponent = () => <Global styles={globalStyles} />;

export default GlobalStyles;
