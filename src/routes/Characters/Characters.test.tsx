import React from 'react';
import { shallow } from 'enzyme';

import Characters from './Characters';

it('renders correctly', () => {
  const wrapper = shallow(<Characters />);

  expect(wrapper).toMatchSnapshot();
});
