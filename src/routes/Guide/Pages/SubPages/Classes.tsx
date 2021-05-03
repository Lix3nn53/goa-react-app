import React from 'react';

import GuidePage from '../GuidePageComponent';

import icondragonslayer from '../../../../img/guide/classes/tier3/dragonslayer/icon.png';
import ClassCard from './ClassCard';

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
    component: <GuidePage />,
    subroute: [
      {
        name: 'Dragonslayer',
        id: 'dragonslayer',
        component: (
          <GuidePage
            right={
              <ClassCard
                name="Dragonslayer"
                icon={icondragonslayer}
                classTier={3}
                element="🔥 Fire"
                weapons={['Battleaxe', 'Great Sword', 'Sword']}
                armors={['Plate Armor', 'Feather Armor', 'Light Armor']}
                damage={10}
                defense={6}
                health={8}
                mana={4}
              />
            }
          >
            <p>Dragonslayer is a tier 3 class in Guardians of Adelia.</p>
            <h2>Playstyle</h2>
            <p>
              Dragonslayer&apos;s skills and passive focuses around hitting multiple enemies at
              once. So bring monsters together and crush them all at once!
            </p>
            <h2>Skills</h2>
          </GuidePage>
        ),
      },
      {
        name: 'Mage',
        id: 'mage',
        component: <GuidePage />,
      },
    ],
  },
];
