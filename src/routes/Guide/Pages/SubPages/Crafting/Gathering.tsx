import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Link from '../../../../../components/Link';
import Gallery from '../../../../../components/Gallery';

const Gathering: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('crafting.guide.merchant.p0')}</p>
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
      </div>
    </div>
  );
};

export default Gathering;
