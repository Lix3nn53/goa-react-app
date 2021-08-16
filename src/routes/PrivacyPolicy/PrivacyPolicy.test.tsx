import React from 'react';
import { shallow } from 'enzyme';

import PrivacyPolicy from './PrivacyPolicy';

it('renders correctly', () => {
  const wrapper = shallow(<PrivacyPolicy />);

  expect(wrapper).toMatchSnapshot();
});
