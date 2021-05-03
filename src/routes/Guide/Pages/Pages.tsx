import React from 'react';

import GuidePage from './GuidePageComponent';

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
