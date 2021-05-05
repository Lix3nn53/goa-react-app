import React from 'react';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/monk/icon.png';
import skillOne from '../../../../../../../img/guide/skills/36.png';
import skillTwo from '../../../../../../../img/guide/skills/57.png';
import skillThree from '../../../../../../../img/guide/skills/24.png';
import skillPassive from '../../../../../../../img/guide/skills/10.png';
import skillUltimate from '../../../../../../../img/guide/skills/54.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Monk"
        icon={icon}
        classTier={3}
        element="element.air"
        weapons={['Spear', 'Great Sword', 'Sword']}
        armors={['Plate', 'Feather', 'Light']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
    <ClassBody
      intro="classes.tier2.monk.intro"
      playstyle="classes.tier2.monk.playstyle"
      skillComponent={
        <Skill
          icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
          names={['Fists of Thunder', 'Tumble', 'Serenity', 'Crippling Wave', 'Aqua Prison']}
          descriptions={[
            'classes.tier2.monk.skill_one',
            'classes.tier2.monk.skill_two',
            'classes.tier2.monk.skill_three',
            'classes.tier2.monk.skill_passive',
            'classes.tier2.monk.skill_ultimate',
          ]}
        />
      }
    />
  </GuidePage>
);
