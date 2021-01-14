import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './SocialLink.css';

type Props = JSX.IntrinsicElements['a'] & {
  social: 'facebook' | 'twitter' | 'twitch' | 'google';
  to: string;
};

const SocialLink: FC<Props> = ({ className, style, to, social }) => {
  const baseStyle = 'social-link';
  const classNames = className ? `${baseStyle}  ${social} ${className}` : `${baseStyle} ${social}`;

  return (
    <Link className={classNames} to={to} style={style}>
      <i className={`fab fa-${social}`} />
    </Link>
  );
};

export default SocialLink;
