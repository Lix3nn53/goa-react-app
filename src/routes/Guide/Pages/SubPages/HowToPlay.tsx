import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';

const HowToPlay: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('guide.how-to-play.p0')}</p>
        <ol>
          <li>
            {t('guide.how-to-play.step1.text1')}
            {t('guide.server-ip')}
            {t('guide.how-to-play.step1.text2')}
          </li>
          <li>{t('guide.how-to-play.step2')}</li>
          <li>{t('guide.how-to-play.step3')}</li>
        </ol>
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/839775943789903873/unknown.png',
              name: `2. ${t('guide.how-to-play.step2')}`,
              description: `2. ${t('guide.how-to-play.step2')}`,
            },
          ]}
        />
        <h2>
          <span>{t('guide.how-to-play.h1')}</span>
        </h2>

        <ol>
          <li>{t('guide.how-to-play.p1.step1')}</li>
          <li>{t('guide.how-to-play.p1.step2')}</li>
        </ol>
      </div>
    </div>
  );
};

export default HowToPlay;
