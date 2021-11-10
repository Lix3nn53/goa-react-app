import React, { FC } from 'react';

import './Form.css';

import Button from '../Button';

type InputData = {
  id: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'radio';
  defaultValue?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
};

export type Props = JSX.IntrinsicElements['form'] & {
  rowArray: InputData[][];
  buttonText: string;
  buttonText2?: string;
  buttonSecondary?: boolean;
  disabled?: boolean;
  onButton2?: any;
};

const Form: FC<Props> = ({
  className,
  rowArray,
  buttonText,
  buttonText2,
  onButton2,
  buttonSecondary,
  onSubmit,
  disabled,
}) => {
  const baseStyle = 'form';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const createInput = (inputData: InputData) => {
    const { id, name, type, defaultValue, defaultChecked } = inputData;
    const disabledInput = inputData.disabled;

    if (type === 'checkbox' || type === 'radio') {
      const markType = type === 'checkbox' ? 'crossmark' : 'circle';

      return (
        <label className="input-box-wrap" htmlFor={id}>
          {name}
          <input
            id={id}
            type={type}
            name={name}
            defaultChecked={defaultChecked}
            disabled={disabledInput}
          />
          <span className={`mark ${markType}`} />
        </label>
      );
    }

    return (
      <label htmlFor={id}>
        {name}
        <input
          id={id}
          type={type}
          name={name}
          defaultValue={defaultValue}
          disabled={disabledInput}
        />
      </label>
    );
  };

  const createFormItem = (inputData: InputData, rowIndex: number, inputIndex: number) => {
    return (
      <div key={rowIndex} className="form-item flex-one">
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
      <Button
        primary={buttonSecondary}
        type="button"
        onClick={() => {
          if (!onButton2) return;

          onButton2();
        }}
      >
        {buttonText2}
      </Button>
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onSubmit) return;

    onSubmit(e);
  };

  return (
    <form className={classNames} onSubmit={handleSubmit}>
      {renderInputs()}
      <div className="form-buttons flex-container">
        {renderSecondButton()}
        <Button primary={!buttonSecondary} type="submit" disabled={disabled}>
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default Form;
