import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './Dropdown';

it('renders correctly Dropdown', () => {
  const wrapper = shallow(
    <Dropdown text="text" elements={[]} keys={[]}>
      Dropdown
    </Dropdown>,
  );

  expect(wrapper).toMatchSnapshot();
});
