import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';

const Dungeons: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('dungeon.guide.p0')}</p>
        <h2>
          <span>{t('dungeon.guide.h1')}</span>
        </h2>
        <p>{t('dungeon.guide.p1')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907403880466358272/unknown.png',
              name: 'Dungeon Portal',
              description: 'A purple dungeon portal, there are different colors of portals.',
            },
          ]}
        />
        <h2>
          <span>{t('dungeon.guide.h2')}</span>
        </h2>
        <p>{t('dungeon.guide.p2')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907404159840567296/unknown.png',
              name: 'Join Gui',
              description: 'A purple dungeon portal, there are different colors of portals.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907408801613881434/unknown.png',
              name: 'Countdown',
              description: 'A purple dungeon portal, there are different colors of portals.',
            },
          ]}
        />
        <h2>
          <span>{t('dungeon.guide.h3')}</span>
        </h2>
        <p>{t('dungeon.guide.p3')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907406476308533278/unknown.png',
              name: 'Scoreboard',
              description: 'A purple dungeon portal, there are different colors of portals.',
            },
          ]}
        />
        <h2>
          <span>{t('dungeon.guide.h4')}</span>
        </h2>
        <p>{t('dungeon.guide.p4')}</p>
        <h2>
          <span>{t('dungeon.guide.h5')}</span>
        </h2>
        <p>{t('dungeon.guide.p5')}</p>
        <h2>
          <span>{t('dungeon.guide.h6')}</span>
        </h2>
        <p>{t('dungeon.guide.p6')}</p>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907421567867310100/unknown.png',
              name: 'Messages On Dungeon Complete',
              description: 'Info messages on dungeon complete.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907421677066018836/unknown.png',
              name: 'Prize Chests',
              description:
                '4 chests spawn for each player on dungeon complete, 1 is taken by player in this picture.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907425519098802226/unknown.png',
              name: 'Player Holding Prize Chest',
              description: 'A player is holding prize chest.',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/907422460507467826/unknown.png',
              name: 'Prize Chest Opening',
              description: 'Prize chest gui animation is playing to give a random item to player.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dungeons;
