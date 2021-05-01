import React from 'react';
import { shallow } from 'enzyme';

import Guide from './Guide';

it('renders correctly', () => {
  const wrapper = shallow(<Guide />);

  expect(wrapper).toMatchSnapshot();
});
