import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import Header from './Header';

it('renders correctly header', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
