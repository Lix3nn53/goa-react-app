import React from 'react';

import GuidePage from '../../GuidePageComponent';
import GuideCommon from '../../GuideCommon';

// Tier 2
import Archer from './List/Tier2/Archer';
import FireMage from './List/Tier2/Fire Mage';
import FrostMage from './List/Tier2/Frost Mage';
import Hunter from './List/Tier2/Hunter';
import Monk from './List/Tier2/Monk';
import Paladin from './List/Tier2/Paladin';

// Tier 3
import DoomKnight from './List/Tier3/Doom Knight';
import Dragonslayer from './List/Tier3/Dragonslayer';
import Engineer from './List/Tier3/Engineer';
import Necromancer from './List/Tier3/Necromancer';
import Reaper from './List/Tier3/Reaper';
import Shaman from './List/Tier3/Shaman';

export default [
  {
    name: 'Tier 1',
    id: 'tier-1',
    component: (
      <GuidePage>
        <GuideCommon paragraphs={['classes.tier1.description']} />
      </GuidePage>
    ),
  },
  {
    name: 'Tier 2',
    id: 'tier-2',
    component: (
      <GuidePage>
        <GuideCommon paragraphs={['classes.tier2.description']} />
      </GuidePage>
    ),
    subroute: [
      {
        name: 'Archer',
        id: 'archer',
        component: Archer,
      },
      {
        name: 'Hunter',
        id: 'hunter',
        component: Hunter,
      },
      {
        name: 'Fire Mage',
        id: 'fire_mage',
        component: FireMage,
      },
      {
        name: 'Frost Mage',
        id: 'frost_mage',
        component: FrostMage,
      },
      {
        name: 'Monk',
        id: 'monk',
        component: Monk,
      },
      {
        name: 'Paladin',
        id: 'paladin',
        component: Paladin,
      },
    ],
  },
  {
    name: 'Tier 3',
    id: 'tier-3',
    component: (
      <GuidePage>
        <GuideCommon paragraphs={['classes.tier3.description']} />
      </GuidePage>
    ),
    subroute: [
      {
        name: 'Necromancer',
        id: 'necromancer',
        component: Necromancer,
      },
      {
        name: 'Engineer',
        id: 'engineer',
        component: Engineer,
      },
      {
        name: 'Shaman',
        id: 'shaman',
        component: Shaman,
      },
      {
        name: 'Reaper',
        id: 'reaper',
        component: Reaper,
      },
      {
        name: 'Dragonslayer',
        id: 'dragonslayer',
        component: Dragonslayer,
      },
      {
        name: 'Doom Knight',
        id: 'doom_knight',
        component: DoomKnight,
      },
    ],
  },
];
