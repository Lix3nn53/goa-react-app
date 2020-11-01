import React, { FC } from 'react';

import './Footer.scss';

type Props = JSX.IntrinsicElements['footer'];

const Footer: FC<Props> = ({ className, style }) => {
  const baseStyle = 'flex-container';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  return (
    <footer className={classNames} style={style}>
      Footer
    </footer>
  );
};

export default Footer;
