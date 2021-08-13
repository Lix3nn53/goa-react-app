import React, { FC, useState } from 'react';

import './Login.css';
import LoginForm from './LoginForm';

import Card from '../../components/Card';
import Strategies from '../../components/OAuth2/Strategies';

const Login: FC = () => {
  const [loginsDisabled, setLoginsDisabled] = useState(false);

  return (
    <div className="flex-container login-page">
      <Card header={<p className="form-title">Account Login</p>} style={{ maxWidth: '484px' }}>
        <LoginForm disabled={loginsDisabled} />
        <p className="lined-text">Login with your Social Account</p>
        <Strategies />
      </Card>
    </div>
  );
};

export default Login;
