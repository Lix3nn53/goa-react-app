import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';
import Table from '../../../../components/Table';

const Revive: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('revive.guide.p0')}</p>
        <h2>
          <span>{t('revive.guide.h1')}</span>
        </h2>
      </div>
    </div>
  );
};

export default Revive;
