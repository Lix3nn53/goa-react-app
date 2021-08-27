import React, { FC, useEffect, useState } from 'react';
import { openSignInWindow } from './PopupHandler';

import './OAuth2.css';

export type Props = JSX.IntrinsicElements['button'] & {
  provider: 'facebook' | 'twitter' | 'twitch' | 'google' | 'minecraft';
  icon?: string;
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
  icon,
  authUrl,
  parameters,
  onCallback,
  disabled,
  setDisabled,
}) => {
  const [paramaterString, setParamaterString] = useState('');

  const baseStyle = 'oauth-link';
  const classNames = className
    ? `${baseStyle} ${provider} ${className}`
    : `${baseStyle} ${provider}`;
  const iconClass = icon || `fab fa-${provider}`;

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
      <i className={iconClass} />
    </button>
  );
};

export default SocialLink;
