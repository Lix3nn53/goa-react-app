import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

it('renders correctly primary button', () => {
  const wrapper = shallow(<Card>Primary Card</Card>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(<Card>Secondary Card</Card>);

  expect(wrapper).toMatchSnapshot();
});
