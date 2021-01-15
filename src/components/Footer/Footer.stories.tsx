import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Footer, { Props } from './Footer';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Footer,
  title: 'Footer',
  // creates specific argTypes with options
  argTypes: {
    text: {
      defaultValue: 'Hello',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Template: Story<StoryProps> = ({ text }) => {
  return (
    <Footer>
      <p>{text}</p>
    </Footer>
  );
};
