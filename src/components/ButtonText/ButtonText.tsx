import React, { FC } from 'react';

import './ButtonText.css';

export type Props = JSX.IntrinsicElements['button'] & {
  type: 'button' | 'submit';
  secondary?: boolean;
};

const ButtonText: FC<Props> = ({
  className,
  children,
  style,
  onClick,
  type,
  disabled,
  secondary,
}) => {
  const baseStyle = 'button-text';
  const linkStyle = secondary ? `secondary` : ``;
  const classNames = `${baseStyle} ${linkStyle} ${className}`;

  return (
    <button
      className={classNames}
      style={style}
      onClick={onClick}
      type={type === 'button' ? 'button' : 'submit'}
      disabled={disabled}
    >
      <div className="button-text-content">{children}</div>
    </button>
  );
};

export default ButtonText;
