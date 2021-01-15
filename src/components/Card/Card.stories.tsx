import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Card', module)
  .add('Primary', () => (
    <Card header={<p>Title</p>} footer={<p>3:53 PM · Nov 6, 2020</p>}>
      <p>Primary Card</p>
    </Card>
  ))
  .add('Secondary', () => (
    <Card header={<p>Title</p>} footer={<p>3:53 PM · Nov 6, 2020</p>}>
      <p>Secondary Card</p>
    </Card>
  ));
