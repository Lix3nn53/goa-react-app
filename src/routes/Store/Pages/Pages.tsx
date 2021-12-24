import React from 'react';

import Crates from './SubPages/Crates';

export default [
  {
    name: 'store.ranks',
    id: 'ranks',
    component: <Crates />,
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
