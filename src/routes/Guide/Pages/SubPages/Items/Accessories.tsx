import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../../components/Gallery';

const Accessories: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div className="items" style={{ flex: '10' }}>
        <p>{t('item.guide.accessory.p0')}</p>
        <h2>
          <span>{t('item.guide.accessory.h1')}</span>
        </h2>
        <p>{t('item.guide.accessory.p1')}</p>
        <h2>
          <span>{t('item.guide.accessory.h2')}</span>
        </h2>
        <p>{t('item.guide.accessory.p2')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/840015382706389022/unknown.png',
              name: 'Step 1: Open RPG Inventory by clicking the bag icon',
              description: 'Step 1: Open RPG Inventory by clicking the bag icon',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/840504455727284254/unknown.png',
              name: 'Step 2: Equip the accessory',
              description: 'Step 2: Equip the accessory',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Accessories;
