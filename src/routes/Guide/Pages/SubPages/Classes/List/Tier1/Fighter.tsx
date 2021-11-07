import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier1/fighter/icon.png';
import skillOne from '../../../../../../../img/guide/skills/62.png';
import skillTwo from '../../../../../../../img/guide/skills/36.png';
import skillThree from '../../../../../../../img/guide/skills/57.png';
import skillPassive from '../../../../../../../img/guide/skills/58.png';
import skillUltimate from '../../../../../../../img/guide/skills/32.png';

const Fighter: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Fighter"
          icon={icon}
          classTier={2}
          element="element.fire"
          weapons={['Battleaxe', 'Great Sword', 'War Hammer']}
          armors={['Plate', 'Feather', 'Light']}
          damage={9}
          defense={5}
          health={7}
          mana={2}
          critChance={2}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier1.fighter.intro"
          playstyle="classes.tier1.fighter.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Jab', 'Uppercut', 'Dodge', 'Combo', 'In the zone']}
              descriptions={[
                'classes.tier1.fighter.skill_one',
                'classes.tier1.fighter.skill_two',
                'classes.tier1.fighter.skill_three',
                'classes.tier1.fighter.skill_passive',
                'classes.tier1.fighter.skill_ultimate',
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

export default Fighter;
