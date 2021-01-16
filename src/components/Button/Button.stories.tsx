import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Button, { Props } from './Button';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Button,
  title: '01 - Basic/Button',
  // creates specific argTypes with options
  argTypes: {
    text: {
      defaultValue: 'Hello',
      control: {
        type: 'text',
      },
    },
    type: {
      defaultValue: 'button',
      control: {
        type: 'select',
        options: ['button', 'submit'],
      },
    },
    primary: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const ButtonStory: Story<StoryProps> = ({ text, primary, type }) => {
  return (
    <Button primary={primary} type={type} onClick={action('clicked')}>
      {text}
    </Button>
  );
};
