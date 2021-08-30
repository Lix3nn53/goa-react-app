import React, { FC } from 'react';

import './Login.css';
import LoginForm from './LoginForm';

import Card from '../../components/Card';
import Strategies from '../../components/OAuth2/Strategies';

const Login: FC = () => {
  return (
    <div className="flex-container login-page">
      <Card header={<h3 className="form-title">Account Login</h3>} width="small">
        <Strategies />
      </Card>
    </div>
  );
};

export default Login;
