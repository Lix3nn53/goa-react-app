import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders correctly primary button', () => {
  const wrapper = shallow(
    <Button primary type="button">
      Primary Button
    </Button>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(<Button type="button">Secondary Button</Button>);

  expect(wrapper).toMatchSnapshot();
});
