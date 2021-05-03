import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';

it('renders correctly primary button', () => {
  const wrapper = shallow(
    <Table
      cells={[
        ['a', 'a'],
        ['a', 'a'],
      ]}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
