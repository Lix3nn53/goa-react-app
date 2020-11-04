import React from 'react';
import { shallow } from 'enzyme';

import Banner from './Banner';

it('renders correctly primary banner', () => {
  const wrapper = shallow(
    <Banner icon="icon" title="title">
      Primary Card
    </Banner>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary banner', () => {
  const wrapper = shallow(
    <Banner icon="icon" title="title">
      Secondary Card
    </Banner>,
  );

  expect(wrapper).toMatchSnapshot();
});
