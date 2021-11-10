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
                'https://cdn.discordapp.com/attachments/689660026423345188/908125486872424508/unknown.png',
              name: 'Campfire',
              description: 'Campfire, the cooking block',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908124751887728640/unknown.png',
              name: 'Grindstone & fletching table',
              description:
                'Grindstone is for melee weaponsmith and fletching table is for ranged weaponsmith.',
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
                'https://cdn.discordapp.com/attachments/689660026423345188/907955538707496970/unknown.png',
              name: 'Select Level',
              description: 'Select crafting level',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907955610140692550/unknown.png',
              name: 'Crafting Gui',
              description: 'Crafting Gui',
            },
          ]}
        />
        <h2>
          <span>{t('crafting.guide.h3')}</span>
        </h2>
        <p>{t('crafting.guide.p3')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907956807824191528/unknown.png',
              name: 'Crafting Info',
              description: 'Crafting Info',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CraftingIntro;
