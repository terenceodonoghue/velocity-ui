import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import Profile from './Profile';
import * as S from './Profile.styles';

describe('Profile', () => {
  describe('Sidebar', () => {
    const props = {
      bio: faker.lorem.paragraph(),
      email: faker.internet.email(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      name: faker.name.findName(),
      phone: faker.phone.phoneNumberFormat(2),
      title: 'Sr. Customer Manager',
      roles: 'Administrator, Moderator',
      srcUrl: faker.image.avatar(),
    };

    it('should render bio', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.DetailsTerm>Bio</S.DetailsTerm>)
        && component.contains(<S.DetailsDescription>{props.bio}</S.DetailsDescription>),
      ).toBe(true);
    });

    it('should render email', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.DetailsTerm>E-mail</S.DetailsTerm>)
        && component.contains(<S.DetailsDescription>{props.email}</S.DetailsDescription>),
      ).toBe(true);
    });

    it('should render location', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.DetailsTerm>Location</S.DetailsTerm>)
        && component.contains(<S.DetailsDescription>{props.location}</S.DetailsDescription>),
      ).toBe(true);
    });

    it('should render name', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.Name>{props.name}</S.Name>),
      ).toBe(true);
    });

    it('should render phone', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.DetailsTerm>Phone</S.DetailsTerm>)
        && component.contains(<S.DetailsDescription>{props.phone}</S.DetailsDescription>),
      ).toBe(true);
    });

    it('should render title', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.Title>{props.title}</S.Title>),
      ).toBe(true);
    });

    it('should render roles', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.DetailsTerm>Role</S.DetailsTerm>)
        && component.contains(<S.DetailsDescription>{props.roles}</S.DetailsDescription>),
      ).toBe(true);
    });

    it('should render profile picture', () => {
      const component = shallow(
        <Profile.Sidebar {...props} />,
      );

      expect(
        component.contains(<S.ProfilePicture src={props.srcUrl} />),
      ).toBe(true);
    });
  });
});
