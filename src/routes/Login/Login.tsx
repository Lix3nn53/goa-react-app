import React, { FC, useState } from 'react';

import './Login.css';
import LoginForm from './LoginForm';

import Card from '../../components/Card';
import OAuth2 from '../../components/OAuth2';

const Login: FC = () => {
  const [loginsDisabled, setLoginsDisabled] = useState(false);

  return (
    <div className="flex-container login-page">
      <Card header={<p className="form-title">Account Login</p>} style={{ maxWidth: '484px' }}>
        <LoginForm disabled={loginsDisabled} />
        <p className="lined-text">Login with your Social Account</p>
        <div className="flex-container social-links">
          <OAuth2
            social="facebook"
            authUrl=""
            parameters={{}}
            disabled={loginsDisabled}
            setDisabled={setLoginsDisabled}
            onCallback={() => {}}
          />
          <OAuth2
            social="twitter"
            authUrl=""
            parameters={{}}
            disabled={loginsDisabled}
            setDisabled={setLoginsDisabled}
            onCallback={() => {}}
          />
          <OAuth2
            social="twitch"
            authUrl=""
            parameters={{}}
            disabled={loginsDisabled}
            setDisabled={setLoginsDisabled}
            onCallback={() => {}}
          />
          <OAuth2
            social="google"
            authUrl=""
            parameters={{}}
            disabled={loginsDisabled}
            setDisabled={setLoginsDisabled}
            onCallback={() => {}}
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
