import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

it('renders correctly primary button', () => {
  const wrapper = shallow(<div></div>);

  expect(wrapper).toMatchSnapshot();
});
