import React from 'react';
import { shallow } from 'enzyme';

import SocialLink from './OAuth2';

it('renders correctly SocialLink Cta', () => {
  const wrapper = shallow(
    <SocialLink
      provider="facebook"
      authUrl=""
      parameters={{}}
      onCallback={() => {}}
      disabled={false}
      setDisabled={(param: boolean) => {}}
    >
      SocialLink Cta
    </SocialLink>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly SocialLink default', () => {
  const wrapper = shallow(
    <SocialLink
      provider="facebook"
      authUrl=""
      parameters={{}}
      onCallback={() => {}}
      disabled={false}
      setDisabled={(param: boolean) => {}}
    >
      SocialLink default
    </SocialLink>,
  );

  expect(wrapper).toMatchSnapshot();
});
