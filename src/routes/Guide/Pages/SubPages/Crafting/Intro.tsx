import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../../components/Gallery';

const CraftingIntro: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('crafting.guide.p0')}</p>
        <h2>
          <span>{t('crafting.guide.h1')}</span>
        </h2>
        <p>{t('crafting.guide.p1')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839775943789903873/unknown.png',
              name: `2. ${t('guide.how-to-play.step2')}`,
              description: `2. ${t('guide.how-to-play.step2')}`,
            },
          ]}
        />
        <h2>
          <span>{t('crafting.guide.h2')}</span>
        </h2>
        <p>{t('crafting.guide.p2')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839775943789903873/unknown.png',
              name: `2. ${t('guide.how-to-play.step2')}`,
              description: `2. ${t('guide.how-to-play.step2')}`,
            },
          ]}
        />
        <h2>
          <span>{t('crafting.guide.h3')}</span>
        </h2>
        <p>{t('crafting.guide.p3')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839775943789903873/unknown.png',
              name: `2. ${t('guide.how-to-play.step2')}`,
              description: `2. ${t('guide.how-to-play.step2')}`,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CraftingIntro;
