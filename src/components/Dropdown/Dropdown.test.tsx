import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './Dropdown';

it('renders correctly Dropdown', () => {
  const wrapper = shallow(
    <Dropdown
      options={['one', 'two', 'three']}
      handleChange={(value: string) => {
        console.log(`new value ${value}`);
      }}
    >
      Dropdown
    </Dropdown>,
  );

  expect(wrapper).toMatchSnapshot();
});
