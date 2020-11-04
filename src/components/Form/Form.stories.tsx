import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
  .add('Primary', () => <Form>Primary Form</Form>)
  .add('Secondary', () => <Form>Secondary Form</Form>);
