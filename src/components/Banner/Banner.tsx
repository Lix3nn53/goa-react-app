import React, { FC } from 'react';

import './Banner.scss';

type Props = JSX.IntrinsicElements['div'] & {
  large?: boolean;
};

const Banner: FC<Props> = ({ className, children, large, style }) => {
  const baseStyle = 'banner';
  const cardStyle = large ? `large` : ``;
  const classNames = className
    ? `${baseStyle}  ${cardStyle} ${className}`
    : `${baseStyle} ${cardStyle}`;

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Banner;
