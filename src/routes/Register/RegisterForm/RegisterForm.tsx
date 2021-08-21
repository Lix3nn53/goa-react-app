import React, { FunctionComponent } from 'react';

import Form from '../../../components/Form';

const RegisterForm: FunctionComponent = () => (
  <Form
    rowArray={[
      [{ id: 'register-email', name: 'Email', type: 'email' }],
      [{ id: 'register-nickname', name: 'Nickname', type: 'text' }],
      [{ id: 'register-password', name: 'Password', type: 'password' }],
      [{ id: 'register-repeat-password', name: 'Repeat Password', type: 'password' }],
    ]}
    buttonText="Register Now!"
    buttonSecondary
    onSubmit={(event) => {}}
  />
);

export default RegisterForm;
