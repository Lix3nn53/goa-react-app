import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('renders correctly header', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
