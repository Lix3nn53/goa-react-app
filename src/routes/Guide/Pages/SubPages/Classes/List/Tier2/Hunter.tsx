import React from 'react';

import Gallery from '../../../../../../../components/Gallery';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier2/hunter/icon.png';
import skillOne from '../../../../../../../img/guide/skills/18.png';
import skillTwo from '../../../../../../../img/guide/skills/15.png';
import skillThree from '../../../../../../../img/guide/skills/46.png';
import skillPassive from '../../../../../../../img/guide/skills/17.png';
import skillUltimate from '../../../../../../../img/guide/skills/35.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Hunter"
        icon={icon}
        classTier={2}
        element="element.earth"
        weapons={['Crossbow', 'Bow', 'Dagger']}
        armors={['Light', 'Feather', 'Cloth']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
    <ClassBody
      intro="classes.tier2.hunter.intro"
      playstyle="classes.tier2.hunter.playstyle"
      skillComponent={
        <Skill
          icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
          names={['Explosive Arrow', 'Volley', 'Hookshot', 'Piercing Arrow', 'Bear Trap']}
          descriptions={[
            'classes.tier2.hunter.skill_one',
            'classes.tier2.hunter.skill_two',
            'classes.tier2.hunter.skill_three',
            'classes.tier2.hunter.skill_passive',
            'classes.tier2.hunter.skill_ultimate',
          ]}
        />
      }
    />
    <h2>Gallery</h2>
    <Gallery
      pictures={[
        {
          src:
            'https://cdn.discordapp.com/attachments/689660026423345188/839433556718911528/unknown.png',
          name: 'Bear Trap',
          description: 'An active Bear Trap',
        },
      ]}
    />
  </GuidePage>
);
