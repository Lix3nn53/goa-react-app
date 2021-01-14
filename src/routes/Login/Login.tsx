import React, { FunctionComponent } from 'react';

import './Login.css';
import Card from '../../components/Card';
import Form from '../../components/Form';
import SocialLink from '../../components/SocialLink';

const Login: FunctionComponent = () => (
  <div className="flex-container login-page">
    <Card header={<p className="form-title">Account Login</p>} style={{ maxWidth: '484px' }}>
      <Form
        rowArray={[
          [{ id: 'login-email', name: 'Email', type: 'email' }],
          [{ id: 'login-password', name: 'Password', type: 'password' }],
          [{ id: 'login-remember', name: 'Remember Me', type: 'checkbox' }],
        ]}
        buttonText="Login Now!"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      />
      <p className="lined-text">Login with your Social Account</p>
      <div className="flex-container social-links">
        <SocialLink social="facebook" to="/login" />
        <SocialLink social="twitter" to="/login" />
        <SocialLink social="twitch" to="/login" />
        <SocialLink social="google" to="/login" />
      </div>
    </Card>
  </div>
);

export default Login;
