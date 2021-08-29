import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';

export type Props = JSX.IntrinsicElements['header'] & {
  section1: Array<ReactNode>;
  section2: Array<ReactNode>;
  section3: Array<ReactNode>;
  section3User: Array<ReactNode>;
};

const Header: FC<Props> = ({ className, style, section1, section2, section3, section3User }) => {
  const user = useSelector((state: any) => state.user);
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const baseStyle = 'flex-container';
  const headerStyle = path === '' ? `homepage` : ``;
  const classNames = className
    ? `${baseStyle} ${headerStyle}  ${className}`
    : `${baseStyle} ${headerStyle}`;

  console.log('header user', user);

  const renderSection3 = () => {
    switch (user) {
      case null:
        return <span>Loading...</span>;
      case false:
        return section3;
      default:
        return section3User;
    }
  };

  return (
    <header className={classNames} style={style}>
      <div className="section-1">{section1}</div>
      <div className="section-2">{section2}</div>
      <div className="section-3">{renderSection3()}</div>
    </header>
  );
};

export default Header;
