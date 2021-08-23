import React from 'react';
import { shallow } from 'enzyme';

import Player from './Player';

it('renders correctly', () => {
  const wrapper = shallow(<Player />);

  expect(wrapper).toMatchSnapshot();
});
