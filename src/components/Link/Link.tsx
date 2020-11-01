import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Link.scss';

type Props = JSX.IntrinsicElements['a'] & {
  cta?: boolean;
  large?: boolean;
  to: string;
};

const CustomLink: FC<Props> = ({ className, children, to, cta, large }) => {
  const baseStyle = 'Link';
  const linkStyle = cta ? `variant--Cta` : `variant--Link`;
  const linkStyle2 = large ? `variant--Large` : ``;
  const classNames = className
    ? `${baseStyle}  ${linkStyle} ${linkStyle2} ${className}`
    : `${baseStyle} ${linkStyle} ${linkStyle2}`;

  return (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
