import React from 'react';
import Navigation from './Navigation';
import { menu } from './Navigation.fixtures';
import * as S from './Navigation.styles';

describe('Navigation', () => {
  describe('Components', () => {
    describe('S.Menu', () => {
      it('changes width', () => {
        const component = shallow(
          <S.Menu />,
        );

        component.setProps({ open: false });
        expect(component.dive()).toHaveStyleRule('width', '80px');

        component.setProps({ open: true });
        expect(component.dive()).toHaveStyleRule('width', '215px');
      });
    });


    describe('S.NavLabel', () => {
      it('changes color', () => {
        const component = shallow(
          <S.NavLabel />,
        );

        component.setProps({ selected: false });
        expect(component.dive()).toHaveStyleRule('color', '#b0bac9');

        component.setProps({ selected: true });
        expect(component.dive()).toHaveStyleRule('color', 'var(--color-clear-blue)');
      });

      it('changes opacity', () => {
        const component = shallow(
          <S.NavLabel />,
        );

        component.setProps({ show: false });
        expect(component.dive()).toHaveStyleRule('opacity', '0');

        component.setProps({ show: true });
        expect(component.dive()).toHaveStyleRule('opacity', '1');
      });
    });

    describe('S.Welcome', () => {
      it('changes opacity', () => {
        const component = shallow(
          <S.Welcome />,
        );

        component.setProps({ show: false });
        expect(component.dive()).toHaveStyleRule('opacity', '0');

        component.setProps({ show: true });
        expect(component.dive()).toHaveStyleRule('opacity', '1');
      });
    });
  });

  describe('Menu', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(
        <Navigation.Menu {...menu} />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('toggles on button click', () => {
      const component = shallow(
        <Navigation.Menu {...menu} />,
      );

      component.find(S.MenuButton).simulate('click');

      expect(component.find(S.Menu).prop('open')).toBeTruthy();
      expect(component.find(S.Welcome).prop('show')).toBeTruthy();
      component.find(S.NavLabel).forEach((node) => expect(node.prop('show')).toBeTruthy());


      component.find(S.MenuButton).simulate('click');

      expect(component.find(S.Menu).prop('open')).toBeFalsy();
      expect(component.find(S.Welcome).prop('show')).toBeFalsy();
      component.find(S.NavLabel).forEach((node) => expect(node.prop('show')).toBeFalsy());
    });
  });
});
