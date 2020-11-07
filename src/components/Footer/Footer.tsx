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
      const themes = ['dark', 'light', 'brown'];

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
