import React, { FC, ReactNode, useState } from 'react';

import './Dropdown.css';

export type Props = JSX.IntrinsicElements['div'] & {
  text: string;
  elements: Array<ReactNode>;
  keys: Array<string>;
};

const Dropdown: FC<Props> = ({ className, style, text, elements, keys }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const baseStyle = 'dropdown';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div
      className={showDropdown ? `${classNames} show` : classNames}
      style={style}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <span>{text}</span>
      <ul className="dropdown-content">
        {elements.map((element, i) => {
          return <li key={keys[i]}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
