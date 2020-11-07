import React, { FC } from 'react';

import './Form.scss';

import Button from '../Button';

type InputData = {
  id: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'radio';
};

type Props = JSX.IntrinsicElements['form'] & {
  rowArray: InputData[][];
  buttonText: string;
  buttonText2?: string;
  buttonSecondary?: boolean;
};

const Form: FC<Props> = ({
  className,
  rowArray,
  buttonText,
  buttonText2,
  buttonSecondary,
  onSubmit,
}) => {
  const baseStyle = 'form';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const createInput = (inputData: InputData) => {
    const { id, name, type } = inputData;

    if (type === 'checkbox' || type === 'radio') {
      const markType = type === 'checkbox' ? 'crossmark' : 'circle';

      return (
        <label className="input-box-wrap" htmlFor={id}>
          {name}
          <input id={id} type={type} name={name} />
          <span className={`mark ${markType}`} />
        </label>
      );
    }

    return (
      <label htmlFor={id}>
        {name}
        <input id={id} type={type} name={name} />
      </label>
    );
  };

  const createFormItem = (inputData: InputData, rowIndex: number, inputIndex: number) => {
    return (
      <div key={rowIndex} className="form-item" style={{ flex: '1' }}>
        <div key={inputIndex} className="form-input">
          {createInput(inputData)}
        </div>
      </div>
    );
  };

  const renderInputs = () => {
    const rows: Array<React.ReactNode> = [];

    rowArray.forEach((inputArray, rowIndex) => {
      inputArray.forEach((inputData, inputIndex) => {
        rows.push(createFormItem(inputData, rowIndex, inputIndex));
      });
    });

    return rows;
  };

  const renderSecondButton = () => {
    if (!buttonText2) return <div />;

    return (
      <Button primary={buttonSecondary} type="button">
        {buttonText2}
      </Button>
    );
  };

  return (
    <form className={classNames} onSubmit={onSubmit}>
      {renderInputs()}
      <div className="form-buttons flex-container">
        {renderSecondButton()}
        <Button primary={!buttonSecondary} type="submit">
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default Form;
