import React, { FC } from 'react';
import CtaLink from '../CtaLink';

import './Header.scss';
import brand from '../../img/favicon.png';

type Props = JSX.IntrinsicElements['header'];

const Header: FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div className="flex-container" style={{ width: '100%' }}>
        <div className="flex-header-section-1">
          <CtaLink to="/">
            <img src={brand} alt="brand" className="brand" />
          </CtaLink>
        </div>
        <div className="flex-header-section-2">
          <CtaLink to="/login">Wiki</CtaLink>
          <CtaLink to="/login">Lore</CtaLink>
          <CtaLink to="/login">Store</CtaLink>
        </div>
        <div className="flex-header-section-3">
          <CtaLink to="/login">Login</CtaLink>
          <CtaLink button to="/feed">
            Register
          </CtaLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
