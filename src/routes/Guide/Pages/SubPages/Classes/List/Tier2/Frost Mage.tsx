import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/frost_mage/icon.png';
import skillOne from '../../../../../../../img/guide/skills/48.png';
import skillTwo from '../../../../../../../img/guide/skills/50.png';
import skillThree from '../../../../../../../img/guide/skills/24.png';
import skillPassive from '../../../../../../../img/guide/skills/51.png';
import skillUltimate from '../../../../../../../img/guide/skills/49.png';

const FrostMage: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Frost Mage"
          icon={icon}
          classTier={2}
          element="element.water"
          weapons={['Wand', 'Staff', 'Dagger']}
          armors={['Cloth', 'Feather', 'Light']}
          damage={9}
          defense={4}
          health={4}
          mana={6}
          critChance={2}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier2.frost_mage.intro"
          playstyle="classes.tier2.frost_mage.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Frostball', 'Ice Meteor', 'Frozen Meditation', 'Ice Spirit', 'Blizzard']}
              descriptions={[
                'classes.tier2.frost_mage.skill_one',
                'classes.tier2.frost_mage.skill_two',
                'classes.tier2.frost_mage.skill_three',
                'classes.tier2.frost_mage.skill_passive',
                'classes.tier2.frost_mage.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/795582339786473472/unknown.png',
              name: 'A Frozen enemy',
              description: 'A Frozen enemy',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FrostMage;
