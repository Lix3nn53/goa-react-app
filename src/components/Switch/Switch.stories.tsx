import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import Switch from './Switch';

storiesOf('Switch', module)
  .add('Switch Cta', () => (
    <BrowserRouter>
      <Switch id="test">Switch Cta</Switch>
    </BrowserRouter>
  ))
  .add('Switch', () => (
    <BrowserRouter>
      <Switch id="test">Switch</Switch>
    </BrowserRouter>
  ))
  .add('Switch Cta Large', () => (
    <BrowserRouter>
      <Switch id="test">Switch</Switch>
    </BrowserRouter>
  ))
  .add('Switch Large', () => (
    <BrowserRouter>
      <Switch id="test">Switch</Switch>
    </BrowserRouter>
  ));
