import React, { FC } from 'react';

import './Card.scss';

type Props = JSX.IntrinsicElements['div'] & {
  large?: boolean;
};

const Card: FC<Props> = ({ className, children, large, style }) => {
  const baseStyle = 'card';
  const cardStyle = large ? `large` : ``;
  const classNames = className
    ? `${baseStyle}  ${cardStyle} ${className}`
    : `${baseStyle} ${cardStyle}`;

  return (
    <div className={classNames} style={style}>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
