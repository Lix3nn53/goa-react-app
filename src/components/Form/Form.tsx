import React, { FC } from 'react';

import './Form.scss';

import Button from '../Button';

type Props = JSX.IntrinsicElements['form'] & {
  hello?: boolean;
};

const Form: FC<Props> = ({ className, children, hello, onSubmit }) => {
  const baseStyle = 'form';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  return (
    <form className={classNames} onSubmit={onSubmit}>
      <div className="form-row flex-container">
        <div className="form-item" style={{ flex: '1' }}>
          <div className="form-input">
            <label htmlFor="login-email">
              Email
              <input id="login-email" type="email" name="email" />
            </label>
          </div>
        </div>
      </div>
      <div className="form-row flex-container">
        <div className="form-item" style={{ flex: '1' }}>
          <div className="form-input">
            <label htmlFor="login-nickname">
              Nickname
              <input id="login-nickname" type="text" name="name" />
            </label>
          </div>
        </div>
      </div>
      <div className="form-row flex-container">
        <div className="form-item" style={{ flex: '1' }}>
          <div className="form-input">
            <label htmlFor="login-password">
              Password
              <input id="login-password" type="password" />
            </label>
          </div>
        </div>
      </div>
      <div className="form-row flex-container">
        <div className="form-item" style={{ flex: '1' }}>
          <div className="form-input">
            <label htmlFor="login-repeat-password">
              Repeat password
              <input id="login-repeat-password" type="password" />
            </label>
          </div>
        </div>
      </div>
      <div className="form-buttons flex-container">
        <Button primary type="submit">
          Register Now!
        </Button>
      </div>
    </form>
  );
};

export default Form;
