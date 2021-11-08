import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Link from '../../../../../components/Link';
import Gallery from '../../../../../components/Gallery';

const Merchants: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div className="npcs" style={{ flex: '10' }}>
        <p>{t('npc.guide.merchant.p0')}</p>
        <Gallery
          size="small"
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
        <p>
          {t('npc.guide.merchant.p1.part1')}
          <Link style={{ flex: '1' }} to="/guide/items/enchanting">
            Item Enchanting
          </Link>
          {t('npc.guide.merchant.p1.part2')}
        </p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907211413544652800/unknown.png',
              name: 'Buy Weapons',
              description: 'Click to buy weapons.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907211588522635304/unknown.png',
              name: 'Enchant Items',
              description: 'Click to enchant items.',
            },
          ]}
        />
        <h2>
          <span>{t('npc.guide.merchant.h2')}</span>
        </h2>
        <p>
          {t('npc.guide.merchant.p2.part1')}
          <Link style={{ flex: '1' }} to="/guide/items/enchanting">
            Item Enchanting
          </Link>
          {t('npc.guide.merchant.p2.part2')}
        </p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907214648179310632/unknown.png',
              name: 'Buy Armors',
              description: 'Click to buy armors.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907214760431456296/unknown.png',
              name: 'Buy Shields',
              description: 'Click to buy shields.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907211588522635304/unknown.png',
              name: 'Enchant Items',
              description: 'Click to enchant items.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Merchants;
