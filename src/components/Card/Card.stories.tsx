import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Card', module)
  .add('Primary', () => <Card>Primary Card</Card>)
  .add('Secondary', () => <Card>Secondary Card</Card>);
