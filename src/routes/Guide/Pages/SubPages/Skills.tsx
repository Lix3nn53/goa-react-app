import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';

const Skills: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '2' }}>
        <p>{t('skills.guide.p0')}</p>
        <h2>{t('skills.guide.h1')}</h2>
        <p>{t('skills.guide.p1')}</p>
        <h2>{t('skills.guide.h2')}</h2>
        <p>{t('skills.guide.p2')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839467612349005844/unknown.png',
              name: 'Step 1: Open the Menu',
              description: 'Step 1: Open the Menu',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839470177640906782/unknown.png',
              name: 'Step 2: Click on Character',
              description: 'Step 2: Click on Character',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839542494177656862/unknown.png',
              name: 'Step 3: Click on Skills',
              description: 'Step 3: Click on Skills',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839542615639851028/unknown.png',
              name: 'Step 4: Spend your skill points',
              description: 'Step 4: Spend your skill points',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
