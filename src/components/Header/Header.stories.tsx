import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

storiesOf('Header', module)
  .add('Homepage', () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  ))
  .add('Default', () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  ));
