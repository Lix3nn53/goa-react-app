import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Link.css';

export type Props = JSX.IntrinsicElements['a'] & {
  to: string;
  cta?: boolean;
  secondary?: boolean;
  large?: boolean;
  largeSlim?: boolean;
  magical?: boolean;
};

const CustomLink: FC<Props> = ({
  className,
  children,
  style,
  to,
  cta,
  secondary,
  large,
  largeSlim,
  magical,
  rel,
}) => {
  const baseStyle = 'Link';
  const linkStyle = cta ? `variant--Cta` : `variant--Link`;
  const linkStyle2 = secondary ? `secondary` : ``;
  const linkStyle3 = large ? `variant--Large` : ``;
  const linkStyle4 = largeSlim ? `variant--LargeSlim` : ``;
  const linkStyle5 = magical ? `variant--Magical` : ``;
  const classNames = `${baseStyle} ${linkStyle} ${linkStyle2} ${linkStyle3} ${linkStyle4} ${linkStyle5} ${className}`;

  return (
    <Link className={classNames} to={to} style={style} rel={rel}>
      {children}
    </Link>
  );
};

export default CustomLink;
