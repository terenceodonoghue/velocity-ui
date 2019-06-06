import { css } from '@emotion/core';
import styled from '@emotion/styled';

const base = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  font-size: var(--base-font-size);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: var(--transition);

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
  width: ${props => props.width || '200px'};
  background-color: var(--color-clear-blue);
  color: white;

  &:enabled:hover {
    background-color: var(--color-clear-blue-dark);
  }
`;

export const Outlined = styled.button`
  ${base};
  border-radius: 4px;
  height: 40px;
  width: ${props => props.width || '200px'};
  background: rgba(46, 91, 255, 0.2);
  color: var(--color-clear-blue);

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.3);
  }
`;

export const Text = styled.button`
  ${base};
  border-radius: 4px;
  height: 40px;
  width: ${props => props.width || '200px'};
  background: none;
  color: var(--color-clear-blue);

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.1);
  }
`;

export const Fab = styled.button`
  ${base};
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: var(--color-clear-blue);
  color: white;

  &:enabled:hover {
    background-color: var(--color-clear-blue-dark);
  }
`;
