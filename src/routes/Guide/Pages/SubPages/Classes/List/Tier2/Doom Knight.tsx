import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/doom_knight/icon.png';
import skillOne from '../../../../../../../img/guide/skills/3.png';
import skillTwo from '../../../../../../../img/guide/skills/46.png';
import skillThree from '../../../../../../../img/guide/skills/40.png';
import skillPassive from '../../../../../../../img/guide/skills/45.png';
import skillUltimate from '../../../../../../../img/guide/skills/44.png';

const DoomKnight: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Doom Knight"
          icon={icon}
          classTier={3}
          element="element.lightning"
          weapons={['Sword', 'Great Sword', 'War Hammer']}
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
          intro="classes.tier2.doom_knight.intro"
          playstyle="classes.tier2.doom_knight.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={[
                'Slice and dice',
                "Death's Grasp",
                'Leap of Doom',
                'Aura of Darkness',
                'Blackhole',
              ]}
              descriptions={[
                'classes.tier2.doom_knight.skill_one',
                'classes.tier2.doom_knight.skill_two',
                'classes.tier2.doom_knight.skill_three',
                'classes.tier2.doom_knight.skill_passive',
                'classes.tier2.doom_knight.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839421166622998558/unknown.png',
              name: 'Leap of Doom',
              description: 'Player flying after casting Leap of Doom',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839421277148020746/unknown.png',
              name: 'Darkhole',
              description: 'A spawned Darkhole',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DoomKnight;
