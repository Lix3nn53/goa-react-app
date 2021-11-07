import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/vampire/icon.png';
import skillOne from '../../../../../../../img/guide/skills/60.png';
import skillTwo from '../../../../../../../img/guide/skills/64.png';
import skillThree from '../../../../../../../img/guide/skills/45.png';
import skillPassive from '../../../../../../../img/guide/skills/63.png';
import skillUltimate from '../../../../../../../img/guide/skills/59.png';

const Vampire: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Vampire"
          icon={icon}
          classTier={3}
          element="element.lightning"
          weapons={['Dagger', 'Crossbow']}
          armors={['Feather', 'Light', 'Cloth']}
          offhand={['Dagger']}
          damage={8}
          defense={4}
          health={4}
          mana={2}
          critChance={7}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier2.vampire.intro"
          playstyle="classes.tier2.vampire.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Bite', 'Blood Spray', 'Bat Form', 'Blood Reserves', 'Blood Bolts']}
              descriptions={[
                'classes.tier2.vampire.skill_one',
                'classes.tier2.vampire.skill_two',
                'classes.tier2.vampire.skill_three',
                'classes.tier2.vampire.skill_passive',
                'classes.tier2.vampire.skill_ultimate',
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

export default Vampire;
