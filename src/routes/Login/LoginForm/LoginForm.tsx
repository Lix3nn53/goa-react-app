import React, { FunctionComponent } from 'react';

import Form from '../../../components/Form';

const LoginForm: FunctionComponent = () => (
  <Form
    rowArray={[
      [{ id: 'login-email', name: 'Email', type: 'email' }],
      [{ id: 'login-password', name: 'Password', type: 'password' }],
      [{ id: 'login-remember', name: 'Remember Me', type: 'checkbox' }],
    ]}
    buttonText="Login Now!"
    onSubmit={(event) => {
      event.preventDefault();
    }}
  />
);

export default LoginForm;
