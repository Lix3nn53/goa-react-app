import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Subrouter, { Props } from './Subrouter';

export default {
  component: Subrouter,
  title: '01 - Basic/Subrouter',
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

export const SwitchStory: Story<Props> = ({ id, routes }) => {
  return <Subrouter id={id} routes={routes} />;
};
