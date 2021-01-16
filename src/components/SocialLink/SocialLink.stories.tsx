import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react/types-6-0';

import SocialLink, { Props } from './SocialLink';

type StoryProps = Props & {
  text: string;
};

export default {
  component: SocialLink,
  title: '01 - Basic SocialLink',
  // creates specific argTypes with options
  argTypes: {
    text: {
      defaultValue: 'Hello',
      control: {
        type: 'text',
      },
    },
    to: {
      defaultValue: '/login',
      control: {
        type: 'text',
      },
    },
    social: {
      defaultValue: 'facebook',
      control: {
        type: 'select',
        options: ['facebook', 'google', 'twitter', 'twitch'],
      },
    },
  },
} as Meta;

export const SocialLinkStory: Story<StoryProps> = ({ text, to, social }) => {
  return (
    <BrowserRouter>
      <SocialLink to={to} social={social}>
        {text}
      </SocialLink>
    </BrowserRouter>
  );
};
