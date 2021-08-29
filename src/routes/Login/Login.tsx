import React, { FC, useState } from 'react';

import './Login.css';
import LoginForm from './LoginForm';

import Card from '../../components/Card';
import Strategies from '../../components/OAuth2/Strategies';

const Login: FC = () => {
  const [loginsDisabled, setLoginsDisabled] = useState(false);

  return (
    <div className="flex-container login-page">
      <Card header={<h3 className="form-title">Account Login</h3>} width="small">
        <Strategies disabled={loginsDisabled} setDisabled={setLoginsDisabled} />
      </Card>
    </div>
  );
};

export default Login;
