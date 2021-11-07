import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/shaman/icon.png';
import skillOne from '../../../../../../../img/guide/skills/22.png';
import skillTwo from '../../../../../../../img/guide/skills/56.png';
import skillThree from '../../../../../../../img/guide/skills/45.png';
import skillPassive from '../../../../../../../img/guide/skills/52.png';
import skillUltimate from '../../../../../../../img/guide/skills/54.png';

const Shaman: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Shaman"
          icon={icon}
          classTier={3}
          element="element.earth"
          weapons={['Staff', 'Wand', 'Dagger']}
          armors={['Cloth', 'Feather', 'Light']}
          damage={7}
          defense={5}
          health={5}
          mana={6}
          critChance={2}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier3.shaman.intro"
          playstyle="classes.tier3.shaman.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Totem', 'Thunderstorm', 'Polymorph', 'Purifying Waters', 'Surf']}
              descriptions={[
                'classes.tier3.shaman.skill_one',
                'classes.tier3.shaman.skill_two',
                'classes.tier3.shaman.skill_three',
                'classes.tier3.shaman.skill_passive',
                'classes.tier3.shaman.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/794042194674712586/unknown.png',
              name: 'Totem',
              description: 'Totem 3D model',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839424808550531072/unknown.png',
              name: 'Purifying Waters & Polymorph',
              description: 'Totem with Purifying Waters and Polymorph skill active.',
            },
            {
              src: 'https://media.giphy.com/media/0vjorN1Lxi1m3PkIU6/giphy.gif',
              name: 'Surf',
              description: 'Player casting Surf with totem and 3 enemies nearby.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Shaman;
