import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../components/Form';
import Loading from '../../../components/Loading';

const ProfileForm: FunctionComponent = () => {
  const user = useSelector((state: any) => state.user);

  if (user == null) return <Loading />;

  return (
    <Form
      rowArray={[
        [
          {
            id: 'register-email',
            name: 'Email',
            type: 'email',
            defaultValue: user.email,
          },
        ],
        [
          {
            id: 'register-username',
            name: 'Username',
            type: 'text',
            defaultValue: user.mc_username,
            disabled: true,
          },
        ],
        [{ id: 'register-password', name: 'Password', type: 'password' }],
        [{ id: 'register-repeat-password', name: 'Repeat Password', type: 'password' }],
      ]}
      buttonText="Save!"
      buttonText2="Reset"
      onSubmit={(e) => {
        console.log('submit', e.target);
        const target = e.target as typeof e.target & {
          0: { value: string };
          1: { value: string };
          2: { value: string };
          3: { value: string };
        };
        const email = target['0'].value;
        const username = target['1'].value;
        const password = target['2'].value;
        const repeatPassword = target['3'].value;
        console.log('email', email);
        console.log('username', username);
        console.log('password', password);
        console.log('repeatPassword', repeatPassword);
      }}
      onButton2={() => {
        console.log('reset');
      }}
    />
  );
};

export default ProfileForm;
