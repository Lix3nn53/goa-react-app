import React from 'react';
import { shallow } from 'enzyme';

import Subrouter from './Subrouter';

it('renders correctly Subrouter', () => {
  const wrapper = shallow(
    <Subrouter
      routes={[
        { name: 'One', id: 'one' },
        { name: 'Two', id: 'two' },
      ]}
    >
      Subrouter
    </Subrouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
