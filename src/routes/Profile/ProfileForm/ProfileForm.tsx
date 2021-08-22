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
            id: 'profile-uuid',
            name: 'UUID',
            type: 'text',
            defaultValue: user.uuid,
            disabled: true,
          },
        ],
        [
          {
            id: 'profile-username',
            name: 'Username',
            type: 'text',
            defaultValue: user.mc_username,
            disabled: true,
          },
        ],
        [
          {
            id: 'profile-email',
            name: 'Email',
            type: 'email',
            defaultValue: user.email,
          },
        ],
      ]}
      buttonText="Save!"
      buttonText2="Reset"
      onSubmit={(e) => {
        console.log('submit', e.target);
        const target = e.target as typeof e.target & {
          0: { value: string };
          1: { value: string };
          2: { value: string };
        };
        const uuid = target['0'].value;
        const username = target['1'].value;
        const email = target['2'].value;
        console.log('uuid', uuid);
        console.log('username', username);
        console.log('email', email);
      }}
      onButton2={() => {
        console.log('reset');
      }}
    />
  );
};

export default ProfileForm;
