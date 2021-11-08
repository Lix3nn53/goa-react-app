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
    name: 'guide.classes.subject',
    id: 'classes',
    subroute: Classes,
    component: <ClassesIntro />,
  },
  {
    name: 'guide.skills.subject',
    id: 'skills',
    component: <Skills />,
  },
  {
    name: 'guide.attributes.subject',
    id: 'attributes',
    component: <Attributes />,
  },
  {
    name: 'guide.items.subject',
    id: 'items',
    subroute: Items,
    component: <ItemsIntro />,
  },
  {
    name: 'guide.quests.subject',
    id: 'quests',
    component: <Quests />,
  },
  {
    name: 'guide.npc.subject',
    id: 'npc',
    subroute: NPC,
    component: <NPCIntro />,
  },
  {
    name: 'guide.monsters.subject',
    id: 'monsters',
  },
  {
    name: 'guide.dungeons.subject',
    id: 'dungeons',
  },
  {
    name: 'guide.crafting.subject',
    id: 'crafting',
  },
  {
    name: 'guide.economy.subject',
    id: 'economy',
  },
  {
    name: 'guide.pets.subject',
    id: 'pets',
  },
  {
    name: 'guide.social.subject',
    id: 'social',
  },
  {
    name: 'guide.revive.subject',
    id: 'revive',
  },
];
