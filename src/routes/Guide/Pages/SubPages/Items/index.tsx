import React from 'react';

import Weapons from './Weapons';
import Armors from './Armors';
import Accessories from './Accessories';
import Enchanting from './Enchanting';

export default [
  {
    name: 'item.weapons',
    id: 'weapons',
    component: <Weapons />,
  },
  {
    name: 'item.armors',
    id: 'armors',
    component: <Armors />,
  },
  {
    name: 'item.accessory',
    id: 'accessories',
    component: <Accessories />,
  },
  {
    name: 'item.enchanting',
    id: 'enchanting',
    component: <Enchanting />,
  },
];
