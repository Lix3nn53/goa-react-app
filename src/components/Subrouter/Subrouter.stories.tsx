import React, { FunctionComponent } from 'react';
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

const Subcomponent: FunctionComponent = () => {
  return <div>Subcomponent</div>;
};

export const SwitchStory: Story<Props> = ({ id, routes, deep }) => {
  return (
    <Subrouter
      routes={[
        { name: 'One', id: 'one' },
        { name: 'Two', id: 'two' },
      ]}
      subcomponents={[Subcomponent]}
      deep={3}
    >
      Subrouter
    </Subrouter>
  );
};
