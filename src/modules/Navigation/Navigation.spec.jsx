/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Menu } from './Navigation';
import * as fixtures from './Navigation.fixtures';
import * as S from './Navigation.styles';
import { theme } from '../../components';

const { act } = renderer;
const { colors } = theme;

describe('Navigation', () => {
  describe('Components', () => {
    describe('S.Menu', () => {
      it('changes width', () => {
        const component = renderer.create(withTheme(<S.Menu open={false} />));
        expect(component.toJSON()).toHaveStyleRule('width', '80px');

        component.update(withTheme(<S.Menu open />));
        expect(component.toJSON()).toHaveStyleRule('width', '215px');
      });
    });

    describe('S.NavLabel', () => {
      it('changes color', () => {
        const component = renderer.create(
          withTheme(<S.NavLabel selected={false} />),
        );
        expect(component.toJSON()).toHaveStyleRule('color', '#b0bac9');

        component.update(withTheme(<S.NavLabel selected />));
        expect(component.toJSON()).toHaveStyleRule('color', colors.blue);
      });

      it('changes opacity', () => {
        const component = renderer.create(
          withTheme(<S.NavLabel show={false} />),
        );

        expect(component.toJSON()).toHaveStyleRule('opacity', '0');

        component.update(withTheme(<S.NavLabel show />));
        expect(component.toJSON()).toHaveStyleRule('opacity', '1');
      });
    });

    describe('S.Welcome', () => {
      it('changes opacity', () => {
        const component = renderer.create(
          withTheme(<S.Welcome show={false} />),
        );
        expect(component.toJSON()).toHaveStyleRule('opacity', '0');

        component.update(withTheme(<S.Welcome show />));
        expect(component.toJSON()).toHaveStyleRule('opacity', '1');
      });
    });
  });

  describe('Menu', () => {
    it('matches snapshot', () => {
      const tree = renderer
        .create(withTheme(<Menu {...fixtures.menu} />))
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('toggles on button click', () => {
      const component = renderer.create(withTheme(<Menu {...fixtures.menu} />))
        .root;

      act(() => component.findByType(S.MenuButton).props.onClick());

      expect(component.findByType(S.Menu).props.open).toBeTruthy();
      expect(component.findByType(S.Welcome).props.show).toBeTruthy();
      component
        .findAllByType(S.NavLabel)
        .forEach((node) => expect(node.props.show).toBeTruthy());

      act(() => component.findByType(S.MenuButton).props.onClick());

      expect(component.findByType(S.Menu).props.open).toBeFalsy();
      expect(component.findByType(S.Welcome).props.show).toBeFalsy();
      component
        .findAllByType(S.NavLabel)
        .forEach((node) => expect(node.props.show).toBeFalsy());
    });
  });
});
