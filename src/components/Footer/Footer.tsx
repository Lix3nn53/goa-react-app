import React, { FC } from 'react';

import './Footer.scss';

type Props = JSX.IntrinsicElements['footer'];

const Footer: FC<Props> = ({ className }) => {
  return <footer className={className}>Footer</footer>;
};

export default Footer;
