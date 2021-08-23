import React, { FunctionComponent } from 'react';

import Card from '../../components/Card';

import './Register.css';
import RegisterForm from './RegisterForm';

const Register: FunctionComponent = () => (
  <div className="flex-container register-page">
    <Card header={<h3 className="form-title">Create your Account!</h3>} width="small">
      <RegisterForm />
    </Card>
  </div>
);

export default Register;
