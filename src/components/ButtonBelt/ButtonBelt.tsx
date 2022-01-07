import React, { FC } from 'react';

import './ButtonBelt.css';
import ButtonBeltButton, { ButtonBeltButtonType } from './ButtonBeltButton';

export type Props = JSX.IntrinsicElements['div'] & {
  secondary?: boolean;
  buttons: ButtonBeltButtonType[];
};

const ButtonBelt: FC<Props> = ({ className, secondary, buttons }) => {
  const baseStyle = 'button-belt flex-container row';
  const linkStyle = secondary ? `secondary` : ``;
  const classNames = `${baseStyle} ${linkStyle} ${className}`;

  function renderButtons(): React.ReactNode {
    const arr: React.ReactNode[] = [];

    buttons.forEach((button) => {
      arr.push(button);
    });

    return arr;
  }

  return <div className={classNames}>{renderButtons()}</div>;
};

export default ButtonBelt;
