import React from 'react';
import { storiesOf } from '@storybook/react';

import TwitterTimeline from './TwitterTimeline';

storiesOf('TwitterTimeline', module).add('Default', () => <TwitterTimeline profile="Minecraft" />);
