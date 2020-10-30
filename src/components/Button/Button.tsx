import React, { FC } from 'react';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  type: 'button' | 'submit';
};

const Button: FC<Props> = ({ primary, className, children, onClick, type }) => {
  const baseStyle = 'button';
  const buttonStyle = primary ? `button-primary` : `button-secondary`;
  const classNames = className
    ? `${baseStyle}  ${buttonStyle} ${className}`
    : `${baseStyle} ${buttonStyle}`;

  return (
    <button className={classNames} onClick={onClick} type={type === 'button' ? 'button' : 'submit'}>
      {children}
    </button>
  );
};

export default Button;
