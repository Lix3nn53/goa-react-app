import React, { FC } from 'react';

import './Footer.css';
import Switch from '../Switch';
import Link from '../Link';

export type Props = JSX.IntrinsicElements['footer'];

const Footer: FC<Props> = ({ className, style, children }) => {
  const baseStyle = 'flex-container';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  function toggleTheme() {
    const htmlTag = document.getElementById('fullpage');
    if (!htmlTag) return;
    if (htmlTag.hasAttribute('data-theme')) {
      const themes = ['dark', 'light'];

      const currentTheme = htmlTag.getAttribute('data-theme');
      if (!currentTheme) return;

      const index = themes.indexOf(currentTheme);

      if (index === themes.length - 1) {
        htmlTag.setAttribute('data-theme', themes[0]);
        return;
      }

      htmlTag.setAttribute('data-theme', themes[index + 1]);
    }
  }

  function renderYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className={classNames} style={style}>
      {children}
      <div className="flex-container column" style={{ marginTop: 'auto' }}>
        <div className="flex-container column" style={{ paddingBottom: '8px' }}>
          <Link style={{ flex: '1' }} to="/privacy">
            Privacy Policy
          </Link>
          <Link style={{ flex: '1' }} to="/tos">
            Terms of Service
          </Link>
        </div>
        <div className="flex-container row" style={{ paddingBottom: '8px' }}>
          <p style={{ flex: '1' }}>Copyright Guardians of Adelia © 2017 - {renderYear()}</p>

          <div style={{ flex: '0' }}>
            <Switch id="theme" customIcon="theme" onSwitch={toggleTheme} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
