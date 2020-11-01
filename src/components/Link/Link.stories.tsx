import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import Link from './Link';

storiesOf('Link', module)
  .add('Link Cta', () => (
    <BrowserRouter>
      <Link cta to="/login">
        Link Cta
      </Link>
    </BrowserRouter>
  ))
  .add('Link', () => (
    <BrowserRouter>
      <Link to="/login">Link</Link>
    </BrowserRouter>
  ))
  .add('Link Cta Large', () => (
    <BrowserRouter>
      <Link cta large to="/login">
        Link
      </Link>
    </BrowserRouter>
  ))
  .add('Link Large', () => (
    <BrowserRouter>
      <Link large to="/login">
        Link
      </Link>
    </BrowserRouter>
  ));
