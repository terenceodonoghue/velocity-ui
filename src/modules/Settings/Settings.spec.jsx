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

    it('should render help text', () => {
      const component = shallow(
        <Settings.Personal />,
      );

      expect(component.find(S.Legend).text()).toBe(
        'Use this page to update your contact information and change your password.',
      );
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

  describe('Integrations', () => {
    it('should render a heading', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.props().heading).toBe('Integrations');
    });

    it('should render help text', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.find(S.Legend).text()).toBe(
        'Manage third-party app integrations.',
      );
    });

    it('should render InVision field', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.find(S.CheckboxField).at(0).containsAllMatchingElements([
        <S.Icon><img alt="InVision" src="./invision.svg" /></S.Icon>,
        <S.Label>InVision</S.Label>,
        <S.Description>Boards and prototypes</S.Description>,
      ])).toBe(true);
    });

    it('should render GitHub field', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.find(S.CheckboxField).at(1).containsAllMatchingElements([
        <S.Icon><img alt="GitHub" src="./github.svg" /></S.Icon>,
        <S.Label>GitHub</S.Label>,
        <S.Description>Commits data and history</S.Description>,
      ])).toBe(true);
    });

    it('should render Slack field', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.find(S.CheckboxField).at(2).containsAllMatchingElements([
        <S.Icon><img alt="Slack" src="./slack.svg" /></S.Icon>,
        <S.Label>Slack</S.Label>,
        <S.Description>Messages and channels</S.Description>,
      ])).toBe(true);
    });

    it('should render Mailchimp field', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.find(S.CheckboxField).at(3).containsAllMatchingElements([
        <S.Icon><img alt="Mailchimp" src="./mailchimp.svg" /></S.Icon>,
        <S.Label>Mailchimp</S.Label>,
        <S.Description>Subscribers list</S.Description>,
      ])).toBe(true);
    });

    it('should render Twitter field', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.find(S.CheckboxField).at(4).containsAllMatchingElements([
        <S.Icon><img alt="Twitter" src="./twitter.svg" /></S.Icon>,
        <S.Label>Twitter</S.Label>,
        <S.Description>Tweets data</S.Description>,
      ])).toBe(true);
    });

    it('should render Medium field', () => {
      const component = shallow(
        <Settings.Integrations />,
      );

      expect(component.find(S.CheckboxField).at(5).containsAllMatchingElements([
        <S.Icon><img alt="Medium" src="./medium.svg" /></S.Icon>,
        <S.Label>Medium</S.Label>,
        <S.Description>Followers count</S.Description>,
      ])).toBe(true);
    });
  });

  describe('Notifications', () => {
    it('should render a heading', () => {
      const component = shallow(
        <Settings.Notifications />,
      );

      expect(component.props().heading).toBe('Notifications');
    });

    it('should render help text', () => {
      const component = shallow(
        <Settings.Notifications />,
      );

      expect(component.find(S.Legend).text()).toBe(
        'Control your notification and auto-follow settings.',
      );
    });

    it('should render e-mail notification field', () => {
      const component = shallow(
        <Settings.Notifications />,
      );

      expect(component.find(S.SwitchField).at(0).containsAllMatchingElements([
        <S.Label>Email Notification</S.Label>,
        <Input.Switch />,
      ])).toBe(true);
    });

    it('should render monthly reports field', () => {
      const component = shallow(
        <Settings.Notifications />,
      );

      expect(component.find(S.SwitchField).at(1).containsAllMatchingElements([
        <S.Label>Monthly Reports</S.Label>,
        <Input.Switch />,
      ])).toBe(true);
    });

    it('should render monthly reports field', () => {
      const component = shallow(
        <Settings.Notifications />,
      );

      expect(component.find(S.SwitchField).at(2).containsAllMatchingElements([
        <S.Label>Push Notification</S.Label>,
        <Input.Switch />,
      ])).toBe(true);
    });

    it('should render quarter reports field', () => {
      const component = shallow(
        <Settings.Notifications />,
      );

      expect(component.find(S.SwitchField).at(3).containsAllMatchingElements([
        <S.Label>Quarter Reports</S.Label>,
        <Input.Switch />,
      ])).toBe(true);
    });
  });
});
