import React, { FC } from 'react';

import './Subrouter.css';

export type Subroute = {
  name: string;
  id: string;
};

export type Props = JSX.IntrinsicElements['div'] & {
  routes: Array<Subroute>;
};

const Subrouter: FC<Props> = ({ className, style, routes }) => {
  const baseStyle = 'subrouter';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  return <span className={classNames} style={style}></span>;
};

export default Subrouter;
