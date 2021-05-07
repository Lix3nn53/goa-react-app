import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Tier2Intro: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>{t('classes.tier3.description')}</div>
    </div>
  );
};

export default Tier2Intro;
