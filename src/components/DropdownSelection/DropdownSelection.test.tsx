import React from 'react';
import { shallow } from 'enzyme';

import DropdownSelection from './DropdownSelection';

it('renders correctly DropdownSelection', () => {
  const wrapper = shallow(
    <DropdownSelection
      options={['one', 'two', 'three']}
      handleChange={(value: string) => {
        console.log(`new value ${value}`);
      }}
    >
      DropdownSelection
    </DropdownSelection>,
  );

  expect(wrapper).toMatchSnapshot();
});
