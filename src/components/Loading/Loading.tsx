import React, { FC } from 'react';

type Props = JSX.IntrinsicElements['p'];

const Loading: FC<Props> = ({ className, children, style }) => (
  <p className={className} style={style}>
    Loading...{children}
  </p>
);

export default Loading;
