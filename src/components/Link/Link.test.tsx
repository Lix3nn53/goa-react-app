import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

it('renders correctly Link Cta', () => {
  const wrapper = shallow(
    <Link cta to="/register">
      Link Cta
    </Link>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Link default', () => {
  const wrapper = shallow(<Link to="/login">Link default</Link>);

  expect(wrapper).toMatchSnapshot();
});
