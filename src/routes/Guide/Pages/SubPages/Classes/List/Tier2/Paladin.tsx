import React from 'react';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/paladin/icon.png';
import skillOne from '../../../../../../../img/guide/skills/4.png';
import skillTwo from '../../../../../../../img/guide/skills/25.png';
import skillThree from '../../../../../../../img/guide/skills/26.png';
import skillPassive from '../../../../../../../img/guide/skills/24.png';
import skillUltimate from '../../../../../../../img/guide/skills/22.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Paladin"
        icon={icon}
        classTier={2}
        element="element.air"
        weapons={['War Hammer', 'Great Sword', 'Sword']}
        armors={['Heavy', 'Plate', 'Light']}
        offhand={['Shield']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
    <ClassBody
      intro="classes.tier2.paladin.intro"
      playstyle="classes.tier2.paladin.playstyle"
      skillComponent={
        <Skill
          icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
          names={['Wide Swing', 'Absorption', 'Victory March', 'Guardian Angel', 'Victory Flag']}
          descriptions={[
            'classes.tier2.paladin.skill_one',
            'classes.tier2.paladin.skill_two',
            'classes.tier2.paladin.skill_three',
            'classes.tier2.paladin.skill_passive',
            'classes.tier2.paladin.skill_ultimate',
          ]}
        />
      }
    />
  </GuidePage>
);
