import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Link from '../Link';

import './Header.css';
import brand from '../../img/favicon.png';

export type Props = JSX.IntrinsicElements['header'];

const Header: FC<Props> = ({ className, style }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const baseStyle = 'flex-container';
  const headerStyle = path === '' ? `homepage` : ``;
  const classNames = className
    ? `${baseStyle} ${headerStyle}  ${className}`
    : `${baseStyle} ${headerStyle}`;

  return (
    <header className={classNames} style={style}>
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
        <Link cta to="/register">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
