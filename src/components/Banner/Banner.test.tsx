import React from 'react';
import { shallow } from 'enzyme';

import Banner from './Banner';

it('renders correctly primary button', () => {
  const wrapper = shallow(<Banner>Primary Card</Banner>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(<Banner>Secondary Card</Banner>);

  expect(wrapper).toMatchSnapshot();
});
