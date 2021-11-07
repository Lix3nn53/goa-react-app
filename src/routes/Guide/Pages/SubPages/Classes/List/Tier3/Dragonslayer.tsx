import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/dragonslayer/icon.png';
import skillOne from '../../../../../../../img/guide/skills/8.png';
import skillTwo from '../../../../../../../img/guide/skills/27.png';
import skillThree from '../../../../../../../img/guide/skills/31.png';
import skillPassive from '../../../../../../../img/guide/skills/29.png';
import skillUltimate from '../../../../../../../img/guide/skills/23.png';

const Dragonslayer: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Dragonslayer"
          icon={icon}
          classTier={3}
          element="element.fire"
          weapons={['Battleaxe', 'Great Sword', 'Sword']}
          armors={['Plate', 'Feather', 'Light']}
          damage={7}
          defense={5}
          health={7}
          mana={2}
          critChance={2}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier3.dragonslayer.intro"
          playstyle="classes.tier3.dragonslayer.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Power Slash', 'Flame Burst', "Dragon's Charge", 'Warmth', 'Grand Skyfall']}
              descriptions={[
                'classes.tier3.dragonslayer.skill_one',
                'classes.tier3.dragonslayer.skill_two',
                'classes.tier3.dragonslayer.skill_three',
                'classes.tier3.dragonslayer.skill_passive',
                'classes.tier3.dragonslayer.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/833656796135686164/unknown.png',
              name: 'Power Slash',
              description: "Split second after player casted Power Slash, showing it's range",
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/832086714927153152/unknown.png',
              name: "Dragon's Charge",
              description:
                "While Dragon's Charge is active, do not get too close to a Dragonslayer!",
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/833655789661978634/unknown.png',
              name: 'Grand Skyfall Landing',
              description:
                "Split second after player landing after casting Grand Skyfall, showing it's range",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dragonslayer;
