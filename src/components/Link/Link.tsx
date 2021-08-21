import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Link.css';

export type Props = JSX.IntrinsicElements['a'] & {
  cta?: boolean;
  secondary?: boolean;
  large?: boolean;
  to: string;
};

const CustomLink: FC<Props> = ({ className, children, style, to, cta, secondary, large, rel }) => {
  const baseStyle = 'Link';
  const linkStyle = cta ? `variant--Cta` : `variant--Link`;
  const linkStyle2 = secondary ? `secondary` : ``;
  const linkStyle3 = large ? `variant--Large` : ``;
  const classNames = `${baseStyle}  ${linkStyle} ${linkStyle2} ${linkStyle3} ${className}`;

  return (
    <Link className={classNames} to={to} style={style} rel={rel}>
      {children}
    </Link>
  );
};

export default CustomLink;
