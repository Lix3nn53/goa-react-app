import React from 'react';
import { shallow } from 'enzyme';

import Card from './CardWide';

it('renders correctly primary button', () => {
  const wrapper = shallow(
    <Card header="Primary" image="">
      Primary Card
    </Card>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(
    <Card header="Secondary" image="">
      Secondary Card
    </Card>,
  );

  expect(wrapper).toMatchSnapshot();
});
