import React from 'react';

import Tier3 from './Tier3';

import Warrior from './Tier3/Warrior';

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
    component: <Tier3 />,
    subroute: [
      {
        name: 'Warrior',
        id: 'warrior',
        component: <Warrior />,
      },
      {
        name: 'Mage',
        id: 'mage',
      },
    ],
  },
];
