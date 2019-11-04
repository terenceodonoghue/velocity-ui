import styled from '@emotion/styled';
import { Button, variables } from '../../components';

const { colors, effects } = variables;

export const Menu = styled.div`
  height: 100%;
  padding: 20px;
  width: ${(props) => (props.open ? '215px' : '80px')};
  background-color: ${colors.white};
  transition: ${effects.transition};
  overflow-x: hidden;
`;

export const MenuButton = styled(Button.Text)`
  margin: 0 0 58px;
  width: 40px;
`;

export const Name = styled.span`
  display: block;
  color: ${colors.lightBlueGrey};
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: ${(props) =>
    `solid 3px ${props.selected ? colors.blue : 'transparent'}`};
  height: 56px;
  margin: 0 -20px;
  padding: 0 0 0 27px;
  background-color: ${(props) =>
    props.selected ? 'rgba(46, 91, 255, 0.1)' : null};
  transition: ${effects.transition};
  cursor: pointer;
  ${(props) =>
    !props.selected &&
    `
    &:hover {
      background-color: rgba(46, 91, 255, 0.1);
    }
  `}
`;

export const NavLabel = styled.span`
  margin-left: 18px;
  color: ${(props) => (props.selected ? colors.blue : '#b0bac9')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: ${effects.transition};
  transition-delay: ${effects.transition};
`;

export const Welcome = styled.div`
  display: flex;
  margin: 0 0 24px;
  padding: 0 8px;
  width: 215px;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: ${effects.transition};
  transition-delay: ${effects.transition};
`;

export const WelcomeText = styled.div`
  margin-left: 10px;
`;
