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
        disabled
        setDisabled={setDisabled}
        onCallback={() => setDisabled(false)}
      />
      <OAuth2
        provider="twitter"
        authUrl=""
        parameters={{}}
        disabled
        setDisabled={setDisabled}
        onCallback={() => setDisabled(false)}
      />
      <OAuth2
        provider="twitch"
        authUrl=""
        parameters={{}}
        disabled
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

          if (!authRes.error) {
            window.location.href = '/';
          } else {
            setDisabled(false);
          }
        }}
      />
      <OAuth2
        provider="minecraft"
        icon="fas fa-cube"
        authUrl="https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize"
        parameters={{
          client_id: process.env.REACT_APP_MICROSOFT_CLIENT_ID,
          redirect_uri: process.env.REACT_APP_OAUTH2_REDIRECT_URI,
          response_type: 'code',
          response_mode: 'query',
          scope: 'Xboxlive.signin Xboxlive.offline_access',
          prompt: 'select_account',
          state: 'myteststate123',
        }}
        disabled={disabled}
        setDisabled={setDisabled}
        onCallback={async (params: any) => {
          console.log('Minecraft', params);
          const authRes = await AuthAPI.minecraftAuth(params);

          if (!authRes.error) {
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
