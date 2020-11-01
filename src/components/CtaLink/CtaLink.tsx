import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './CtaLink.scss';

type Props = JSX.IntrinsicElements['button'] & {
  button?: boolean;
  to: string;
};

const CtaLink: FC<Props> = ({ button, className, children, to }) => {
  const baseStyle = 'CtaLink';
  const linkStyle = button ? `variant--Button` : `variant--Link`;
  const classNames = className
    ? `${baseStyle}  ${linkStyle} ${className}`
    : `${baseStyle} ${linkStyle}`;

  return (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );
};

export default CtaLink;
