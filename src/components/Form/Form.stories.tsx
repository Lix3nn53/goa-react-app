import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Form, { Props } from './Form';

type StoryProps = Props;

export default {
  component: Form,
  title: '01 - Basic/Form',
  // creates specific argTypes with options
  argTypes: {
    rowArray: {
      defaultValue: [
        [{ id: 'register-email', name: 'Email', type: 'email' }],
        [{ id: 'register-repeat-password', name: 'Repeat Password', type: 'password' }],
      ],
      control: {
        type: 'object',
      },
    },
    buttonText: {
      defaultValue: 'Submit',
      control: {
        type: 'text',
      },
    },
    buttonText2: {
      control: {
        type: 'text',
      },
    },
    buttonSecondary: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const FormStory: Story<StoryProps> = ({
  rowArray,
  buttonText,
  buttonText2,
  buttonSecondary,
}) => {
  return (
    <Form
      rowArray={rowArray}
      buttonText={buttonText}
      buttonText2={buttonText2}
      buttonSecondary={buttonSecondary}
      onSubmit={(event) => {
        action('submitted');
      }}
    />
  );
};
