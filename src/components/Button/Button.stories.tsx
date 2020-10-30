import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button primary type="button">
      Primary Button
    </Button>
  ))
  .add('Secondary', () => <Button type="button">Secondary Button</Button>);
