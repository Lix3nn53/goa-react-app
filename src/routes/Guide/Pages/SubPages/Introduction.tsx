import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Link from '../../../../components/Link';

const Introduction: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('guide.introduction.p0')}</p>
        <p>
          {t('guide.introduction.p1.text1')}
          <Link to="/guide/how-to-play">{t('guide.introduction.p1.link1')}</Link>
          {t('guide.introduction.p1.text2')}
          <Link to="/guide/classes">{t('guide.introduction.p1.link2')}</Link>.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
