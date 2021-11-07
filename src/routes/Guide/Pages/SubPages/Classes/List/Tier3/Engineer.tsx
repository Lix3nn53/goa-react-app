import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/engineer/icon.png';
import skillOne from '../../../../../../../img/guide/skills/18.png';
import skillTwo from '../../../../../../../img/guide/skills/19.png';
import skillThree from '../../../../../../../img/guide/skills/22.png';
import skillPassive from '../../../../../../../img/guide/skills/7.png';
import skillUltimate from '../../../../../../../img/guide/skills/62.png';

const Engineer: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Engineer"
          icon={icon}
          classTier={3}
          element="element.fire"
          weapons={['War Hammer', 'Great Sword', 'Sword']}
          armors={['Plate', 'Feather', 'Light']}
          damage={7}
          defense={5}
          health={5}
          mana={4}
          critChance={4}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier3.engineer.intro"
          playstyle="classes.tier3.engineer.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Turret', 'Bomb', 'Oil', 'Mecha Armor', 'Missile']}
              descriptions={[
                'classes.tier3.engineer.skill_one',
                'classes.tier3.engineer.skill_two',
                'classes.tier3.engineer.skill_three',
                'classes.tier3.engineer.skill_passive',
                'classes.tier3.engineer.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src: 'https://media.giphy.com/media/bMZwOUeocIxMXZ934o/giphy.gif',
              name: 'Turret',
              description: 'Turret firing arrows',
            },
            {
              src: 'https://media.giphy.com/media/VpgG19d7GYvXNSLhEd/giphy.gif',
              name: 'Bomb',
              description: 'Player casting bomb, you can see countdown on bomb.',
            },
            {
              src: 'https://media.giphy.com/media/Ap3Lfh2nJZ2l2ywuay/giphy.gif',
              name: 'Missile',
              description: 'Missile finding its path to target.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Engineer;
