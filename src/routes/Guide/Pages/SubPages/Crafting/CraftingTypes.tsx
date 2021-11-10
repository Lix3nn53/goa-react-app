import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Link from '../../../../../components/Link';
import Gallery from '../../../../../components/Gallery';

const CraftingTypes: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('crafting.guide.types.p0')}</p>
        <h2>
          <span>{t('crafting.guide.types.h1')}</span>
        </h2>
        <p>{t('crafting.guide.types.p1')}</p>
        <h2>
          <span>{t('crafting.guide.types.h2')}</span>
        </h2>
        <p>{t('crafting.guide.types.p2')}</p>
        <h2>
          <span>{t('crafting.guide.types.h3')}</span>
        </h2>
        <p>{t('crafting.guide.types.p3')}</p>
        <h2>
          <span>{t('crafting.guide.types.h4')}</span>
        </h2>
        <p>{t('crafting.guide.types.p4')}</p>
        <h2>
          <span>{t('crafting.guide.types.h5')}</span>
        </h2>
        <p>{t('crafting.guide.types.p5')}</p>
        <h2>
          <span>{t('crafting.guide.types.h6')}</span>
        </h2>
        <p>{t('crafting.guide.types.p6')}</p>
        <h2>
          <span>{t('crafting.guide.types.h7')}</span>
        </h2>
        <p>{t('crafting.guide.types.p7')}</p>
        <h2>
          <span>{t('crafting.guide.types.h8')}</span>
        </h2>
        <p>{t('crafting.guide.types.p8')}</p>
      </div>
    </div>
  );
};

export default CraftingTypes;
