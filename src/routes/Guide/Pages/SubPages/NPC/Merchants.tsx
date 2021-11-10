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
                'https://cdn.discordapp.com/attachments/689660026423345188/907342252471377930/unknown.png',
              name: 'A Weaponsmith NPC',
              description: 'A Weaponsmith NPC, right click to interract.',
            },
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
          <Link className="flex-one" to="/guide/items/enchanting">
            {t('item.enchanting')}
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
          <Link className="flex-one" to="/guide/items/enchanting">
            {t('item.enchanting')}
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
        <h2>
          <span>{t('npc.guide.merchant.h3')}</span>
        </h2>
        <p>{t('npc.guide.merchant.p3')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907215095296307220/unknown.png',
              name: 'Personal Storage',
              description: 'Click to open personal storage.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907215131128242216/unknown.png',
              name: 'Guild Storage',
              description: 'Click to open guild storage.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907215163034333194/unknown.png',
              name: 'Bazaar Storage',
              description: 'Click to open bazaar storage.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907215195653410836/unknown.png',
              name: 'Premium Storage',
              description: 'Click to open premium storage.',
            },
          ]}
        />
        <h2>
          <span>{t('npc.guide.merchant.h4')}</span>
        </h2>
        <p>{t('npc.guide.merchant.p4')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907214989268492288/unknown.png',
              name: 'Buy Gathering Tools',
              description: 'Click to but gathering tools.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907215019186462720/unknown.png',
              name: 'Buy Utility Items',
              description: 'Click to utility items.',
            },
          ]}
        />
        <h2>
          <span>{t('npc.guide.merchant.h5')}</span>
        </h2>
        <p>{t('npc.guide.merchant.p5')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907214900034674758/unknown.png',
              name: 'Buy Potions',
              description: 'Click to buy potions.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Merchants;
