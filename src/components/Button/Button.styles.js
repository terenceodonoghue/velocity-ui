import styled from '@emotion/styled';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  font-size: ${(props) => props.theme.typography.baseFontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  cursor: pointer;
  transition: ${(props) => props.theme.effects.transition};

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:focus {
    outline: 0;
  }
`;

export const Contained = styled(Button)`
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};

  &:enabled:hover {
    background-color: ${(props) => props.theme.colors.blueDark};
  }
`;

export const Outlined = styled(Button)`
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background: rgba(46, 91, 255, 0.2);
  color: ${(props) => props.theme.colors.blue};

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.3);
  }
`;

export const Text = styled(Button)`
  border-radius: 4px;
  height: 40px;
  width: 200px;
  background: none;
  color: ${(props) => props.theme.colors.blue};

  &:enabled:hover {
    background-color: rgba(46, 91, 255, 0.1);
  }
`;

export const Fab = styled(Button)`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};

  &:enabled:hover {
    background-color: ${(props) => props.theme.colors.blueDark};
  }
`;
