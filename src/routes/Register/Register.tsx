import React, { FunctionComponent } from 'react';

import Card from '../../components/Card';

import './Register.css';
import RegisterForm from './RegisterForm';

const Register: FunctionComponent = () => (
  <div className="flex-container register-page">
    <Card header={<p className="form-title">Create your Account!</p>} style={{ maxWidth: '484px' }}>
      <RegisterForm />
    </Card>
  </div>
);

export default Register;
