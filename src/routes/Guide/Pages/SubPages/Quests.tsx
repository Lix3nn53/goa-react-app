import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';

const Quests: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('quest.guide.p0')}</p>
        <h2>
          <span>{t('quest.guide.h1')}</span>
        </h2>
        <p>{t('quest.guide.p1')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907059224452927488/unknown.png',
              name: 'This npc has a new quest',
              description: 'This npc has a new quest',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907058491619938314/unknown.png',
              name: 'You have an active quest',
              description: 'You have an active quest',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907058681756131368/unknown1.png',
              name: 'You have a completed quest',
              description: 'You have a completed quest',
            },
          ]}
        />
        <h2>
          <span>{t('quest.guide.h2')}</span>
        </h2>
        <p>{t('quest.guide.p2')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907053181924692098/unknown.png',
              name: 'Quest Icon #1',
              description: 'Quest icon with item prizes',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907055333527146588/unknown.png',
              name: 'Quest Icon #2',
              description: 'Quest icon with kill objective',
            },
          ]}
        />
        <h2>
          <span>{t('quest.guide.h3')}</span>
        </h2>
        <p>{t('quest.guide.p3')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907056232869793792/unknown.png',
              name: 'Tablist With A Quest',
              description: 'Quest with a kill objective',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Quests;
