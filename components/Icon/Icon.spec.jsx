/** @jsx jsx */
import { jsx } from '@emotion/core';
import faker from 'faker';
import * as Icons from './Icon';

describe('Icon', () => {
  describe('Analytics', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Analytics />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(
        withTheme(<Icons.Analytics title={title} />),
      ).root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });

  describe('Chat', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Chat />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(withTheme(<Icons.Chat title={title} />))
        .root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });
  describe('Dashboard', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Dashboard />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(
        withTheme(<Icons.Dashboard title={title} />),
      ).root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });

  describe('Map', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Map />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(withTheme(<Icons.Map title={title} />))
        .root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });

  describe('Messages', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Messages />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(
        withTheme(<Icons.Messages title={title} />),
      ).root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });

  describe('Notifications', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Notifications />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(
        withTheme(<Icons.Notifications title={title} />),
      ).root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });

  describe('Service', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Service />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(
        withTheme(<Icons.Service title={title} />),
      ).root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });

  describe('Settings', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Settings />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(
        withTheme(<Icons.Settings title={title} />),
      ).root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });

  describe('Vehicles', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(withTheme(<Icons.Vehicles />)).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders a title', () => {
      const title = faker.lorem.word();

      const instance = renderer.create(
        withTheme(<Icons.Vehicles title={title} />),
      ).root;

      expect(instance.findByType('title').props.children).toEqual(title);
    });
  });
});
