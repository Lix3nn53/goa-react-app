import React from 'react';
import { shallow } from 'enzyme';

import GuideSubrouteSubroute from './GuideSubrouteSubroute';

it('renders correctly', () => {
  const wrapper = shallow(<GuideSubrouteSubroute />);

  expect(wrapper).toMatchSnapshot();
});
