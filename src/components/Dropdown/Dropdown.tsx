import React, { FC, useState } from 'react';

import './Dropdown.css';

export type Props = JSX.IntrinsicElements['div'] & {
  options: Array<string>;
  handleChange(value: string): void;
};

const Dropdown: FC<Props> = ({ className, style, options, handleChange }) => {
  const [value, setValue] = useState(options[0]);

  const baseStyle = 'dropdown';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  return (
    <select
      className={classNames}
      style={style}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        handleChange(e.currentTarget.value);
      }}
    >
      {options.map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
