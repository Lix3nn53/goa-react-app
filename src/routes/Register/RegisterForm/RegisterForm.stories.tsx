import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RegisterForm from './RegisterForm';

export default {
  component: RegisterForm,
  title: '02 - Prepared/Forms',
} as Meta;

export const RegisterFormStory: Story = () => {
  return <RegisterForm />;
};
