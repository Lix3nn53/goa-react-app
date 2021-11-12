import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';
import Table from '../../../../components/Table';

const Economy: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('economy.guide.p0')}</p>
        <h2>
          <span>{t('economy.guide.h1')}</span>
        </h2>
        <p>{t('economy.guide.p1')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908720980778713168/unknown.png',
              name: 'Coin description',
              description: 'Coin description',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908721396572639305/unknown.png',
              name: 'Bronze, Silver and Gold on ground',
              description: 'Bronze, Silver and Gold on ground',
            },
          ]}
        />
        <h2>
          <span>{t('economy.guide.h2')}</span>
        </h2>
        <p>{t('economy.guide.p2')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908721645659783168/unknown.png',
              name: 'Item Price',
              description: 'You can see item price on bottom while buying',
            },
          ]}
        />
        <h2>
          <span>{t('economy.guide.h3')}</span>
        </h2>
        <p>{t('economy.guide.p3')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908721943501504622/unknown.png',
              name: 'Sell Gui',
              description: 'Sell Gui',
            },
          ]}
        />
        <h2>
          <span>{t('economy.guide.h4')}</span>
        </h2>
        <p>{t('economy.guide.p4')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908734408557740032/unknown.png',
              name: 'Interract Gui',
              description: 'Interract Gui',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908734796539265084/unknown.png',
              name: 'Trade Gui',
              description: 'Trade Gui',
            },
          ]}
        />
        <h2>
          <span>{t('economy.guide.h5')}</span>
        </h2>
        <p>{t('economy.guide.p5')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908724258484662272/unknown.png',
              name: 'Bazaar on Menu',
              description: 'Bazaar on Menu',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908724450424406086/unknown.png',
              name: 'An open bazaar',
              description: 'An open bazaar',
            },
          ]}
        />
        <h2>
          <span>{t('economy.guide.h6')}</span>
        </h2>
        <p>{t('economy.guide.p6')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908723402787917844/unknown.png',
              name: 'Daily Rewards',
              description: 'Daily Rewards',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Economy;
