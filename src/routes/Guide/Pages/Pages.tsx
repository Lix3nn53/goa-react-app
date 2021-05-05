import React from 'react';

import Gallery from '../../../components/Gallery';

import GuidePage from './GuidePageComponent';
import GuideCommon from './GuideCommon';

import Classes from './SubPages/Classes/index';

export default [
  {
    name: 'Introduction',
    id: 'introduction',
    component: <GuidePage />,
  },
  {
    name: 'How to play?',
    id: 'how-to-play',
  },
  {
    name: 'Classes',
    id: 'classes',
    subroute: Classes,
    component: (
      <GuidePage>
        <GuideCommon
          paragraphs={['classes.guide.p0', 'classes.guide.p1']}
          headers={['classes.guide.h1']}
        />
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839467612349005844/unknown.png',
              name: 'Step 1: Open the Menu',
              description: 'Step 1: Open the Menu',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839470177640906782/unknown.png',
              name: 'Step 2: Click on Character',
              description: 'Step 2: Click on Character',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839467838255267890/unknown.png',
              name: 'Step 3: Click on Class',
              description: 'Step 3: Click on Class',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839467967615074304/unknown.png',
              name: 'Step 4: Select Class Tier',
              description: 'Step 4: Select Class Tier',
            },
          ]}
        />
        <GuideCommon paragraphs={['', 'classes.guide.p2']} headers={['classes.guide.h2']} />
      </GuidePage>
    ),
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Attributes',
    id: 'attributes',
    component: <GuidePage>Attr test</GuidePage>,
  },
  {
    name: 'Pets',
    id: 'pets',
  },
  {
    name: 'Quests',
    id: 'quests',
  },
  {
    name: 'RPG Inventory',
    id: 'rpg-inventory',
  },
  {
    name: 'Economy',
    id: 'economy',
  },
  {
    name: 'Dungeons',
    id: 'dungeons',
  },
  {
    name: 'Social',
    id: 'social',
  },
  {
    name: 'Crafting',
    id: 'crafting',
  },
  {
    name: 'Revive',
    id: 'revive',
  },
  {
    name: 'Items',
    id: 'items',
  },
  {
    name: 'Skills3',
    id: 'skills11',
  },
  {
    name: 'Skills3',
    id: 'skills12',
  },
  {
    name: 'Skills3',
    id: 'skills13',
  },
  {
    name: 'Skills3',
    id: 'skills14',
  },
];
