import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

it('renders correctly', () => {
  const wrapper = shallow(<Profile />);

  expect(wrapper).toMatchSnapshot();
});
