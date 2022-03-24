import React from 'react';
import { shallow } from 'enzyme';

import Map from './Map';

it('renders correctly', () => {
  const wrapper = shallow(<Map />);

  expect(wrapper).toMatchSnapshot();
});
