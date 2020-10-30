import React, { FC } from 'react';

import './Header.scss';

type Props = JSX.IntrinsicElements['header'];

const Header: FC<Props> = ({ className }) => {
  return <header className={className}>Header</header>;
};

export default Header;
