import React, { FC, useState } from 'react';
import OAuth2 from '../OAuth2';
import AuthAPI from '../../../api/AuthAPI';

const OAuth2Strategies: FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const renderError = () => {
    if (error === '') return <span />;

    return (
      <p className="error" style={{ textAlign: 'center' }}>
        {error}
      </p>
    );
  };

  return (
    <div className="oauth-strategies">
      {renderError()}
      <div className="oauth-strategies-top flex-container column">
        <p style={{ flex: '1', paddingBottom: '20px', fontStyle: 'italic' }}>
          Login with microsoft account which owns minecraft to directly link your minecraft account.
        </p>
        <OAuth2
          provider="minecraft"
          button
          className="button-primary flex-one"
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
            const response = await AuthAPI.minecraftAuth(params);

            if (!response.error) {
              window.location.href = '/';
            } else {
              setDisabled(false);
              setError(response.error);
            }
          }}
        >
          {' '}
          Login With Microsoft
        </OAuth2>
      </div>
      <p className="lined-text">Login with alternative Social Account</p>
      <div className="oauth-strategies-bottom flex-container column">
        <p style={{ flex: '1', paddingBottom: '20px', fontStyle: 'italic' }}>
          You will have to link your minecraft account manually with in-game command.
        </p>
        <div className="oauth-badges flex-container">
          <OAuth2
            provider="facebook"
            authUrl=""
            parameters={{}}
            disabled
            setDisabled={setDisabled}
            onCallback={() => setDisabled(false)}
          />
          <OAuth2
            provider="discord"
            authUrl="https://discord.com/api/oauth2/authorize"
            parameters={{
              client_id: process.env.REACT_APP_DISCORD_CLIENT_ID,
              redirect_uri: process.env.REACT_APP_OAUTH2_REDIRECT_URI,
              response_type: 'code',
              scope: 'identify email',
              prompt: 'select_account',
              include_granted_scopes: true,
              state: 'myteststate123',
            }}
            disabled={disabled}
            setDisabled={setDisabled}
            onCallback={async (params: any) => {
              console.log('Discord', params);
              const response = await AuthAPI.discordAuth(params);

              if (!response.error) {
                window.location.href = '/';
              } else {
                setDisabled(false);
                setError(response.error);
              }
            }}
          />
          <OAuth2
            provider="twitch"
            authUrl="https://id.twitch.tv/oauth2/authorize"
            parameters={{
              client_id: process.env.REACT_APP_TWITCH_CLIENT_ID,
              redirect_uri: process.env.REACT_APP_OAUTH2_REDIRECT_URI,
              response_type: 'code',
              scope: 'user:read:email',
              prompt: 'select_account',
              include_granted_scopes: true,
              state: 'myteststate123',
            }}
            disabled={disabled}
            setDisabled={setDisabled}
            onCallback={async (params: any) => {
              console.log('Discord', params);
              const response = await AuthAPI.twitchAuth(params);

              if (!response.error) {
                window.location.href = '/';
              } else {
                setDisabled(false);
                setError(response.error);
              }
            }}
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
              const response = await AuthAPI.googleAuth(params);

              if (!response.error) {
                window.location.href = '/';
              } else {
                setDisabled(false);
                setError(response.error);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OAuth2Strategies;
