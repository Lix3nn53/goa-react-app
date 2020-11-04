import React, { FC } from 'react';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  type: 'button' | 'submit';
};

const Button: FC<Props> = ({ primary, className, children, style, onClick, type }) => {
  const baseStyle = 'button';
  const buttonStyle = primary ? `button-primary` : `button-secondary`;
  const classNames = className
    ? `${baseStyle}  ${buttonStyle} ${className}`
    : `${baseStyle} ${buttonStyle}`;

  return (
    <button
      className={classNames}
      style={style}
      onClick={onClick}
      type={type === 'button' ? 'button' : 'submit'}
    >
      <div className="button-content">{children}</div>
    </button>
  );
};

export default Button;
