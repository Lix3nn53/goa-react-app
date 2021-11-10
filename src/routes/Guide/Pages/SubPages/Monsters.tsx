import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';

const Monsters: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('monster.guide.p0')}</p>
        <h2>
          <span>{t('monster.guide.h1')}</span>
        </h2>
        <p>{t('monster.guide.p1')}</p>
        <h2>
          <span>{t('monster.guide.h2')}</span>
        </h2>
        <p>{t('monster.guide.p2')}</p>
        <h2>
          <span>{t('monster.guide.h3')}</span>
        </h2>
        <p>{t('monster.guide.p3')}</p>
      </div>
    </div>
  );
};

export default Monsters;
