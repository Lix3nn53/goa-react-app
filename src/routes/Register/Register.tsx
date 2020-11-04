import React, { FunctionComponent } from 'react';

import './Register.scss';
import Card from '../../components/Card';
import Form from '../../components/Form';

const Register: FunctionComponent = () => (
  <div className="flex-container register-page">
    <Card header={<p>Create your Account!</p>} style={{ maxWidth: '484px' }}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('asdasd');
          return false;
        }}
      >
        A
      </Form>
    </Card>
  </div>
);

export default Register;
