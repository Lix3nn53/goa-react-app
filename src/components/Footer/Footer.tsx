import React, { FC } from 'react';

import './Footer.scss';
import Button from '../Button';

type Props = JSX.IntrinsicElements['footer'];

const Footer: FC<Props> = ({ className, style }) => {
  const baseStyle = 'flex-container';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  function toggleTheme() {
    const htmlTag = document.getElementById('fullpage');
    if (!htmlTag) return;
    if (htmlTag.hasAttribute('data-theme')) {
      const currentTheme = htmlTag.getAttribute('data-theme');

      if (currentTheme === 'dark') {
        htmlTag.setAttribute('data-theme', 'light');
      } else {
        htmlTag.setAttribute('data-theme', 'dark');
      }
    }
  }

  return (
    <footer className={classNames} style={style}>
      Footer
      <div>
        <Button primary type="button" onClick={toggleTheme}>
          Theme
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
