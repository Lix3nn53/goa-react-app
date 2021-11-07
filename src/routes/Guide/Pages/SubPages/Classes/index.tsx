import React from 'react';

// Tier 1
import Tier1Intro from './List/Tier1/Intro';
import Fighter from './List/Tier1/Fighter';
import FireMage from './List/Tier1/Fire Mage';
import Monk from './List/Tier1/Monk';
import Paladin from './List/Tier1/Paladin';
import Ranger from './List/Tier1/Ranger';

// Tier 2
import Tier2Intro from './List/Tier2/Intro';
import DoomKnight from './List/Tier2/Doom Knight';
import FrostMage from './List/Tier2/Frost Mage';
import Hunter from './List/Tier2/Hunter';
import Vampire from './List/Tier2/Vampire';
import WitchDoctor from './List/Tier2/Witch Doctor';

// Tier 3
import Tier3Intro from './List/Tier3/Intro';
import Dragonslayer from './List/Tier3/Dragonslayer';
import Engineer from './List/Tier3/Engineer';
import Necromancer from './List/Tier3/Necromancer';
import Reaper from './List/Tier3/Reaper';
import Shaman from './List/Tier3/Shaman';

export default [
  {
    name: 'Tier 1',
    id: 'tier-1',
    component: <Tier1Intro />,
    subroute: [
      {
        name: 'Fighter',
        id: 'fighter',
        component: <Fighter />,
      },
      {
        name: 'Ranger',
        id: 'ranger',
        component: <Ranger />,
      },
      {
        name: 'Fire Mage',
        id: 'fire_mage',
        component: <FireMage />,
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
    name: 'Tier 2',
    id: 'tier-2',
    component: <Tier2Intro />,
    subroute: [
      {
        name: 'Hunter',
        id: 'hunter',
        component: <Hunter />,
      },
      {
        name: 'Frost Mage',
        id: 'frost_mage',
        component: <FrostMage />,
      },
      {
        name: 'Vampire',
        id: 'vampire',
        component: <Vampire />,
      },
      {
        name: 'Doom Knight',
        id: 'doom_knight',
        component: <DoomKnight />,
      },
      {
        name: 'Witch Doctor',
        id: 'witch_doctor',
        component: <WitchDoctor />,
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
        name: 'Dragonslayer',
        id: 'dragonslayer',
        component: <Dragonslayer />,
      },
    ],
  },
];
