import React, { FC, useState } from 'react';

import './DropdownSelection.css';

export type Props = JSX.IntrinsicElements['div'] & {
  options: Array<string>;
  handleChange(value: string): void;
};

const DropdownSelection: FC<Props> = ({ className, style, options, handleChange }) => {
  const [value, setValue] = useState(options[0]);

  const baseStyle = 'dropdown-selection';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  return (
    <span className={classNames} style={style}>
      <select
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
    </span>
  );
};

export default DropdownSelection;
