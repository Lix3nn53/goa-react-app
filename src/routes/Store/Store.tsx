import React, { FunctionComponent } from 'react';

import Card from '../../components/Card';

import './Store.css';

const Register: FunctionComponent = () => (
  <div className="flex-container register-page">
    <Card header={<p className="form-title">Store!</p>} width="small">
      <p>Welcome to store</p>
    </Card>
  </div>
);

export default Register;
