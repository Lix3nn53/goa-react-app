import React, { FC } from 'react';

import './Form.scss';

import Button from '../Button';

type InputData = {
  id: string;
  name: string;
  type: 'text' | 'password' | 'email';
};

type Props = JSX.IntrinsicElements['form'] & {
  rowArray: InputData[][];
  buttonText: string;
  buttonText2?: string;
};

const Form: FC<Props> = ({ className, rowArray, buttonText, buttonText2, onSubmit }) => {
  const baseStyle = 'form';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const createInput = (inputData: InputData, rowIndex: number, inputIndex: number) => {
    const { id, name, type } = inputData;

    return (
      <div key={rowIndex} className="form-item" style={{ flex: '1' }}>
        <div key={inputIndex} className="form-input">
          <label htmlFor={id}>
            {name}
            {/* formNoValidate disables default css of browser */}
            <input formNoValidate id={id} type={type} name={name} />
          </label>
        </div>
      </div>
    );
  };

  const renderInputs = () => {
    const rows: Array<React.ReactNode> = [];

    rowArray.forEach((inputArray, rowIndex) => {
      inputArray.forEach((inputData, inputIndex) => {
        rows.push(createInput(inputData, rowIndex, inputIndex));
      });
    });

    return rows;
  };

  const renderSecondButton = () => {
    if (!buttonText2) return <div />;

    return <Button type="button">{buttonText2}</Button>;
  };

  return (
    <form className={classNames} onSubmit={onSubmit}>
      {renderInputs()}
      <div className="form-buttons flex-container">
        {renderSecondButton()}
        <Button primary type="submit">
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default Form;
