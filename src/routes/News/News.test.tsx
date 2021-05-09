import React from 'react';
import { shallow } from 'enzyme';

import News from './News';

it('renders correctly', () => {
  const wrapper = shallow(<News />);

  expect(wrapper).toMatchSnapshot();
});
