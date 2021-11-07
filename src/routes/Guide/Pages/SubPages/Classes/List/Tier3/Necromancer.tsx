import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/necromancer/icon.png';
import skillOne from '../../../../../../../img/guide/skills/42.png';
import skillTwo from '../../../../../../../img/guide/skills/39.png';
import skillThree from '../../../../../../../img/guide/skills/38.png';
import skillPassive from '../../../../../../../img/guide/skills/47.png';
import skillUltimate from '../../../../../../../img/guide/skills/45.png';

const Necromancer: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Necromancer"
          icon={icon}
          classTier={3}
          element="element.lightning"
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
          intro="classes.tier3.necromancer.intro"
          playstyle="classes.tier3.necromancer.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Summon', 'Skullshot', 'Life Drain', 'Bone Armor', 'Frozen Colossus']}
              descriptions={[
                'classes.tier3.necromancer.skill_one',
                'classes.tier3.necromancer.skill_two',
                'classes.tier3.necromancer.skill_three',
                'classes.tier3.necromancer.skill_passive',
                'classes.tier3.necromancer.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689794547101990922/815618175131320350/unknown.png',
              name: 'Freeze Range',
              description: 'Split second after Frozen Colossus casted Freeze, showing effect range',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/795578786392965120/unknown.png',
              name: 'Casting Freeze',
              description: 'Frozen Colossuses are casting Freeze',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/795582339786473472/unknown.png',
              name: 'Frozen status',
              description: 'Frozen status',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/795268511130714152/unknown.png',
              name: 'Skeleton Army',
              description: 'Army of skeletons',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Necromancer;
