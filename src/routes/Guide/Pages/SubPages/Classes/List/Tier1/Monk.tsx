import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier1/monk/icon.png';
import skillOne from '../../../../../../../img/guide/skills/36.png';
import skillTwo from '../../../../../../../img/guide/skills/57.png';
import skillThree from '../../../../../../../img/guide/skills/24.png';
import skillPassive from '../../../../../../../img/guide/skills/10.png';
import skillUltimate from '../../../../../../../img/guide/skills/54.png';

const Monk: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Monk"
          icon={icon}
          classTier={2}
          element="element.water"
          weapons={['Spear', 'Great Sword', 'Sword']}
          armors={['Plate', 'Feather', 'Light']}
          damage={6}
          defense={4}
          health={4}
          mana={4}
          critChance={7}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier1.monk.intro"
          playstyle="classes.tier1.monk.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Fists of Thunder', 'Tumble', 'Serenity', 'Crippling Wave', 'Aqua Prison']}
              descriptions={[
                'classes.tier1.monk.skill_one',
                'classes.tier1.monk.skill_two',
                'classes.tier1.monk.skill_three',
                'classes.tier1.monk.skill_passive',
                'classes.tier1.monk.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839450168684445736/unknown.png',
              name: 'Serenity',
              description: 'Player during Serenity',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839450395067285534/unknown.png',
              name: 'Aqua Prison',
              description: 'A test monster in Aqua Prison',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Monk;
