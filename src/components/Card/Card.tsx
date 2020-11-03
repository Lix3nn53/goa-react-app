import React, { FC } from 'react';

import './Card.scss';

type Props = JSX.IntrinsicElements['div'] & {
  reverse?: boolean;
  footer?: React.ReactNode;
};

const Card: FC<Props> = ({ className, children, style, reverse, footer }) => {
  const baseStyle = 'card';
  const cardStyle = reverse ? `reverse` : ``;
  const classNames = className
    ? `${baseStyle}  ${cardStyle} ${className}`
    : `${baseStyle} ${cardStyle}`;

  const renderFooter = () => {
    if (!footer) return <div />;

    return <div className="flex-item card-footer">{footer}</div>;
  };

  return (
    <div className={classNames} style={style}>
      <div className="flex-container column">
        <div className="flex-item card-content">{children}</div>
        {renderFooter()}
      </div>
    </div>
  );
};

export default Card;
