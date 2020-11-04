import React from 'react';
import { storiesOf } from '@storybook/react';

import Banner from './Banner';

storiesOf('Banner', module)
  .add('Primary', () => (
    <Banner icon="icon" title="title">
      Primary Card
    </Banner>
  ))
  .add('Secondary', () => (
    <Banner icon="icon" title="title">
      Secondary Card
    </Banner>
  ));
