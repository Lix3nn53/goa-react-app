import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../../components/Gallery';

const Accessories: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div className="items" style={{ flex: '10' }}>
        <p>{t('item.guide.enchanting.p0')}</p>
        <h2>
          <span>{t('item.guide.enchanting.h1')}</span>
        </h2>
        <p>{t('item.guide.enchanting.p1')}</p>
        <h2>
          <span>{t('item.guide.enchanting.h2')}</span>
        </h2>
        <p>{t('item.guide.enchanting.p2')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/840582831532670985/unknown.png',
              name: 'Enchant Stones',
              description: 'Enchant Stones',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/840582138351845406/unknown.png',
              name: 'Step 1: Click enchant items on smith NPC gui',
              description: 'Step 1: Click enchant items on smith NPC gui',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/840582983827718164/unknown.png',
              name: 'Step 2: Place your item and enchant stone and click on emerald',
              description: 'Step 2: Place your item and enchant stone and click on emerald',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Accessories;
