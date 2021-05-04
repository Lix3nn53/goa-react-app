import React from 'react';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/dragonslayer/icon.png';
import skillOne from '../../../../../../../img/guide/skills/8.png';
import skillTwo from '../../../../../../../img/guide/skills/27.png';
import skillThree from '../../../../../../../img/guide/skills/31.png';
import skillPassive from '../../../../../../../img/guide/skills/29.png';
import skillUltimate from '../../../../../../../img/guide/skills/23.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Dragonslayer"
        icon={icon}
        classTier={3}
        element="element.fire"
        weapons={['Battleaxe', 'Great Sword', 'Sword']}
        armors={['Plate', 'Feather', 'Light']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
    <ClassBody
      intro="classes.tier3.dragonslayer.intro"
      playstyle="classes.tier3.dragonslayer.playstyle"
      skillComponent={
        <Skill
          icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
          names={['Power Slash', 'Flame Burst', "Dragon's Charge", 'Warmth', 'Grand Skyfall']}
          descriptions={[
            'classes.tier3.dragonslayer.skill_one',
            'classes.tier3.dragonslayer.skill_two',
            'classes.tier3.dragonslayer.skill_three',
            'classes.tier3.dragonslayer.skill_passive',
            'classes.tier3.dragonslayer.skill_ultimate',
          ]}
        />
      }
    />
  </GuidePage>
);
