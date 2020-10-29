import React, { FC } from 'react';
import cx from 'classnames';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  secondary?: boolean;
  type: 'button' | 'submit';
};

const Button: FC<Props> = ({ primary, secondary, className, children, onClick, type }) => {
  const classNames = cx(
    'button',
    { 'button-primary': primary, 'button-secondary': secondary },
    className,
  );

  return (
    <button className={classNames} onClick={onClick} type={type === 'button' ? 'button' : 'submit'}>
      {children}
    </button>
  );
};

export default Button;
