import React from 'react';

import Weapons from './Weapons';
import Armors from './Armors';
import Accessories from './Accessories';

export default [
  {
    name: 'Weapons',
    id: 'weapons',
    component: <Weapons />,
  },
  {
    name: 'Armors',
    id: 'armors',
    component: <Armors />,
  },
  {
    name: 'Accessories',
    id: 'accessories',
    component: <Accessories />,
  },
];
