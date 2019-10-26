import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Global from '../Global/Global';

const {
  variables: { colors, effects, typography },
} = Global;

const base = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  font-size: ${typography.baseFontSize};
  font-weight: ${typography.fontWeightMedium};
  cursor: pointer;
  transition: ${effects.transition};

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:focus {
    outline: 0;
  }
`;

export const Contained = styled.button`
  ${base};
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background-color: ${colors.clearBlue};
  color: ${colors.white};

  &:enabled:hover {
    background-color: ${colors.clearBlueDark};
  }
`;

export const Outlined = styled.button`
  ${base};
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background: rgba(46, 91, 255, 0.2);
  color: ${colors.clearBlue};

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.3);
  }
`;

export const Text = styled.button`
  ${base};
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background: none;
  color: ${colors.clearBlue};

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.1);
  }
`;

export const Fab = styled.button`
  ${base};
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${colors.clearBlue};
  color: ${colors.white};

  &:enabled:hover {
    background-color: ${colors.clearBlueDark};
  }
`;
