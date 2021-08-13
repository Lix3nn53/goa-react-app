import React, { FC, useState } from 'react';
import OAuth2 from '../OAuth2';
import AuthAPI from '../../../api/AuthAPI';

const OAuth2Strategies: FC = () => {
  const [loginsDisabled, setLoginsDisabled] = useState(false);

  return (
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
        authUrl="https://accounts.google.com/o/oauth2/v2/auth"
        parameters={{
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          redirect_uri: process.env.REACT_APP_OAUTH2_REDIRECT_URI,
          response_type: 'code',
          scope: 'profile email',
          prompt: 'select_account',
          include_granted_scopes: true,
          state: 'myteststate123',
        }}
        disabled={loginsDisabled}
        setDisabled={setLoginsDisabled}
        onCallback={async (params: any) => {
          console.log('Google', params);
          const authRes = await AuthAPI.googleAuth(params);

          if (authRes.success) {
            window.location.href = '/';
          }
        }}
      />
    </div>
  );
};

export default OAuth2Strategies;
