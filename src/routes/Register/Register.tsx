import React, { FunctionComponent } from 'react';

import './Register.scss';
import Card from '../../components/Card';
import Form from '../../components/Form';

const Register: FunctionComponent = () => (
  <div className="flex-container register-page">
    <Card header={<p className="form-title">Create your Account!</p>} style={{ maxWidth: '484px' }}>
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
    </Card>
  </div>
);

export default Register;
