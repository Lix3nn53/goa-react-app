import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';
import Table from '../../../../components/Table';

const Pets: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('pet.guide.p0')}</p>
        <h2>
          <span>{t('pet.guide.h1')}</span>
        </h2>
        <p>{t('pet.guide.p1')}</p>
        <h2>
          <span>{t('pet.guide.h2')}</span>
        </h2>
        <p>{t('pet.guide.p2')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908731000425701506/unknown.png',
              name: 'Equiping an egg',
              description: 'Equiping an egg',
            },
            {
              src: 'https://media.giphy.com/media/emp3uLQ0hPfEC873wk/giphy.gif',
              name: 'Minidragon GIF',
              description: 'Minidragon GIF',
            },
            {
              src: 'https://media.giphy.com/media/egUf00meY4Pv6M20yr/giphy-downsized-large.gif',
              name: 'Pet Follow GIF',
              description: 'Pet Follow GIF',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Pets;
