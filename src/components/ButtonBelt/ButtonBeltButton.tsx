import React, { FC } from 'react';

export type ButtonBeltButtonType = JSX.IntrinsicElements['button'] & {
  type: 'button' | 'submit';
};

const ButtonBeltButton: FC<ButtonBeltButtonType> = ({
  style,
  onClick,
  type,
  disabled,
  children,
}) => {
  const baseStyle = 'button-belt-button';
  const classNames = `${baseStyle}`;

  return (
    <button
      className={classNames}
      style={style}
      onClick={onClick}
      type={type === 'button' ? 'button' : 'submit'}
      disabled={disabled}
    >
      <div className="button-belt-content">{children}</div>
    </button>
  );
};

export default ButtonBeltButton;
