import React, { FC } from 'react';

import './Banner.css';

export type Props = JSX.IntrinsicElements['div'] & {
  icon: React.ReactNode;
  title: string;
  large?: boolean;
};

const Banner: FC<Props> = ({ className, children, large, style, icon, title }) => {
  const baseStyle = 'banner';
  const cardStyle = large ? `large` : ``;
  const classNames = className
    ? `${baseStyle}  ${cardStyle} ${className}`
    : `${baseStyle} ${cardStyle}`;

  return (
    <div className={classNames} style={style}>
      <div className="flex-container banner-content">
        <div className="flex-container banner-icon" style={{ flex: '1' }}>
          {icon}
        </div>
        <div style={{ flex: '4' }}>
          <div className="flex-container column">
            <div className="banner-title" style={{ flex: '1' }}>
              {title}
            </div>
            <div className="banner-text" style={{ flex: '2' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
