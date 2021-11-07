import React, { FunctionComponent } from 'react';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier1/paladin/icon.png';
import skillOne from '../../../../../../../img/guide/skills/4.png';
import skillTwo from '../../../../../../../img/guide/skills/25.png';
import skillThree from '../../../../../../../img/guide/skills/26.png';
import skillPassive from '../../../../../../../img/guide/skills/24.png';
import skillUltimate from '../../../../../../../img/guide/skills/22.png';

const Paladin: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Paladin"
          icon={icon}
          classTier={2}
          element="element.earth"
          weapons={['War Hammer', 'Great Sword', 'Sword']}
          armors={['Heavy', 'Plate', 'Light']}
          offhand={['Shield']}
          damage={4}
          defense={9}
          health={9}
          mana={2}
          critChance={1}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier1.paladin.intro"
          playstyle="classes.tier1.paladin.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={[
                'Wide Swing',
                'Absorption',
                'Victory March',
                'Guardian Angel',
                'Victory Flag',
              ]}
              descriptions={[
                'classes.tier1.paladin.skill_one',
                'classes.tier1.paladin.skill_two',
                'classes.tier1.paladin.skill_three',
                'classes.tier1.paladin.skill_passive',
                'classes.tier1.paladin.skill_ultimate',
              ]}
            />
          }
        />
      </div>
    </div>
  );
};

export default Paladin;
