import React from 'react';
import { shallow } from 'enzyme';

import Switch from './Switch';

it('renders correctly Switch Cta', () => {
  const wrapper = shallow(<Switch id="test">Switch Cta</Switch>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Switch default', () => {
  const wrapper = shallow(<Switch id="test">Switch default</Switch>);

  expect(wrapper).toMatchSnapshot();
});
