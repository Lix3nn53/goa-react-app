import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Link.scss';

type Props = JSX.IntrinsicElements['a'] & {
  cta?: boolean;
  to: string;
};

const CustomLink: FC<Props> = ({ cta, className, children, to }) => {
  const baseStyle = 'Link';
  const linkStyle = cta ? `variant--Cta` : `variant--Link`;
  const classNames = className
    ? `${baseStyle}  ${linkStyle} ${className}`
    : `${baseStyle} ${linkStyle}`;

  return (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
