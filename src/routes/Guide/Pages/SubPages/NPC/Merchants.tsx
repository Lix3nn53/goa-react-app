import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../../components/Gallery';

const Merchants: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div className="npcs" style={{ flex: '10' }}>
        <p>{t('npc.guide.merchant.p0')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907208264121475102/unknown.png',
              name: 'Sell Items',
              description: 'Click to sell items from your inventory.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907208348548608020/unknown.png',
              name: 'Convert Coins',
              description: 'Click to convert between coin types.',
            },
          ]}
        />
        <h2>
          <span>{t('npc.guide.merchant.h1')}</span>
        </h2>
        <p>{t('npc.guide.merchant.p1')}</p>
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
              name: 'Step 2: Equip the merchant',
              description: 'Step 2: Equip the merchant',
            },
          ]}
        />
        <h2>
          <span>{t('npc.guide.merchant.h2')}</span>
        </h2>
        <p>{t('npc.guide.merchant.p2')}</p>
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
              name: 'Step 2: Equip the merchant',
              description: 'Step 2: Equip the merchant',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Merchants;
