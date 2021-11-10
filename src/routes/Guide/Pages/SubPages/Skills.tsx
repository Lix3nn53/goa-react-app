import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Link from '../../../../components/Link';
import Gallery from '../../../../components/Gallery';

const Skills: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('skill.guide.p0')}</p>
        <h2>
          <span>{t('skill.guide.h1')}</span>
        </h2>
        <p>{t('skill.guide.p1')}</p>
        <h2>
          <span>{t('skill.guide.h2')}</span>
        </h2>
        <p>
          {t('skill.guide.p2')}{' '}
          <Link className="flex-one" to="/guide/classes">
            {t('classes.subject')}
          </Link>
        </p>

        <h2>
          <span>{t('skill.guide.h3')}</span>
        </h2>
        <p>{t('skill.guide.p3')}</p>
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
