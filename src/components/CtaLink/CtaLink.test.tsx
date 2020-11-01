import React from 'react';
import { shallow } from 'enzyme';

import CtaLink from './CtaLink';

it('renders correctly CtaLink button', () => {
  const wrapper = shallow(
    <CtaLink button to="/login">
      CtaLink button
    </CtaLink>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly CtaLink link', () => {
  const wrapper = shallow(<CtaLink to="/login">CtaLink link</CtaLink>);

  expect(wrapper).toMatchSnapshot();
});
