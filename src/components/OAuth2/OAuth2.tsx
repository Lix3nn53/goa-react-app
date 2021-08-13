import React, { FC, useEffect, useState } from 'react';
import { openSignInWindow } from './PopupHandler';

import './SocialLink.css';

export type Props = JSX.IntrinsicElements['button'] & {
  social: 'facebook' | 'twitter' | 'twitch' | 'google';
  authUrl: string;
  parameters: any;
  onCallback: any;
  disabled: boolean;
  setDisabled: { (param: boolean): void };
};

const SocialLink: FC<Props> = ({
  className,
  style,
  social,
  authUrl,
  parameters,
  onCallback,
  disabled,
}) => {
  const [paramaterString, setParamaterString] = useState('');

  const baseStyle = 'social-link';
  const classNames = className ? `${baseStyle} ${social} ${className}` : `${baseStyle} ${social}`;

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
      onClick={() => openSignInWindow(authUrl + paramaterString, 'oauth', onCallback)}
    >
      <i className={`fab fa-${social}`} />
    </button>
  );
};

export default SocialLink;
