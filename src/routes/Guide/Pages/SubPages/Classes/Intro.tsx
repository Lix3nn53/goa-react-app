import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Link from '../../../../../components/Link';
import Gallery from '../../../../../components/Gallery';

const ClassesIntro: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('classes.guide.p0')}</p>
        <h2>
          <span>{t('classes.guide.h1')}</span>
        </h2>
        <p>{t('classes.guide.p1')}</p>
        <Gallery
          size="small"
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
                'https://cdn.discordapp.com/attachments/689660026423345188/839467838255267890/unknown.png',
              name: 'Step 3: Click on Class',
              description: 'Step 3: Click on Class',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839467967615074304/unknown.png',
              name: 'Step 4: Select Class Tier',
              description: 'Step 4: Select Class Tier',
            },
          ]}
        />
        <h2>
          <span>{t('classes.guide.h2')}</span>
        </h2>
        <p>{t('classes.guide.p2')}</p>
        <h2>
          <span>{t('classes.guide.h3')}</span>
        </h2>
        <p>
          {t('classes.guide.p3')}
          <Link className="flex-one" to="/guide/skills">
            {t('skill.subject')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ClassesIntro;
