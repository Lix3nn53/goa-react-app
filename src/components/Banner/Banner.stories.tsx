import React from 'react';
import { storiesOf } from '@storybook/react';

import Banner from './Banner';

storiesOf('Banner', module)
  .add('Primary', () => <Banner>Primary Card</Banner>)
  .add('Secondary', () => <Banner>Secondary Card</Banner>);
