import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Table from '../../../../../components/Table';

const Armors: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div className="items" style={{ flex: '10' }}>
        <p>{t('item.guide.armor.p0')}</p>
        <h2>
          <span>{t('item.guide.armor.h1')}</span>
        </h2>
        <p>{t('item.guide.armor.p1')}</p>
        <h2>
          <span>{t('item.guide.armor.h2')}</span>
        </h2>
        <p>{t('item.guide.armor.p2')}</p>
        <Table
          headers={[
            <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.type')}</span>,
            <span style={{ fontWeight: 'bold' }}>
              <span role="img" aria-label="Red Heart">
                ❤️
              </span>{' '}
              {t('attribute.health')}
            </span>,
            <span style={{ fontWeight: 'bold' }}>
              <i className="fas fa-shield-alt" /> {t('attribute.defense')}
            </span>,
            <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.material')}</span>,
            <span style={{ fontWeight: 'bold' }}>
              <i className="fas fa-weight-hanging" /> {t('item.guide.armor.weight')}
            </span>,
            <span style={{ fontWeight: 'bold' }}>
              <span role="img" aria-label="Sparkles">
                ✨
              </span>{' '}
              {t('item.guide.armor.set_effect')}
            </span>,
          ]}
          cells={[
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.heavy.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.heavy.health')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.heavy.defense')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.heavy.material')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.heavy.weight')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.heavy.set_effect')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.plate.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.plate.health')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.plate.defense')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.plate.material')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.plate.weight')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.plate.set_effect')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.light.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.light.health')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.light.defense')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.light.material')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.light.weight')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.light.set_effect')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.feather.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.feather.health')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.feather.defense')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.feather.material')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.feather.weight')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.armor.feather.set_effect')}
              </span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.cloth.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.cloth.health')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.cloth.defense')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.cloth.material')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.cloth.weight')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.armor.cloth.set_effect')}</span>,
            ],
          ]}
        />
        <h2>
          <span>{t('item.guide.armor.h3')}</span>
        </h2>
        <p>{t('item.guide.armor.p3')}</p>
      </div>
    </div>
  );
};

export default Armors;
