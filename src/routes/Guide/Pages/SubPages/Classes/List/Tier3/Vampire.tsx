import React, { FunctionComponent } from 'react';

import Gallery from '../../../../../../../components/Gallery';

import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/vampire/icon.png';
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
          damage={10}
          defense={6}
          health={8}
          mana={4}
        />
      </div>
      <div style={{ flex: '10' }}>
        <ClassBody
          intro="classes.tier3.vampire.intro"
          playstyle="classes.tier3.vampire.playstyle"
          skillComponent={
            <Skill
              icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
              names={['Bite', 'Blood Spray', 'Bat Form', 'Blood Reserves', 'Blood Bolts']}
              descriptions={[
                'classes.tier3.vampire.skill_one',
                'classes.tier3.vampire.skill_two',
                'classes.tier3.vampire.skill_three',
                'classes.tier3.vampire.skill_passive',
                'classes.tier3.vampire.skill_ultimate',
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

export default Vampire;
