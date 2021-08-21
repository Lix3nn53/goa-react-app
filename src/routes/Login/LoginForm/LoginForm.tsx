import React, { FC } from 'react';

import Form from '../../../components/Form';

export type Props = {
  disabled?: boolean;
};

const LoginForm: FC<Props> = ({ disabled }) => (
  <Form
    rowArray={[
      [{ id: 'login-email', name: 'Email', type: 'email' }],
      [{ id: 'login-password', name: 'Password', type: 'password' }],
      [{ id: 'login-remember', name: 'Remember Me', type: 'checkbox' }],
    ]}
    buttonText="Login Now!"
    onSubmit={(event) => {}}
    disabled={disabled}
  />
);

export default LoginForm;
