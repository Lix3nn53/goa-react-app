import React from 'react';

import Introduction from './SubPages/Introduction';
import HowToPlay from './SubPages/HowToPlay';
import ClassesIntro from './SubPages/Classes/Intro';
import Classes from './SubPages/Classes/index';
import Skills from './SubPages/Skills';
import Attributes from './SubPages/Attributes';
import ItemsIntro from './SubPages/Items/Intro';
import Items from './SubPages/Items/index';
import Quests from './SubPages/Quests';
import NPCIntro from './SubPages/NPC/Intro';
import NPC from './SubPages/NPC/index';
import Monsters from './SubPages/Monsters';
import Dungeons from './SubPages/Dungeons';

export default [
  {
    name: 'guide.introduction.subject',
    id: 'introduction',
    component: <Introduction />,
  },
  {
    name: 'guide.how-to-play.subject',
    id: 'how-to-play',
    component: <HowToPlay />,
  },
  {
    name: 'classes.subject',
    id: 'classes',
    subroute: Classes,
    component: <ClassesIntro />,
  },
  {
    name: 'skill.subject',
    id: 'skills',
    component: <Skills />,
  },
  {
    name: 'attribute.subject',
    id: 'attributes',
    component: <Attributes />,
  },
  {
    name: 'item.subject',
    id: 'items',
    subroute: Items,
    component: <ItemsIntro />,
  },
  {
    name: 'quest.subject',
    id: 'quests',
    component: <Quests />,
  },
  {
    name: 'npc.subject',
    id: 'npc',
    subroute: NPC,
    component: <NPCIntro />,
  },
  {
    name: 'monster.subject',
    id: 'monsters',
    component: <Monsters />,
  },
  {
    name: 'dungeon.subject',
    id: 'dungeons',
    component: <Dungeons />,
  },
  {
    name: 'crafting.subject',
    id: 'crafting',
  },
  {
    name: 'economy.subject',
    id: 'economy',
  },
  {
    name: 'pet.subject',
    id: 'pets',
  },
  {
    name: 'social.subject',
    id: 'social',
  },
  {
    name: 'revive.subject',
    id: 'revive',
  },
];
