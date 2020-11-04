import React from 'react';
import { shallow } from 'enzyme';

import TwitterTimeline from './TwitterTimeline';

it('renders correctly', () => {
  const wrapper = shallow(<TwitterTimeline profile="Minecraft" />);

  expect(wrapper).toMatchSnapshot();
});
