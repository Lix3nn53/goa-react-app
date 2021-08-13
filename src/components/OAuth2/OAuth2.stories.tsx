import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react/types-6-0';

import OAuth2, { Props } from './OAuth2';

export default {
  component: OAuth2,
  title: '01 - Basic/OAuth2',
  // creates specific argTypes with options
  argTypes: {
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

export const SocialLinkStory: Story<Props> = ({ social, authUrl, parameters }) => {
  return (
    <BrowserRouter>
      <OAuth2
        social={social}
        authUrl={authUrl}
        parameters={parameters}
        onCallback={() => {}}
        disabled={false}
        setDisabled={(param: boolean) => {}}
      />
    </BrowserRouter>
  );
};
