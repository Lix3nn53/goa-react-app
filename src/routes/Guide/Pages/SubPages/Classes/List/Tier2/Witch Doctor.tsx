import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/witch_doctor/icon.png';
import skillOne from '../../../../../../../img/guide/skills/39.png';
import skillTwo from '../../../../../../../img/guide/skills/33.png';
import skillThree from '../../../../../../../img/guide/skills/47.png';
import skillPassive from '../../../../../../../img/guide/skills/52.png';
import skillUltimate from '../../../../../../../img/guide/skills/62.png';

const WitchDoctor: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="WitchDoctor"
          icon={icon}
          classTier={3}
          element="element.water"
          weapons={['Dagger', 'Crossbow']}
          armors={['Feather', 'Light', 'Cloth']}
          offhand={['Dagger']}
          damage={7}
          defense={5}
          health={5}
          mana={6}
          critChance={2}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier2.witch_doctor.intro"
          playstyle="classes.tier2.witch_doctor.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={[
                'Poison Potion',
                'Heal Potion',
                'Buff Potion',
                'Drink Potion',
                'Explosive Potion',
              ]}
              descriptions={[
                'classes.tier2.witch_doctor.skill_one',
                'classes.tier2.witch_doctor.skill_two',
                'classes.tier2.witch_doctor.skill_three',
                'classes.tier2.witch_doctor.skill_passive',
                'classes.tier2.witch_doctor.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/901783690995171328/unknown.png',
              name: 'Bat Form',
              description: 'Player is flying in bat form',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default WitchDoctor;
