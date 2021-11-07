import React, { FunctionComponent } from 'react';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier1/ranger/icon.png';
import skillOne from '../../../../../../../img/guide/skills/13.png';
import skillTwo from '../../../../../../../img/guide/skills/57.png';
import skillThree from '../../../../../../../img/guide/skills/44.png';
import skillPassive from '../../../../../../../img/guide/skills/17.png';
import skillUltimate from '../../../../../../../img/guide/skills/16.png';

const Ranger: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Ranger"
          icon={icon}
          classTier={2}
          element="element.air"
          weapons={['Bow', 'Crossbow', 'Dagger']}
          armors={['Light', 'Feather', 'Cloth']}
          damage={6}
          defense={4}
          health={4}
          mana={4}
          critChance={7}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier1.ranger.intro"
          playstyle="classes.tier1.ranger.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Poison Arrow', 'Zephyr', 'Purple Wings', 'Sharpshooter', 'Make It Rain']}
              descriptions={[
                'classes.tier1.ranger.skill_one',
                'classes.tier1.ranger.skill_two',
                'classes.tier1.ranger.skill_three',
                'classes.tier1.ranger.skill_passive',
                'classes.tier1.ranger.skill_ultimate',
              ]}
            />
          }
        />
      </div>
    </div>
  );
};

export default Ranger;
