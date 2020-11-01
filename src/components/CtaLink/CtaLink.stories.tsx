import React from 'react';
import { storiesOf } from '@storybook/react';

import CtaLink from './CtaLink';

storiesOf('Button', module).add('CtaLink Button', () => (
  <CtaLink button to="/login">
    Link
  </CtaLink>
));

storiesOf('CtaLink', module)
  .add('Button', () => (
    <CtaLink button to="/login">
      CtaLink Button
    </CtaLink>
  ))
  .add('Link', () => <CtaLink to="/login">CtaLink Link</CtaLink>);
