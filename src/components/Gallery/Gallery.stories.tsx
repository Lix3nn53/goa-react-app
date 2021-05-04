import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Gallery, { Props } from './Gallery';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Gallery,
  title: '01 - Basic/Gallery',
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

export const CardStory: Story<StoryProps> = ({ text, pictures }) => {
  return (
    <Gallery pictures={pictures}>
      <p>{text}</p>
    </Gallery>
  );
};
