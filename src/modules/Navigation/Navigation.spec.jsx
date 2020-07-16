/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icons } from '~/components';
import {
  Drawer,
  Menu,
  MenuHeader,
  NavListItem,
  NavListItemContent,
} from './Navigation';
import * as fixtures from './Navigation.fixtures';

describe('Navigation', () => {
  describe('Components', () => {
    describe('Drawer', () => {
      it('changes width', () => {
        const component = renderer.create(withTheme(<Drawer show={false} />));
        expect(component.toJSON()).toHaveStyleRule('width', '80px');

        component.update(withTheme(<Drawer show />));
        expect(component.toJSON()).toHaveStyleRule('width', '215px');
      });
    });

    describe('MenuHeader', () => {
      it('changes opacity', () => {
        const component = renderer.create(
          withTheme(<MenuHeader show={false} />),
        );
        expect(component.toJSON()).toHaveStyleRule('opacity', '0');

        component.update(withTheme(<MenuHeader show />));
        expect(component.toJSON()).toHaveStyleRule('opacity', '1');
      });
    });

    describe('NavListItem', () => {
      it('changes background color', () => {
        const component = renderer.create(
          withTheme(<NavListItem icon={Icons.Analytics} selected={false} />),
        );
        expect(component.toJSON()).not.toHaveStyleRule('background-color');

        component.update(
          withTheme(<NavListItem icon={Icons.Analytics} selected />),
        );
        expect(component.toJSON()).toHaveStyleRule(
          'background-color',
          'rgba(46,91,255,0.1)',
        );
      });

      it('changes border style', () => {
        const component = renderer.create(
          withTheme(<NavListItem icon={Icons.Analytics} selected={false} />),
        );
        expect(component.toJSON()).toHaveStyleRule(
          'border-left',
          'solid 3px transparent',
        );

        component.update(
          withTheme(<NavListItem icon={Icons.Analytics} selected />),
        );
        expect(component.toJSON()).toHaveStyleRule(
          'border-left',
          'solid 3px #2e5bff',
        );
      });
    });
  });

  describe('NavListItemContent', () => {
    it('changes color', () => {
      const component = renderer.create(
        withTheme(<NavListItemContent selected={false} />),
      );
      expect(component.toJSON()).toHaveStyleRule('color', '#b0bac9');

      component.update(withTheme(<NavListItemContent selected />));
      expect(component.toJSON()).toHaveStyleRule('color', '#2e5bff');
    });

    it('changes opacity', () => {
      const component = renderer.create(
        withTheme(<NavListItemContent show={false} />),
      );
      expect(component.toJSON()).toHaveStyleRule('opacity', '0');

      component.update(withTheme(<NavListItemContent show />));
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
    const component = mount(withTheme(<Menu {...fixtures.menu} />));

    component.find('button').simulate('click');

    expect(component.find(Drawer).props().show).toBeTruthy();

    expect(component.find(MenuHeader).props().show).toBeTruthy();

    component
      .find(NavListItem)
      .forEach((node) => expect(node.props().show).toBeTruthy());

    component.find('button').simulate('click');

    expect(component.find(Drawer).props().show).toBeFalsy();

    expect(component.find(MenuHeader).props().show).toBeFalsy();

    component
      .find(NavListItem)
      .forEach((node) => expect(node.props().show).toBeFalsy());
  });
});
