import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

it('renders correctly primary button', () => {
  const wrapper = shallow(<Form>Primary Form</Form>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(<Form>Secondary Form</Form>);

  expect(wrapper).toMatchSnapshot();
});
