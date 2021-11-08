import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../../components/Gallery';

const NPCIntro: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('npc.guide.p0')}</p>
        <p>{t('npc.guide.p1')}</p>
      </div>
    </div>
  );
};

export default NPCIntro;
