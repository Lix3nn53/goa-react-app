import React, { FC, useState } from 'react';
import OAuth2 from '../OAuth2';
import AuthAPI from '../../../api/AuthAPI';

export type Props = {
  disabled: boolean;
  setDisabled: { (param: boolean): void };
};

const OAuth2Strategies: FC<Props> = ({ disabled, setDisabled }) => {
  return (
    <div className="flex-container oauth-links">
      <OAuth2
        provider="facebook"
        authUrl=""
        parameters={{}}
        disabled={disabled}
        setDisabled={setDisabled}
        onCallback={() => setDisabled(false)}
      />
      <OAuth2
        provider="twitter"
        authUrl=""
        parameters={{}}
        disabled={disabled}
        setDisabled={setDisabled}
        onCallback={() => setDisabled(false)}
      />
      <OAuth2
        provider="twitch"
        authUrl=""
        parameters={{}}
        disabled={disabled}
        setDisabled={setDisabled}
        onCallback={() => setDisabled(false)}
      />
      <OAuth2
        provider="google"
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
        disabled={disabled}
        setDisabled={setDisabled}
        onCallback={async (params: any) => {
          console.log('Google', params);
          const authRes = await AuthAPI.googleAuth(params);

          if (authRes.success) {
            window.location.href = '/';
          } else {
            setDisabled(false);
          }
        }}
      />
    </div>
  );
};

export default OAuth2Strategies;
