import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LoginForm from './LoginForm';

export default {
  component: LoginForm,
  title: '02 - Prepared/Forms',
} as Meta;

export const LoginFormStory: Story = () => {
  return <LoginForm />;
};
