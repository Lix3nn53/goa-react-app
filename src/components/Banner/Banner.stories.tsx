import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Banner, { Props } from './Banner';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Banner,
  title: '01 - Basic/Banner',
  // creates specific argTypes with options
  argTypes: {
    icon: {
      defaultValue: 'fa-newspaper',
      control: {
        type: 'text',
      },
    },
    text: {
      defaultValue: 'Text',
      control: {
        type: 'text',
      },
    },
    title: {
      defaultValue: 'Title',
      control: {
        type: 'text',
      },
    },
    large: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const BannerStory: Story<StoryProps> = ({ text, icon, title, large }) => {
  return (
    <Banner icon={<i className={`far ${icon}`} />} title={title} large={large}>
      {text}
    </Banner>
  );
};
