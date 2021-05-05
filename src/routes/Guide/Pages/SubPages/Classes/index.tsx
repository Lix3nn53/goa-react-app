import React from 'react';

import GuidePage from '../../GuidePageComponent';
import GuideCommon from '../../GuideCommon';

// Tier 2
import Archer from './List/Tier2/Archer';

// Tier 3
import Dragonslayer from './List/Tier3/Dragonslayer';
import Necromancer from './List/Tier3/Necromancer';
import Reaper from './List/Tier3/Reaper';

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
        component: Dragonslayer,
      },
      {
        name: 'Fire Mage',
        id: 'fire_mage',
        component: Dragonslayer,
      },
      {
        name: 'Frost Mage',
        id: 'frost_mage',
        component: Dragonslayer,
      },
      {
        name: 'Monk',
        id: 'monk',
        component: Dragonslayer,
      },
      {
        name: 'Paladin',
        id: 'paladin',
        component: Dragonslayer,
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
        component: Dragonslayer,
      },
      {
        name: 'Shaman',
        id: 'shaman',
        component: Dragonslayer,
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
        component: Dragonslayer,
      },
    ],
  },
];
