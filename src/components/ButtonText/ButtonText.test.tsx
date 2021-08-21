import React from 'react';
import { shallow } from 'enzyme';

import ButtonText from './ButtonText';

it('renders correctly primary button', () => {
  const wrapper = shallow(<ButtonText type="button">Primary Button</ButtonText>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(<ButtonText type="button">Secondary Button</ButtonText>);

  expect(wrapper).toMatchSnapshot();
});
