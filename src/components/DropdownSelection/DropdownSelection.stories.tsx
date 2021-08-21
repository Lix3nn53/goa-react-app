import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import DropdownSelection, { Props } from './DropdownSelection';

export default {
  component: DropdownSelection,
  title: '01 - Basic/DropdownSelection',
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
  return <DropdownSelection id={id} options={options} handleChange={action('handleChange')} />;
};
