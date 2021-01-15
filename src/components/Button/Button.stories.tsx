import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  argTypes: {
    type: { control: 'select', options: ['button', 'submit'] },
    primary: { control: 'boolean' },
  },
};

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  type: 'button' | 'submit';
};

export const Basic = (args: Props) => <Button primary={args.primary} type={args.type} />;

Basic.args = {
  type: 'button',
  primary: true,
};
