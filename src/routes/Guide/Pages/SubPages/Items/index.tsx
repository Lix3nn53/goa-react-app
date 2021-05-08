import React from 'react';

import Weapons from './Weapons';
import Armors from './Armors';
import Accessories from './Accessories';
import Enchanting from './Enchanting';

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
  {
    name: 'Enchanting',
    id: 'enchanting',
    component: <Enchanting />,
  },
];
