import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { Props } from './Header';

import brand from '../../img/favicon.png';
import Link from '../Link';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Header,
  title: '01 - Basic/Header',
  // creates specific argTypes with options
  argTypes: {
    style: {
      defaultValue: { flex: '0' },
      control: {
        type: 'object',
      },
    },
    section1: {
      defaultValue: [
        <Link to="/">
          <img src={brand} alt="brand" className="brand" />
        </Link>,
      ],
      control: {
        type: 'array',
      },
    },
    section2: {
      defaultValue: [
        <Link to="/login">Wiki</Link>,
        <Link to="/login">Lore</Link>,
        <Link to="/login">Store</Link>,
      ],
      control: {
        type: 'array',
      },
    },
    section3: {
      defaultValue: [
        <Link to="/login">Login</Link>,
        <Link cta to="/register">
          Register
        </Link>,
      ],
      control: {
        type: 'array',
      },
    },
  },
} as Meta;

export const HeaderStory: Story<StoryProps> = ({ style, section1, section2, section3 }) => {
  return (
    <BrowserRouter>
      <Header style={style} section1={section1} section2={section2} section3={section3} />
    </BrowserRouter>
  );
};
