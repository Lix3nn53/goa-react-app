import React from 'react';
import { shallow } from 'enzyme';

import PageNotFound from './PageNotFound';

it('renders correctly', () => {
  const wrapper = shallow(<PageNotFound />);

  expect(wrapper).toMatchSnapshot();
});
