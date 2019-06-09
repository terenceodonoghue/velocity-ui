import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'components';
import Settings from './Settings';
import * as S from './Settings.styles';

describe('Settings', () => {
  describe('Personal Data', () => {
    it('should render a heading', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.props().heading).toBe('Personal data');
    });

    it('should render e-mail field', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.TextField).at(0).containsAllMatchingElements([
        'Email address',
        <Input.Text type="text" />,
      ])).toBe(true);
    });

    it('should render first name field', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.TextField).at(1).containsAllMatchingElements([
        'First name',
        <Input.Text type="text" />,
      ])).toBe(true);
    });

    it('should render last name field', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.TextField).at(2).containsAllMatchingElements([
        'Last name',
        <Input.Text type="text" />,
      ])).toBe(true);
    });

    it('should render birth date field', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.TextField).at(3).containsAllMatchingElements([
        'Birth date',
        <Input.Text type="date" />,
      ])).toBe(true);
    });

    it('should render current password field', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.TextField).at(4).containsAllMatchingElements([
        'Current password',
        <Input.Text type="password" />,
      ])).toBe(true);
    });

    it('should render new password field', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.TextField).at(5).containsAllMatchingElements([
        'New password',
        <Input.Text type="password" />,
      ])).toBe(true);
    });

    it('should render confirm password field', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.TextField).at(6).containsAllMatchingElements([
        'Confirm',
        <Input.Text type="password" />,
      ])).toBe(true);
    });
  });
});
