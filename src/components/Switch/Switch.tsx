import React, { FC } from 'react';

import './Switch.css';

export type Props = JSX.IntrinsicElements['label'] & {
  id: string;
  customIcon?: string;
  onSwitch?: () => void;
};

const Switch: FC<Props> = ({ className, style, id, customIcon, onSwitch }) => {
  const baseStyle = 'switch';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  return (
    <label className={classNames} style={style} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        onClick={() => {
          if (!onSwitch) return;

          onSwitch();
        }}
      />
      <span className={`switch-button ${customIcon}`} />
    </label>
  );
};

export default Switch;
