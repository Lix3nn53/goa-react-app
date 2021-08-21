import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

it('renders correctly Register Form', () => {
  const wrapper = shallow(
    <Form
      rowArray={[
        [{ id: 'register-email', name: 'Email', type: 'email' }],
        [{ id: 'register-nickname', name: 'Nickname', type: 'text' }],
        [{ id: 'register-password', name: 'Password', type: 'password' }],
        [{ id: 'register-repeat-password', name: 'Repeat Password', type: 'password' }],
      ]}
      buttonText="Register Now!"
      onSubmit={(event) => {}}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
