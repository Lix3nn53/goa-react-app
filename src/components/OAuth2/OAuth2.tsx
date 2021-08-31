import React, { FC, useEffect, useState } from 'react';

import './OAuth2.css';
import Button from '../Button';

import { openSignInWindow } from './PopupHandler';

export type Props = JSX.IntrinsicElements['button'] & {
  provider: 'minecraft' | 'facebook' | 'discord' | 'twitch' | 'google';
  button?: boolean;
  authUrl: string;
  parameters: any;
  onCallback: any;
  disabled: boolean;
  setDisabled: { (param: boolean): void };
};

const SocialLink: FC<Props> = ({
  className,
  style,
  provider,
  button,
  authUrl,
  parameters,
  onCallback,
  disabled,
  setDisabled,
  children,
}) => {
  const [paramaterString, setParamaterString] = useState('');

  const baseStyle = 'oauth-link';
  const classNames = className
    ? `${baseStyle} ${provider} ${className}`
    : `${baseStyle} ${provider}`;

  // create paramater string to use at url from paramaters obj
  useEffect(() => {
    let paramatersTmp = '';

    const keys = Object.keys(parameters);

    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < keys.length; i++) {
      let prefix = '&';
      if (i === 0) prefix = '?';

      paramatersTmp += `${prefix}${keys[i]}=${parameters[keys[i]]}`;
    }

    setParamaterString(paramatersTmp);

    console.log(paramaterString);
  }, [parameters, paramaterString]);

  const getIcon = () => {
    switch (provider) {
      case 'minecraft':
        return <i className="fab fa-microsoft" />;
      case 'facebook':
        return <i className="fab fa-facebook" />;
      case 'discord':
        return <i className="fab fa-discord" />;
      case 'twitch':
        return <i className="fab fa-twitch" />;
      case 'google':
        return <i className="fab fa-google" />;
      default:
        return <i className="fab fa-react" />;
    }
  };

  if (button) {
    return (
      <Button
        primary
        type="button"
        style={style}
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          openSignInWindow(authUrl + paramaterString, 'oauth', onCallback);
        }}
      >
        {getIcon()}
        {children}
      </Button>
    );
  }

  return (
    <button
      className={classNames}
      style={style}
      type="button"
      disabled={disabled}
      onClick={() => {
        setDisabled(true);
        openSignInWindow(authUrl + paramaterString, 'oauth', onCallback);
      }}
    >
      {getIcon()}
      {children}
    </button>
  );
};

export default SocialLink;
