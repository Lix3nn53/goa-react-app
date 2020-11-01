import React, { FC } from 'react';
import Link from '../Link';

import './Header.scss';
import brand from '../../img/favicon.png';

type Props = JSX.IntrinsicElements['header'] & {
  path?: string;
};

const Header: FC<Props> = ({ className, path }) => {
  const baseStyle = 'flex-container';
  const headerStyle = path === '' ? `homepage` : ``;
  const classNames = className
    ? `${baseStyle} ${headerStyle}  ${className}`
    : `${baseStyle} ${headerStyle}`;

  return (
    <header className={classNames}>
      <div className="section-1">
        <Link to="/">
          <img src={brand} alt="brand" className="brand" />
        </Link>
      </div>
      <div className="section-2">
        <Link to="/login">Wiki</Link>
        <Link to="/login">Lore</Link>
        <Link to="/login">Store</Link>
      </div>
      <div className="section-3">
        <Link to="/login">Login</Link>
        <Link cta to="/feed">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
