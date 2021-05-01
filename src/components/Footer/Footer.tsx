import React, { FC } from 'react';

import './Footer.css';
import Switch from '../Switch';

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

  return (
    <footer className={classNames} style={style}>
      {children}
      <div style={{ marginTop: 'auto', marginLeft: 'auto' }}>
        <Switch id="theme" customIcon="theme" onSwitch={toggleTheme} />
      </div>
    </footer>
  );
};

export default Footer;
