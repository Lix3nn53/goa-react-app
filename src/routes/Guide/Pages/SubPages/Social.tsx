import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';
import Table from '../../../../components/Table';

const Social: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('social.guide.p0')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908734452941881374/unknown.png',
              name: 'Character Info',
              description: 'Character Info',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908734408557740032/unknown.png',
              name: 'Trade Invite',
              description: 'Trade Invite',
            },
          ]}
        />
        <h2>
          <span>{t('social.guide.h1')}</span>
        </h2>
        <p>{t('social.guide.p1')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908736318056583188/unknown.png',
              name: 'Party Scoreboard',
              description: 'Party Scoreboard',
            },
          ]}
        />
        <h2>
          <span>{t('social.guide.h2')}</span>
        </h2>
        <p>{t('social.guide.p2')}</p>
      </div>
    </div>
  );
};

export default Social;
