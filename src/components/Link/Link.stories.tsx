import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react/types-6-0';

import Link, { Props } from './Link';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Link,
  title: '01 - Basic/Link',
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
    cta: {
      defaultValue: true,
      control: {
        type: 'boolean',
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

export const LinkStory: Story<StoryProps> = ({ text, to, cta, large }) => {
  return (
    <BrowserRouter>
      <Link to={to} cta={cta} large={large}>
        {text}
      </Link>
    </BrowserRouter>
  );
};
