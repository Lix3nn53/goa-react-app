import React from 'react';
import { shallow } from 'enzyme';

import Gallery from './Gallery';

it('renders correctly primary button', () => {
  const wrapper = shallow(<div></div>);

  expect(wrapper).toMatchSnapshot();
});
