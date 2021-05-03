import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Table, { Props } from './Table';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Table,
  title: '01 - Basic/Table',
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

export const CardStory: Story<StoryProps> = ({ text, cells }) => {
  return (
    <Table cells={cells}>
      <p>{text}</p>
    </Table>
  );
};
