import React, { FC } from 'react';

import './ButtonText.css';

export type Props = JSX.IntrinsicElements['button'] & {
  type: 'button' | 'submit';
};

const ButtonText: FC<Props> = ({ className, children, style, onClick, type, disabled }) => {
  const baseStyle = 'button-text';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

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

export default ButtonText;
