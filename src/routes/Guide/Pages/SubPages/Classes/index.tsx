import React from 'react';

// Tier 1
import Tier1Intro from './List/Tier1/Intro';

// Tier 2
import Tier2Intro from './List/Tier2/Intro';
import Archer from './List/Tier2/Archer';
import FireMage from './List/Tier2/Fire Mage';
import FrostMage from './List/Tier2/Frost Mage';
import Hunter from './List/Tier2/Hunter';
import Monk from './List/Tier2/Monk';
import Paladin from './List/Tier2/Paladin';

// Tier 3
import Tier3Intro from './List/Tier3/Intro';
import DoomKnight from './List/Tier3/Doom Knight';
import Dragonslayer from './List/Tier3/Dragonslayer';
import Engineer from './List/Tier3/Engineer';
import Necromancer from './List/Tier3/Necromancer';
import Reaper from './List/Tier3/Reaper';
import Shaman from './List/Tier3/Shaman';
import Vampire from './List/Tier3/Vampire';

export default [
  {
    name: 'Tier 1',
    id: 'tier-1',
    component: <Tier1Intro />,
  },
  {
    name: 'Tier 2',
    id: 'tier-2',
    component: <Tier2Intro />,
    subroute: [
      {
        name: 'Archer',
        id: 'archer',
        component: <Archer />,
      },
      {
        name: 'Hunter',
        id: 'hunter',
        component: <Hunter />,
      },
      {
        name: 'Fire Mage',
        id: 'fire_mage',
        component: <FireMage />,
      },
      {
        name: 'Frost Mage',
        id: 'frost_mage',
        component: <FrostMage />,
      },
      {
        name: 'Monk',
        id: 'monk',
        component: <Monk />,
      },
      {
        name: 'Paladin',
        id: 'paladin',
        component: <Paladin />,
      },
    ],
  },
  {
    name: 'Tier 3',
    id: 'tier-3',
    component: <Tier3Intro />,
    subroute: [
      {
        name: 'Necromancer',
        id: 'necromancer',
        component: <Necromancer />,
      },
      {
        name: 'Engineer',
        id: 'engineer',
        component: <Engineer />,
      },
      {
        name: 'Shaman',
        id: 'shaman',
        component: <Shaman />,
      },
      {
        name: 'Reaper',
        id: 'reaper',
        component: <Reaper />,
      },
      {
        name: 'Vampire',
        id: 'vampire',
        component: <Vampire />,
      },
      {
        name: 'Dragonslayer',
        id: 'dragonslayer',
        component: <Dragonslayer />,
      },
      {
        name: 'Doom Knight',
        id: 'doom_knight',
        component: <DoomKnight />,
      },
    ],
  },
];
