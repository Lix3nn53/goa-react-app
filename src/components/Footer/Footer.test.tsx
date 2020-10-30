import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

it('renders correctly footer', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});
