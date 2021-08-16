import React from 'react';
import { shallow } from 'enzyme';

import TermsOfService from './TermsOfService';

it('renders correctly', () => {
  const wrapper = shallow(<TermsOfService />);

  expect(wrapper).toMatchSnapshot();
});
