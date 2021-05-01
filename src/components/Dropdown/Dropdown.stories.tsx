import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Dropdown, { Props } from './Dropdown';

export default {
  component: Dropdown,
  title: '01 - Basic/Dropdown',
  // creates specific argTypes with options
  argTypes: {
    id: {
      defaultValue: 'id',
      control: {
        type: 'text',
      },
    },
    customIcon: {
      defaultValue: 'theme',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const SwitchStory: Story<Props> = ({ id, options }) => {
  return <Dropdown id={id} options={options} handleChange={action('handleChange')} />;
};
