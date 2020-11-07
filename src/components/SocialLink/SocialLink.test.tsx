import React from 'react';
import { shallow } from 'enzyme';

import SocialLink from './SocialLink';

it('renders correctly SocialLink Cta', () => {
  const wrapper = shallow(
    <SocialLink social="facebook" to="/register">
      SocialLink Cta
    </SocialLink>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly SocialLink default', () => {
  const wrapper = shallow(
    <SocialLink social="facebook" to="/login">
      SocialLink default
    </SocialLink>,
  );

  expect(wrapper).toMatchSnapshot();
});
