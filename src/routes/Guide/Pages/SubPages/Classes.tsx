import React from 'react';

import GuidePage from '../GuidePageComponent';

export default [
  {
    name: 'Tier 1',
    id: 'tier-1',
  },
  {
    name: 'Tier 2',
    id: 'tier-2',
  },
  {
    name: 'Tier 3',
    id: 'tier-3',
    component: <GuidePage />,
    subroute: [
      {
        name: 'Warrior',
        id: 'warrior',
        component: <GuidePage />,
      },
      {
        name: 'Mage',
        id: 'mage',
      },
    ],
  },
];
