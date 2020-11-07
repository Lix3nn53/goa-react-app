import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import SocialLink from './SocialLink';

storiesOf('SocialLink', module)
  .add('SocialLink Cta', () => (
    <BrowserRouter>
      <SocialLink social="facebook" to="/login">
        SocialLink Cta
      </SocialLink>
    </BrowserRouter>
  ))
  .add('SocialLink', () => (
    <BrowserRouter>
      <SocialLink social="facebook" to="/login">
        SocialLink
      </SocialLink>
    </BrowserRouter>
  ))
  .add('SocialLink Cta Large', () => (
    <BrowserRouter>
      <SocialLink social="facebook" to="/login">
        SocialLink
      </SocialLink>
    </BrowserRouter>
  ))
  .add('SocialLink Large', () => (
    <BrowserRouter>
      <SocialLink social="facebook" to="/login">
        SocialLink
      </SocialLink>
    </BrowserRouter>
  ));
