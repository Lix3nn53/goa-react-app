import React from 'react';

import Ranks from './SubPages/Ranks';
import Crates from './SubPages/Crates';

export default [
  {
    name: 'store.ranks',
    id: 'ranks',
    component: <Ranks />,
  },
  {
    name: 'store.crates',
    id: 'crates',
    component: <Crates />,
  },
  {
    name: 'store.boosts',
    id: 'boosts',
    component: <Crates />,
  },
];
