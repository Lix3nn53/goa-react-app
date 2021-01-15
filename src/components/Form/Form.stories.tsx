import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Form, { Props } from './Form';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Form,
  title: 'Form',
  // creates specific argTypes with options
  argTypes: {
    text: {
      defaultValue: 'Hello',
      control: {
        type: 'text',
      },
    },
    header: {
      defaultValue: 'Title',
      control: {
        type: 'text',
      },
    },
    footer: {
      defaultValue: '3:53 PM · Nov 6, 2020',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Template: Story<StoryProps> = ({ text, rowArray, buttonText, onSubmit }) => {
  return (
    <Form
      rowArray={[
        [{ id: 'register-email', name: 'Email', type: 'email' }],
        [{ id: 'register-nickname', name: 'Nickname', type: 'text' }],
        [{ id: 'register-password', name: 'Password', type: 'password' }],
        [{ id: 'register-repeat-password', name: 'Repeat Password', type: 'password' }],
      ]}
      buttonText="Register Now!"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <p>{text}</p>
    </Form>
  );
};
