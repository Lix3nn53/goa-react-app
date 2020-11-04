import React from 'react';
import { shallow } from 'enzyme';

import Register from './Register';

it('renders correctly', () => {
  const wrapper = shallow(<Register />);

  expect(wrapper).toMatchSnapshot();
});
