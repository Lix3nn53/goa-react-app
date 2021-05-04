import React from 'react';

import Gallery from '../../../../../../../components/Gallery';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/necromancer/icon.png';
import skillOne from '../../../../../../../img/guide/skills/42.png';
import skillTwo from '../../../../../../../img/guide/skills/39.png';
import skillThree from '../../../../../../../img/guide/skills/38.png';
import skillPassive from '../../../../../../../img/guide/skills/47.png';
import skillUltimate from '../../../../../../../img/guide/skills/45.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Necromancer"
        icon={icon}
        classTier={3}
        element="element.lightning"
        weapons={['Wand', 'Staff', 'Dagger']}
        armors={['Cloth', 'Feather', 'Light']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
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
    <Gallery
      pictures={[
        { src: 'https://www.w3schools.com/howto/img_lights_wide.jpg', name: 'img_lights_wide' },
        {
          src:
            'https://images.unsplash.com/photo-1572985025058-f27aeca1b8bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          name: 'img_nature_wide',
        },
        { src: 'https://www.w3schools.com/howto/img_snow_wide.jpg', name: 'img_snow_wide' },
        {
          src: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
          name: 'img_mountains_wide',
        },
      ]}
    />
  </GuidePage>
);
