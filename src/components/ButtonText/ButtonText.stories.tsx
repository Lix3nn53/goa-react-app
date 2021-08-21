import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import ButtonText, { Props } from './ButtonText';

type StoryProps = Props & {
  text: string;
};

export default {
  component: ButtonText,
  title: '01 - Basic/ButtonText',
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
  },
} as Meta;

export const ButtonStory: Story<StoryProps> = ({ text, type }) => {
  return (
    <ButtonText type={type} onClick={action('clicked')}>
      {text}
    </ButtonText>
  );
};
