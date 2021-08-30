import React, { FC, useEffect, useState } from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faMicrosoft,
  faFacebook,
  faDiscord,
  faTwitch,
  faGoogle,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

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
        return faMicrosoft;
      case 'facebook':
        return faFacebook;
      case 'discord':
        return faDiscord;
      case 'twitch':
        return faTwitch;
      case 'google':
        return faGoogle;
      default:
        return faReact;
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
        <FontAwesomeIcon icon={getIcon()} size="lg" />
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
      <FontAwesomeIcon icon={getIcon()} />
      {children}
    </button>
  );
};

export default SocialLink;
