import React, { FC } from 'react';

import './Button.css';

export type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  type: 'button' | 'submit';
};

const Button: FC<Props> = ({ className, children, style, onClick, primary, type, disabled }) => {
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
      disabled={disabled}
    >
      <div className="button-content">{children}</div>
    </button>
  );
};

export default Button;
