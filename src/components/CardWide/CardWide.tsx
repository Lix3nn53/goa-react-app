import React, { FC } from 'react';

import './CardWide.css';

export type Props = JSX.IntrinsicElements['div'] & {
  header: React.ReactNode;
  image: string;
};

const CardWide: FC<Props> = ({ className, children, style, header, image }) => {
  const baseStyle = 'card-wide';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const renderHeader = () => {
    if (!header) return <div />;

    return <div className="card-wide-header">{header}</div>;
  };

  return (
    <div className={classNames} style={{ ...style, ...{ backgroundImage: `url(${image})` } }}>
      <div className="content">
        {renderHeader()}
        <div className="card-wide-text">{children}</div>
      </div>
    </div>
  );
};

export default CardWide;
