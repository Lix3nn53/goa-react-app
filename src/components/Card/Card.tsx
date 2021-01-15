import React, { FC } from 'react';

import './Card.css';

export type Props = JSX.IntrinsicElements['div'] & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const Card: FC<Props> = ({ className, children, style, header, footer }) => {
  const baseStyle = 'card';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const renderHeader = () => {
    if (!header) return <div />;

    return <div className="card-header">{header}</div>;
  };
  const renderFooter = () => {
    if (!footer) return <div />;

    return <div className="card-footer">{footer}</div>;
  };

  return (
    <div className={classNames} style={style}>
      {renderHeader()}
      <div className="card-content">{children}</div>
      {renderFooter()}
    </div>
  );
};

export default Card;
