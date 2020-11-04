import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module).add('Register', () => (
  <Form
    rowArray={[
      [{ id: 'register-email', name: 'Email', type: 'email' }],
      [{ id: 'register-nickname', name: 'Nickname', type: 'text' }],
      [{ id: 'register-password', name: 'Password', type: 'password' }],
      [{ id: 'register-repeat-password', name: 'Repeat Password', type: 'password' }],
    ]}
    buttonText="Register Now!"
    onSubmit={(event) => {
      event.preventDefault();
    }}
  />
));
