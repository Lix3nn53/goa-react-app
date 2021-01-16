import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react/types-6-0';

import Loading from './Loading';

export default {
  component: Loading,
  title: '01 - Basic/Loading',
  // creates specific argTypes with options
} as Meta;

export const LoadingStory: Story = () => {
  return (
    <BrowserRouter>
      <Loading />
    </BrowserRouter>
  );
};
