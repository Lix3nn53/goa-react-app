import React from 'react';
import { shallow } from 'enzyme';

import GuideSubroute from './GuideSubroute';

it('renders correctly', () => {
  const wrapper = shallow(<GuideSubroute />);

  expect(wrapper).toMatchSnapshot();
});
