import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/reaper/icon.png';
import skillOne from '../../../../../../../img/guide/skills/12.png';
import skillTwo from '../../../../../../../img/guide/skills/55.png';
import skillThree from '../../../../../../../img/guide/skills/40.png';
import skillPassive from '../../../../../../../img/guide/skills/38.png';
import skillUltimate from '../../../../../../../img/guide/skills/58.png';

const Reaper: FunctionComponent = () => {
  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '6' }}>
        <ClassCard
          name="Reaper"
          icon={icon}
          classTier={3}
          element="element.air"
          weapons={['Dagger', 'Sword']}
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
          intro="classes.tier3.reaper.intro"
          playstyle="classes.tier3.reaper.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={[
                'Consuming Strike',
                'Soul Spike',
                'Realm of Darkness',
                'Soul Collector',
                "Assassin's Execution",
              ]}
              descriptions={[
                'classes.tier3.reaper.skill_one',
                'classes.tier3.reaper.skill_two',
                'classes.tier3.reaper.skill_three',
                'classes.tier3.reaper.skill_passive',
                'classes.tier3.reaper.skill_ultimate',
              ]}
            />
          }
        />
        <h2>Gallery</h2>
        <Gallery
          pictures={[
            {
              src: 'https://media.giphy.com/media/vVnIh1ZhwHmrasKKlE/source.gif',
              name: "Assassin's Execution",
              description: "Player casting Assassin's Execution on Test monster",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Reaper;
