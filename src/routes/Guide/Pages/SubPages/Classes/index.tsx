import Dragonslayer from './List/Dragonslayer';

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
    component: Dragonslayer,
    subroute: [
      {
        name: 'Dragonslayer',
        id: 'dragonslayer',
        component: Dragonslayer,
      },
      {
        name: 'Mage',
        id: 'mage',
        component: Dragonslayer,
      },
    ],
  },
];
